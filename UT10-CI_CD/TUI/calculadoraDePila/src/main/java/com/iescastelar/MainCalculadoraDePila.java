package com.iescastelar;

import java.util.Scanner;
import java.util.Stack;

/**
 * Clase principal para ejecutar la Calculadora de Pila.
 * Proporciona una interfaz de línea de comandos para introducir
 * expresiones en notación polaca inversa (RPN) y calcular su resultado.
 */
public final class MainCalculadoraDePila {

    // Constructor privado para evitar la instanciación de la clase.
    private MainCalculadoraDePila() {
        throw new UnsupportedOperationException("Utilidad, no instanciar.");
    }

    /**
     * Método principal que ejecuta la calculadora de pila.
     * Lee la entrada del usuario, calcula el resultado de la expresión en RPN
     * y muestra el resultado.
     * @param args Argumentos de la línea de comandos (no se utilizan).
     */
    public static void main(final String[] args) {
        Scanner keyboard = new Scanner(System.in);
        CalculadoraDePila calculadora = new CalculadoraDePilaImpl();

        System.out.println("---> CalculadoraDePila (introduce expresión RPN):");
        StringBuffer sb = new StringBuffer();
        String entrada;
        Stack<Float> pila;

        // Capturamos expresión (puede contener enter)
        do {
            entrada = keyboard.next();
            if (entrada.equals("=")) {
                break;
            } else {
                sb.append(" ").append(entrada);
            }
        } while (true);

        // Lanzamos el cálculo de la expresión y mostramos resultado
        // pila = calculadora.leerCalculo(sb.toString().trim());
        // System.out.println("El resultado es: "+ pila.pop());
        System.out.println("Resltd " + calculadora.total(sb.toString().trim()));

    } // main()
} // class
