import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.memory = new Map(); // memoria de variables
    }

    visitPrograma(ctx) {
        for (const instr of ctx.instruccion()) {
            this.visit(instr);
        }
    }

    visitAsignacion(ctx) {
        const nombre = ctx.variable().getText();
        const valor = this.visit(ctx.expresion());
        this.memory.set(nombre, valor);
        console.log(`Asignación: ${nombre} = ${valor}`);
    }

    visitSalida(ctx) {
        const valor = this.visit(ctx.expresion());
        console.log("Resultado:", valor);
    }

    visitExpresion(ctx) {
        let resultado = this.visit(ctx.termino(0));
        const operadores = ctx.children.filter(c => ['+', '-', '*', '/'].includes(c.getText()));
        const terminos = ctx.termino();

        for (let i = 1; i < terminos.length; i++) {
            const operador = operadores[i - 1].getText();
            const valor = this.visit(terminos[i]);
            switch (operador) {
                case '+': resultado += valor; break;
                case '-': resultado -= valor; break;
                case '*': resultado *= valor; break;
                case '/': resultado /= valor; break;
            }
        }

        return resultado;
    }

    visitTermino(ctx) {
        if (ctx.NUMERO()) {
            return parseInt(ctx.NUMERO().getText());
        } else if (ctx.variable()) {
            const nombre = ctx.variable().getText();
            return this.memory.get(nombre) ?? 0;
        } else {
            return this.visit(ctx.expresion());
        }
    }

    visitVariable(ctx) {
        return ctx.IDENTIFICADOR().getText();
    }

    visitVariar(ctx) {
        const varName = ctx.variable().getText();
        const desde = this.visit(ctx.expresion(0));
        const hasta = this.visit(ctx.expresion(1));
        const paso = ctx.expresion(2) ? this.visit(ctx.expresion(2)) : 1;
        const instrucciones = ctx.bloque().instruccion();

        for (let i = desde; i <= hasta; i += paso) {
            this.memory.set(varName, i);
            for (const instr of instrucciones) {
                this.visit(instr);
            }
        }
    }
}
