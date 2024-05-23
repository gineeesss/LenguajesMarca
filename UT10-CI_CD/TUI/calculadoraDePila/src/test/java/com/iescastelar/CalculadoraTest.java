package com.iescastelar;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import java.util.Stack;

import static org.junit.jupiter.api.Assertions.*;

public class CalculadoraTest{
    private CalculadoraDePilaImpl calculadora;

    @BeforeEach
    public void setUp() {
        calculadora = new CalculadoraDePilaImpl();
    }

    @Test
    public void testMultiplicar() {
        Stack<Float> pila = new Stack<>();
        pila.push(2.0f);
        pila.push(3.0f);
        calculadora.multiplicar(pila);
        assertEquals(1, pila.size(),0.0001);
        assertEquals(6.0f, pila.pop(),0.0001);
    }

    @Test
    public void testSumar() {
        Stack<Float> pila = new Stack<>();
        pila.push(2.0f);
        pila.push(3.0f);
        calculadora.sumar(pila);
        assertEquals(1, pila.size(),0.0001);
        assertEquals(5.0f, pila.pop(),0.0001);
    }
    @ParameterizedTest
    @CsvFileSource(resources = "/casosDePrueba.csv", numLinesToSkip = 1)
    public void testTotal(String expresion, float resultadoEsperado) {
        Float resultado = calculadora.total(expresion);
        assertEquals(resultadoEsperado, resultado, 0.0001);
    }
    @Test
    public void testTotal() {
        Float resultado = calculadora.total("2 3 +");
        assertEquals(5.0f, resultado,0.0001);
    }
}