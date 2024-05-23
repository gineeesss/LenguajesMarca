# TUI
## 0 - Preparar Entorno
 Descargar maven y java 21
## Fase TUI-1: TDD -> fase roja
1. Crear rama en el repositorio: `git checkout -d UT10-roja`
2. Escribir batería de pruebas
3. Probar y Capturar tests: 
	1. Compilar con `mvn compile`
	2. Pasar tests y volcar salida a txt`mvn test | tee > testsRojos.txt`
## Fase TUI-2: TDD -> fase verde
1. Crear nueva rama desde la rama roja: `git checkout -d UT10-verde`
2. Implementar métodos para pasar los tests.
3. Probar y Capturar tests: 
	1. Compilar con `mvn compile`
	2. Pasar tests y volcar salida a txt `mvn test | tee > testsVerdes.txt`
## Fase TUI-3: Validación (linter)

1. Crear nueva rama desde la rama verde: `git checkout -b UT10-pre-linter`
2. Añadir al *pom.mxl* el pluging checkstyle
	1. `mvn site` Para generar la documentación
3. Analizar el proyecto`mvn checkstyle:checkstyle`
4. Crear nueva rama desde la rama verde: `git checkout -b UT10-linter`
5. En el directorio *target* , consultar los dos archivos .xml generados con checkstyle y corregir los errores.
## Fase TUI-4: Empaquetado
1. Obtener jar totalmente funcional
	1. En *estructura de proyecto* , *artefactos*, crear uno nuevo de tipo jar  dándole a `+`
	2. Configurar desde módulo con dependencias...
	3. Una vez creado, se ha de construir, en el menú seleccionar *construir*, *artefacto*
2. Generar un archivo ejecutable a partir del jar para Win y otro GNU/Linux
	En los scripts, codificar la ejecución del jar
	`java -jar CalculadoraDePila.jar`
	- Windows: `.bat` `.ps1`
	- Linux: `.sh` `.desktop` (*terminal*)
## Fase GUI-web