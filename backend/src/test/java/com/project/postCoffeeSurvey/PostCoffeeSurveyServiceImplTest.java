package com.project.postCoffeeSurvey;

import com.project.coffee.Coffee;
import com.project.coffee.CoffeePreparationDifficulty;
import com.project.employee.Employee;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PostCoffeeSurveyServiceImplTest {

    @InjectMocks
    PostCoffeeSurveyServiceImpl postCoffeeSurveyService;

    @Mock
    private PostCoffeeSurveyRepository postCoffeeSurveyRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void listAllPostCoffeSurveysResults() {
        Mockito.when(postCoffeeSurveyRepository.findAll()).thenReturn(prepareSurveys());
        Iterable<PostCoffeSurveyResults> postCoffeSurveyResults = postCoffeeSurveyService.listAllPostCoffeSurveysResults();

        List<PostCoffeSurveyResults> result = new ArrayList<PostCoffeSurveyResults>();
        postCoffeSurveyResults.forEach(result::add);
        assertEquals(2, result.size());

        assertEquals(2, result.get(0).getGrade());
        assertEquals(-1, result.get(1).getGrade());

    }

    private List<PostCoffeeSurvey> prepareSurveys() {

        List<PostCoffeeSurvey> postCoffeeSurveys = new ArrayList<>();

        Coffee coffee = new Coffee("Americano", "Prawdopodobnie kawa taka powstała we Włoszech w czasie II wojny światowej, kiedy to żołnierze z USA żądali dolewania wody do espresso, tak aby otrzymać kawę podobną do tej, jaką pili w domach", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Americano”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(5);

        Employee e1 = new Employee("Bartłomiej", "Przybylski", "bap", "https://usosapps.amu.edu.pl/res/up/200x250/404826-m-7458626e5c965c893b375a156f74af35f037b6c1caaae26ba783d5ff841cb6b7.jpg");
        Employee e2 = new Employee("Grzegorz", "Banaszak", "grz", "https://usosapps.amu.edu.pl/res/up/200x250/1975-m-500f7655dcff8be7619713f9b5dae228e95a01bf2c9187ab336792cb3a854ffe.jpg");

        postCoffeeSurveys.add(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));
        postCoffeeSurveys.add(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));

        postCoffeeSurveys.add(new PostCoffeeSurvey(SurveyResult.NEUTRAL, ZonedDateTime.now() ,e2 , coffee));
        postCoffeeSurveys.add(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e2 , coffee));

        return postCoffeeSurveys;
    }
}