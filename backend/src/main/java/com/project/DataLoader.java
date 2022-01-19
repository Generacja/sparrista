package com.project;

import com.project.coffee.Coffee;
import com.project.coffee.CoffeePreparationDifficulty;
import com.project.coffee.CoffeeServiceImpl;
import com.project.employee.Employee;
import com.project.employee.EmployeeRepository;
import com.project.postCoffeeSurvey.PostCoffeeSurvey;
import com.project.postCoffeeSurvey.PostCoffeeSurveyRepository;
import com.project.postCoffeeSurvey.SurveyResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Component
public class DataLoader implements ApplicationRunner {

    private final EmployeeRepository employeeRepository;

    @Autowired
    private CoffeeServiceImpl coffeeService;

    @Autowired
    private PostCoffeeSurveyRepository postCoffeeSurveyRepository;

    @Autowired
    public DataLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void run(ApplicationArguments args) {
        Employee e1 = new Employee("Bartłomiej", "Przybylski", "bap", "https://usosapps.amu.edu.pl/res/up/200x250/404826-m-7458626e5c965c893b375a156f74af35f037b6c1caaae26ba783d5ff841cb6b7.jpg");
        Employee e2 = new Employee("Grzegorz", "Banaszak", "grz", "https://usosapps.amu.edu.pl/res/up/200x250/1975-m-500f7655dcff8be7619713f9b5dae228e95a01bf2c9187ab336792cb3a854ffe.jpg");
        Employee e3 = new Employee("Łukasz", "Smaga", "ługa", "https://wmi.amu.edu.pl/__data/assets/image/0030/166449/varieties/w300.jpg");
        Employee e4 = new Employee("Anna", "Stachowiak", "Pharos", "https://wmi.amu.edu.pl/__data/assets/image/0020/270074/varieties/w300.jpg");
        Employee e5 = new Employee("Paweł", "Mleczko", "paml", "https://wmi.amu.edu.pl/__data/assets/image/0033/269826/varieties/w300.jpg");
        Employee e6 = new Employee("Izabela", "Bondecka-Krzykowska", "izab", "https://wmi.amu.edu.pl/__data/assets/image/0035/268748/varieties/w300.jpg");
        Employee e7 = new Employee("Dariusz", "Bugajewski", "ddbb", "https://usosapps.amu.edu.pl/res/up/200x250/1933-m-9d324939178c1e633a758165358ea19d3cb601a0655d36c6d2644d6bf63e3b7b.jpg");
        Employee e8 = new Employee("Krzysztof", "Dyczkowski", "chris", "https://usosapps.amu.edu.pl/res/up/200x250/323781-m-283b4dde74a8af273b23900255d26ef3ecb022f617b33ccbee12c989ea29b2cd.jpg");
        Employee e9 = new Employee("Marek", "Gałązka", "galazka", "https://usosapps.amu.edu.pl/res/up/200x250/34305-m-26841db35d1164311d537d4c4f64d7844ff002c760b7681ecd39685cf150ada3.jpg");
        Employee e10 = new Employee("Tomasz", "Górecki", "tomasz", "https://usosapps.amu.edu.pl/res/up/200x250/6079-m-f314579fe0b53344ab3185b40619ea706a8c3d8eb5b473941162a45cd7bda40d.jpg");
        Employee e11 = new Employee("Paweł", "Skórzewski", "pawel", "https://usosapps.amu.edu.pl/res/up/200x250/304753-m-8b8c83015976f083e67a0eb0c88e1f080bf6041e250349b8d5ea3efe0f21ecc8.jpg");
        Employee e12 = new Employee("Marcin", "Witkowski", "mw", "https://usosapps.amu.edu.pl/res/up/200x250/32990-m-7c2d105a27d2fd3f742377743d1e746f1710b0a51cb818cf53cadaa4ca7dec53.jpg");
        Employee e13 = new Employee("Andrzej", "Wójtowicz", "andre", "https://usosapps.amu.edu.pl/res/up/200x250/338581-m-58e4d5b030ae81134672e5d11986156069ac93e6b524e08039b4bbeb92ba2aaf.jpg");
        Employee e14 = new Employee("Sylwia", "Antoniuk", "sylwia", "https://usosapps.amu.edu.pl/res/up/200x250/408950-f-20ccb7739650bfd89def4572b83767ba1a78b17f72d61927123b93621f34783b.jpg");
        Employee e15 = new Employee("Leszek", "Skrzypczak", "lechu", "https://usosapps.amu.edu.pl/res/up/200x250/1915-m-16a9d2455ffadb6c6425f24f7fe757869fc8a187ba64cfa7c03654e54e0c7d5e.jpg");
        Employee e16 = new Employee("Joanna", "Siwek", "joanna", "https://usosapps.amu.edu.pl/res/up/200x250/372083-f-ba4ff26d76ddd5bc5a274039345ae3a2a87f5c0b0966647fe2a39420c3d0fe97.jpg");
        Employee e17 = new Employee("Rafał", "Jaworski", "jawor", "https://usosapps.amu.edu.pl/res/up/200x250/34134-m-de9bf3b1e27ffc25edd183048bb1ae8a7f1d2451216626b40328866f2708fff4.jpg");

        employeeRepository.save(e1);
        employeeRepository.save(e2);
        employeeRepository.save(e3);
        employeeRepository.save(e4);
        employeeRepository.save(e5);
        employeeRepository.save(e6);
        employeeRepository.save(e7);
        employeeRepository.save(e8);
        employeeRepository.save(e9);
        employeeRepository.save(e10);
        employeeRepository.save(e11);
        employeeRepository.save(e12);
        employeeRepository.save(e13);
        employeeRepository.save(e14);
        employeeRepository.save(e15);
        employeeRepository.save(e16);
        employeeRepository.save(e17);

        Coffee coffee = new Coffee("Americano", "Prawdopodobnie kawa taka powstała we Włoszech w czasie II wojny światowej, kiedy to żołnierze z USA żądali dolewania wody do espresso, tak aby otrzymać kawę podobną do tej, jaką pili w domach", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Americano”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(5);
        coffeeService.save(coffee);

        coffee = new Coffee("Espresso", "Powstaje przez przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna kawowca", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Espresso”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.EASY, 1);
        coffee.setPopularity(4);
        coffeeService.save(coffee);

        coffee = new Coffee("Flat White", "W odróżnieniu od caffe latte jest zazwyczaj podawane w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka (która na caffè latte tworzy wyraźną osobną warstwę)", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Flat White”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.MEDIUM, 5);
        coffee.setPopularity(3);
        coffeeService.save(coffee);

        coffee = new Coffee("Cappuccino", "Włoski napój kawowy z dodatkiem spienionego mleka (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao dla ozdoby", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Cappuccino”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.MEDIUM, 4);
        coffee.setPopularity(2);
        coffeeService.save(coffee);

        coffee = new Coffee("Caffe Latte", "Wbrew nazwie, latte art (sztuka wykonywania rysunków i wzorów na powierzchni kawy), na tradycyjnej latte nie wykonuje się ozdób na piance", "Krok 1: Upewnij się, że w ekspresie jest wystarczająca ilość wody i mleka.\n" +
                "Krok 2: Podstaw kubek.\n" +
                "Krok 3: Kliknij na ekspresie przycisk „Caffe Latte”.\n" +
                "Krok 4: Ciesz się swoją pyszną kawą!\n", "dawda", CoffeePreparationDifficulty.HARD, 4);
        coffee.setPopularity(1);
        coffeeService.save(coffee);

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));
        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.NEUTRAL, ZonedDateTime.now() ,e2 , coffee));
        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e2 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e3 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e4 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e5 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e6 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e7 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e8 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e9 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e10 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e11 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e12 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e13 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e14 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e15 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e16 , coffee));

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e17 , coffee));
    }
}