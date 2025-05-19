# ¿Qué debo tener instalado antes de empezar?

Antes de ejecutar este proyecto, asegurate de tener instalado:

- Visual Studio Code  
- Node.js  
- Java JDK  
- Git  
- ANTLR 4.13.2

---

## ¿Qué hace este programa?

Este proyecto es un intérprete de un lenguaje personalizado en español usando ANTLR4 y JavaScript.  
Permite declarar variables, hacer operaciones, imprimir por consola y usar estructuras de repetición (`variar`).

---

## Cómo abrir el repositorio

Abrí una terminal (puede ser CMD, PowerShell o Git Bash) en tu ordenador.

Elegí una carpeta donde querés guardar el proyecto (por ejemplo: Documentos).
Para crear esta carpeta en la terminal, escribimos el comando "md (nombre que le quieras poner", luego de esto para cambiar a nuestro archivo pondemos: "cd (nombre del archivo creado".


Despues cloná el repositorio:

Escribe:
git clone https://github.com/arianarios88/52097.git
Y luego:
cd 52097
Finalmente ponemos "code ."

Luego de esto nos abrira el Visual Estudio con todo nuestro repositorio. Nos iremos al archivo input donde pegaremos el input correcto 1:

variar x desde 1 hasta 5 con paso 1 hacer
    x <- x + 1
    escribir x
fin_variar


Y corremos el programa con F5.

Presionamos ctrl + ñ que nos abrira la terminal, donde nos daran la tabla de lexemas y tokens, arbol de derivacion y resultado, para esto pondremos el comando "node index.js" y presionamos enter, esta entrada deberia mostrarnos el siguiente resultado:

Tabla de Tokens y Lexemas:
--------------------------------------------------
| LEXEMA         | TOKEN                          |
--------------------------------------------------
| variar         | VARIAR                        |
| x              | IDENTIFICADOR                 |
| desde          | DESDE                         |
| 1              | NUMERO                        |
| hasta          | HASTA                         |
| 5              | NUMERO                        |
| con            | CON                           |
| paso           | PASO                          |
| 1              | NUMERO                        |
| hacer          | HACER                         |
| x              | IDENTIFICADOR                 |
| <-             | FLECHA                        |
| x              | IDENTIFICADOR                 |
| +              | ADD                           |
| 1              | NUMERO                        |
| escribir       | ESCRIBIR                      |
| x              | IDENTIFICADOR                 |
| fin_variar     | FIN_VARIAR                    |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (programa (instruccion (variar variar (variable x) desde (expresion (termino 1)) hasta (expresion (termino 5)) con paso (expresion (termino 1)) hacer (bloque (instruccion (asignacion (variable x) <- (expresion (termino (variable x)) + (termino 1)))) (instruccion (salida escribir (expresion (termino (variable x)))))) fin_variar)))
Asignación: x = 2
Resultado: 2
Asignación: x = 3
Resultado: 3
Asignación: x = 4
Resultado: 4
Asignación: x = 5
Resultado: 5
Asignación: x = 6
Resultado: 6


Si este es el output que la consola muestra, esta todo correctamente ejecutado.

