"use strict";
/*Założenia
Funkcje mogą być uruchamiane zarówno w konsoli przeglądarki jak i konsoli NodeJS.
Nazwy funkcji, pola obiektów, nazwy zmiennych i stałych powinny być zapisane po angielsku.
Termin oddania: 02.02.2023*/

/*Zadanie 1. (2 pkt)
Utwórz tablicę obiektów, zawierających 5 studentów.

Każdy obiekt powinien zawierać pola (wartości dowolne, wymyślone przez Was):

id (typ number)
imię (typ string),
nazwisko (typ string),
pesel (typ string),
kierunek studiów (typ string)
oceny (tablica typów number) - 6 ocen dla każdego ze studentów*/

let students = [
    {id: 1,
    firstName:'Kamil',
    lastName:'Katus',
    RegistrationOfThePopulationNumber:'82070227497',
    fieldOfStudy:'Mathematics',
    grades: [3, 4, 5, 5, 3, 4]

},
    {id: 2,
    firstName:'Monika',
    lastName:'Trojanowska',
    RegistrationOfThePopulationNumber:'91040528409',
    fieldOfStudy:'Psychology',
    grades: [5, 5, 5, 5, 4, 5]

},
    {id: 3,
    firstName:'Małgorzata',
    lastName:'Emilianowicz',
    RegistrationOfThePopulationNumber:'92092814644',
    fieldOfStudy:'Informatics',
    grades: [5, 5, 5, 5, 5, 5]

},
    {id: 4,
    firstName:'Ryszard',
    lastName:'Królewicz',
    RegistrationOfThePopulationNumber:'79112154985',
    fieldOfStudy:'Logistics',
    grades: [3, 3, 3, 4, 4, 4]

},
    {id: 5,
    firstName:'Adam',
    lastName:'Łezka',
    RegistrationOfThePopulationNumber:'96040723591',
    fieldOfStudy:'Biology',
    grades: [3, 5, 5, 3, 5, 5]

}
]


/*Zadanie 2. (2 pkt)
Utwórz funkcję addNewStudent przyjmującą 5 paramaterów (imię, nazwisko, pesel, kierunek studiów, notes). Funkcja po uruchomieniu powinna utworzyć obiekt nowego studenta oraz dodać go do tablicy, utworzonej w Zadaniu 1. Id powinno zostać utworzone randomowo (np. za pomocą Math.random(), max 3 liczby)*/

function addNewStudent(firstName, lastName, RegistrationOfThePopulationNumber, fieldOfStudy, grades) {
    let id = Math.floor(Math.random() * 31);
    students.push({id:id, firstName, lastName, RegistrationOfThePopulationNumber, fieldOfStudy, grades})
     return students
}

console.log(addNewStudent('Anita', 'Bojarek', '93070687044', 'Public Administration', '[4, 4, 4, 5, 4, 4]'));


/*Zadanie 3. (2 pkt)
Utwórz funkcję, przyjmującą jako parametr tablicę obiektów, utworzoną w poprzednich zadaniach. Funkcja powinna wyświetlić w konsoli dane wszystkich studentów w postaci: Student 1: Jan Kowalski, PESEL: 111222333, Field of study: Informatics dla każdego studenta w tablicy.*/

function toTheConsole (students) {
    for (let i = 0;i < students.length; i++){
        console.log("Student "+ students[i]['id']+": "+students[i]['firstName']+" "+students[i]['lastName']+", PESEL: "+students[i]['RegistrationOfThePopulationNumber']+", Field of study: "+students[i]['fieldOfStudy']);
    }
}

toTheConsole(students);


/*Zadanie 4. (4 pkt)
Utwórz funkcje getMaxNote oraz getMinNote przyjmującą argumenty: TABLICA_STUDENTÓW, PESEL_STUDENTA, których rolą będzie wyświetlanie w konsoli tekstu (przykładowo): Max note for student Ewa Nowak is 5 / Min note for student Ewa Nowak is 2

Przykład:

  {
    id: 2,
    pesel: "234567890",
    name: "Ewa",
    lastName: "Nowak",
    fieldOfStudy: "Architecture",
    notes: [2, 3, 3, 3, 2, 5],
  }

  getMaxNote(students, "234567890") // `Max note for student Ewa Nowak is 5`
  getMinNote(students, "234567890") //`Min note for student Ewa Nowak is 2`*/

//   function getMaxNote(TABLICA_STUDENTÓW, PESEL_STUDENTA) {
//     students.find(PESEL_STUDENTA)
//     return grades
//   }

//   console.log(getMaxNote(students, '79112154985'));

function getMaxNote(TABLICA_STUDENTÓW, PESEL_STUDENTA) {
    for (let i = 0;i < TABLICA_STUDENTÓW.length; i++){
        if (TABLICA_STUDENTÓW[i]['RegistrationOfThePopulationNumber'] == PESEL_STUDENTA) {
            let maxGrade = Math.max(...TABLICA_STUDENTÓW[i]['grades']);
            console.log("Max note for student: "+TABLICA_STUDENTÓW[i]['firstName']+" "+TABLICA_STUDENTÓW[i]['lastName']+" is "+maxGrade);
        }
    }
}

getMaxNote(students, '79112154985');

function getMinNote(TABLICA_STUDENTÓW, PESEL_STUDENTA) {
    for (let i = 0;i < TABLICA_STUDENTÓW.length; i++){
        if (TABLICA_STUDENTÓW[i]['RegistrationOfThePopulationNumber'] == PESEL_STUDENTA) {
            let minGrade = Math.min(...TABLICA_STUDENTÓW[i]['grades']);
            console.log("Min note for student: "+TABLICA_STUDENTÓW[i]['firstName']+" "+TABLICA_STUDENTÓW[i]['lastName']+" is "+minGrade);
        }
    }
}

getMinNote(students, '82070227497');
