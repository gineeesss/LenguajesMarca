package com.iescastelar;

import java.util.Stack;

public class CalculadoraDePilaImpl implements CalculadoraDePila {

    /**
     * Lee una expresión de cálculo y devuelve el resultado en una pila.
     * @param calculo La expresión de cálculo en formato String.
     * @return Una pila con el resultado de la expresión de cálculo.
     */
    @Override
    public Stack<Float> leerCalculo(final String calculo) {
        final Stack<Float> pila = new Stack<>();
        final String[] tokens = calculo.split(" ");

        for (final String token : tokens) {
            switch (token) {
                case "+":
                    sumar(pila);
                    break;
                case "*":
                    multiplicar(pila);
                    break;
                default:
                    pila.push(Float.parseFloat(token));
                    break;
            }
        }
        return pila;
    }

    /**
     * Multiplica los dos valores superiores en la
     * pila y coloca el resultado en la pila.
     * @param pila La pila de valores donde se realizará la multiplicación.
     * @throws IllegalArgumentException si la pila contiene menos de 2 valores.
     */
    @Override
    public void multiplicar(final Stack<Float> pila) {
        if (pila.size() < 2) {
            throw new IllegalArgumentException("Mín. Contener 2 valores.");
        }
        final float a = pila.pop();
        final float b = pila.pop();
        pila.push(a * b);
    }

    /**
     * Suma los dos valores superiores en la pila y coloca
     * el resultado en la pila.
     * @param pila La pila de valores donde se realizará la suma.
     * @throws IllegalArgumentException si la pila contiene menos de 2 valores.
     */
    @Override
    public void sumar(final Stack<Float> pila) {
        if (pila.size() < 2) {
            throw new IllegalArgumentException("Mín. Contener 2 valores.");
        }
        final float a = pila.pop();
        final float b = pila.pop();
        pila.push(a + b);
    }

    /**
     * Calcula el resultado total de una expresión de cálculo.
     * @param calculo La expresión de cálculo en formato String.
     * @return El resultado total de la expresión de cálculo.
     * @throws IllegalArgumentException si la expresión no
     * produce ningún resultado.
     */
    @Override
    public Float total(final String calculo) {
        final Stack<Float> pila = leerCalculo(calculo);
        if (pila.isEmpty()) {
            throw new IllegalArgumentException("Expresión sin Resultado.");
        }
        return pila.peek();
    }
}
