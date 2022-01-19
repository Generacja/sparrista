package com.project.coffee;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class CoffeeRepositoryTest {

    @Autowired
    private CoffeeRepository coffeeRepository;

    @BeforeEach
    void setUp() {
        prepareDate();
    }

    @Test
    void shouldFindMostPopularCoffees() {
        Set<Coffee> mostPopularCoffees = coffeeRepository.getMostPopularCoffees();
        List<Coffee> all = coffeeRepository.findAll();

        Optional<Coffee> first = mostPopularCoffees.stream().findFirst();
        assertTrue(first.isPresent());
        assertEquals("Americano", first.get().getTitle());
    }

    @Test
    void shouldFindAllCoffees() {
        List<Coffee> all = coffeeRepository.findAll();
        assertEquals(all.size(), 5);
    }

    private void prepareDate() {
        Coffee coffee = new Coffee("Americano", "Prawdopodobnie kawa taka powstała we Włoszech w czasie II wojny światowej, kiedy to żołnierze z USA żądali dolewania wody do espresso, tak aby otrzymać kawę podobną do tej, jaką pili w domach", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Americano”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(5);
        coffeeRepository.save(coffee);

        coffee = new Coffee("Espresso", "Powstaje przez przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna kawowca", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Espresso”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.EASY, 1);
        coffee.setPopularity(4);
        coffeeRepository.save(coffee);

        coffee = new Coffee("Flat White", "W odróżnieniu od caffe latte jest zazwyczaj podawane w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka (która na caffè latte tworzy wyraźną osobną warstwę)", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Flat White”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.MEDIUM, 5);
        coffee.setPopularity(3);
        coffeeRepository.save(coffee);

        coffee = new Coffee("Cappuccino", "Włoski napój kawowy z dodatkiem spienionego mleka (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao dla ozdoby", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Cappuccino”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.MEDIUM, 4);
        coffee.setPopularity(2);
        coffeeRepository.save(coffee);

        coffee = new Coffee("Caffe Latte", "Wbrew nazwie, latte art (sztuka wykonywania rysunków i wzorów na powierzchni kawy), na tradycyjnej latte nie wykonuje się ozdób na piance", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Caffe Latte”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.HARD, 4);
        coffee.setPopularity(1);
        coffeeRepository.save(coffee);
    }
}