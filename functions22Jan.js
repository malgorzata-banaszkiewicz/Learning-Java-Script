// ### Zadanie 1.

// Wybierz element `**` z zagnieżdżonej tablicy

const ticktacktoe = [
    ["x", "o", "x"],
    ["x", "x", "o"],
    ["o", "**", "o"],
  ];

  console.log(ticktacktoe[2][1]);

  //### Zadanie 2.

// Stwórz funkcję `multiplyBy2()`, która mnoży elementy w tablicy razy 2.

function multiplyBy2(array) {
    if(typeof array === 'object'){
for (const element of array) {
    console.log(element * 2);
}}
}

multiplyBy2([2, 4, 6]);
multiplyBy2([17, 123124, 3]);


//### Zadanie 3.

// Sprawdź czy element w tablicy jest `truthy` lub `falsy`
const values = [
    [],
    {},
    -10,
    1,
    0,
    "",
    "full string",
    " ",
    undefined,
    NaN,
    null,
    "0️⃣",
    "💩",
  ];

  function isTruthy(array) {
    for (let i= 0; i < array.length; i++)
        if (Boolean(array[i]) == true) {
            console.log(array[i] + ' is truthy')
        } 
        else {
            console.log(array[i] + ' is falsy')
        }
    };


  isTruthy(values);

  // ### Zadanie 4.

// Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić odpowiedni string z kolorem:

function check(array) {
let arrayLength = array.length;
if (typeof array == 'object' ){
switch (arrayLength){
case 1: {
    return '#green';
}
case 2: {
    return '#red';
}
case 3: {
    return '#blue';
}
default: {
    return '#black';
}
}
} else {
    return 'Too big';
}
}

let arr1 = [1];
let arr2 = [1, 2];
let arr3 = [1, 2, 3];
let arr4 = [1, 2, 3, 4];

console.log(check(arr1));
console.log(check(arr2));
console.log(check(arr3));
console.log(check(arr4));

// ### Zadanie 5.

// Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

function stringLength(array) {
    if(typeof array == 'object' ){
let stringLengths = [];
for (let i = 0; i < array.length; i++) {
let oneString = array[i].length;
stringLengths.push(oneString);
}
return stringLengths;
    }
}

let names = [
    'Aldona',
    'Natalia',
    'Mateusz',
    'Gosia'
]
console.log(stringLength(names));

//Posortuj osoby z tablicy `people` alfabetycznie według nazwiska.

let people = [
    'Brzęczyszczykiewicz Grzegorz',
    'Banaszkiewicz Małgorzata',
    'Potter Harry',
    'Rowling J.K.'
]

console.log(people.sort());


//### Zadanie 7.
const numbers = [
    11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
    -53, 17, -21,
  ];
//1. Wyświetl tylko elementy większe lub równe od 20:
let twentyOrMore = '';
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 20) {
        twentyOrMore += numbers[i] + ',';
    }
    console.log(twentyOrMore);
}

//2. Policz sumę wszytskich elementów tablicy
let sum0 = 0;
for (const element of numbers) {
sum0 += element
}

console.log(sum0);


let sum = 0;
for (let i = 0; i < numbers.length; i++ ) {
    sum += numbers[i]
}
console.log(sum);

let sumOfArray = numbers.reduce(function (previousValue, currentValue) {
return previousValue + currentValue;
} );

console.log(sumOfArray);


//3. Wyświetl sumę elementów tylko ujemnych:

    let sumOfNegatives = 0;
for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] < 0) {
    sumOfNegatives += numbers[i]
}}
console.log(sumOfNegatives);


//4. Wyświetl sumę elementów na indeksach parzystych:

let sumOfEvens = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumOfEvens += numbers[i]
    }
}
console.log(sumOfEvens);


// task 8 Napisz funkcję `longestString()`, która z tablicy stringów zwróci pierwszy najdłuższy ciąg znaków:

function longestString(array) {
   let maxLength = Math.max(...(array.map(el => el.length)));
   let givenWord = array.filter(el => el.length == maxLength);
   return givenWord;
}

console.log(longestString(['Pantera śnieżna', 'lampart', 'jaguar', 'gepard', 'lew']));
console.log(longestString(['Labrador retriever', 'golden retriever', 'vizsla', 'siberian husky', 'dalmatyńczyk']));

// task 9 Napisz funkcję `flatArray()` która przyjmuje tablicę tablic i zwraca je połączone w jedną.


function flatArray(arrayOfarrays){
    return arrayOfarrays.flat();

}

console.log(flatArray([['psy', 'konie', 'dzikie koty'], ['puzzle', 'rower','bieganie'], ['kaktusy', 'róże', 'polne kwiaty']]));

// task 10 Napisz funkcję `deleteComment()`, która na podstawie podanego `id` usunie z podanej tablicy `comments` określony komentarz.

let comments = [
    {id: 144, opinion: 'Najlepszy catering jaki miałam!'},
    {id: 155, opinion: 'Jedzenie jak w 5* hotelu, polecam!'},
    {id: 566, opinion: 'Beznadziejne godziny dowozów, nie będę poświęcać snu dla obiadu!'},
    {id: 877, opinion: 'Świetne opcje wegetariańskie, nie ma nudy.'},
    {id: 888, opinion: 'Wysoka cena, ale i wysoka jakość. Warto!'}
]
function deleteComment(id, comments) {
    for(let i = 0;i < comments.length; i++) {
         if (comments[i]['id'] === id) {
             comments.splice(comments[i],1);
         }
    }
    return comments;
 }

 console.log(deleteComment(144, comments));

//task 11 Stwórz funkcję `showOnlyUsersWithRace()`, która zwróci jedynie osoby z podaną rasą w argumencie.

// Dane dla zadań 11-15

let users = [
    {
      id: 1,
      first_name: "Kaylil",
      last_name: "Hovey",
      email: "khovey0@gizmodo.com",
      gender: "Female",
      ip_address: "128.158.239.223",
      title: "Rev",
      job_title: "Recruiting Manager",
      race: "Vietnamese",
      company: "Browseblab",
      age: 33,
    },
    {
      id: 2,
      first_name: "Cesare",
      last_name: "Caroline",
      email: "ccaroline1@tmall.com",
      gender: "Male",
      ip_address: "7.78.224.248",
      title: "Rev",
      job_title: "Computer Systems Analyst II",
      race: "Black or African American",
      company: "Wordtune",
      age: 50,
    },
    {
      id: 3,
      first_name: "Xaviera",
      last_name: "Danilchenko",
      email: "xdanilchenko2@so-net.ne.jp",
      gender: "Female",
      ip_address: "161.223.97.94",
      title: "Mr",
      job_title: "Statistician IV",
      race: "Asian",
      company: "Rhynyx",
      age: 55,
    },
    {
      id: 4,
      first_name: "Shandy",
      last_name: "Sanford",
      email: "ssanford3@uiuc.edu",
      gender: "Female",
      ip_address: "40.218.230.208",
      title: "Honorable",
      job_title: "Data Coordiator",
      race: "Eskimo",
      company: "Topdrive",
      age: 76,
    },
    {
      id: 5,
      first_name: "Muire",
      last_name: "Pothecary",
      email: "mpothecary4@mit.edu",
      gender: "Female",
      ip_address: "82.151.63.26",
      title: "Honorable",
      job_title: "Executive Secretary",
      race: "Chickasaw",
      company: "Realbridge",
      age: 15,
    },
    {
      id: 6,
      first_name: "Mano",
      last_name: "Gwatkins",
      email: "mgwatkins5@auda.org.au",
      gender: "Male",
      ip_address: "134.244.218.162",
      title: "Ms",
      race: undefined,
      job_title: "Automation Special",
      age: 23,
    },
    {
      id: 7,
      first_name: "Frederica",
      last_name: "Shackleton",
      email: "fshackleton6@examiner.com",
      gender: "Female",
      ip_address: "191.141.61.25",
      title: "Honorable",
      job_title: "Help Desk Operator",
      race: "Yuman",
      company: "Yoveo",
      age: 89,
    },
    {
      id: 8,
      first_name: "Garvey",
      last_name: "Islep",
      email: "gislep7@nps.gov",
      gender: "Male",
      ip_address: "101.45.75.228",
      title: "Mr",
      job_title: "Internal Auditor",
      race: "Cambodian",
      company: "Livefish",
      age: 76,
    },
    {
      id: 9,
      first_name: "Aristotle",
      last_name: "Gozard",
      email: "agozard8@exblog.jp",
      gender: "Male",
      ip_address: "87.43.196.133",
      title: "Rev",
      job_title: "Software Test Engineer IV",
      race: "Chippewa",
      company: "Feedspan",
      age: 34,
    },
    {
      id: 10,
      first_name: "Bryon",
      last_name: "Boulder",
      email: "bboulder9@parallels.com",
      gender: "Male",
      ip_address: "251.50.80.89",
      title: "Honorable",
      job_title: "Senior Editor",
      race: "Black or African American",
      company: "Kazu",
      age: 25,
    },
  ];
  

function showOnlyUsersWithRace(race){
    if(typeof race == 'string'){
return users.filter(users => users['race'] == race);
}   else {
return`This race doesn't exist`
}
}

console.log(showOnlyUsersWithRace('Black or African American'));
console.log(showOnlyUsersWithRace('Chippewa'));
console.log(showOnlyUsersWithRace('Czad'));
console.log(showOnlyUsersWithRace(7877));
console.log(showOnlyUsersWithRace(true));

// task 12 Wyświetl każdego z userów w konwencji: `title first_name last_name work as job_title in company`.


for (let i = 0; i<users.length; i++){
console.log(users[i]['title'] + ' ' + users[i]['first_name'] + ' ' + users[i]['last_name'] + ' work as '+ users[i]['job_title'] + ' in ' + users[i]['company'])};


// task 13 Ogranicz zawartość kolekcji do kluczy `id, first_name, last_name` i dodaj nowy klucz `full_name` składający się z `first_name` i `last_name`.


function createNewData(tablica) {
    const nowaTablica = [];
    for (let i = 0;i < tablica.length;i++) {
        nowaTablica[i] = [];
        nowaTablica[i]['id'] = tablica[i]['id'];
        nowaTablica[i]['first_name'] = tablica[i]['first_name'];
        nowaTablica[i]['last_name'] = tablica[i]['last_name'];
        let fullName = tablica[i]['first_name']+" "+tablica[i]['last_name'];
        nowaTablica[i]['full_name'] = fullName;
    }
    return nowaTablica;
}

console.log(createNewData(users));

//task 14 Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji `name is X years old` i na koniec wyświetl sumę ich lat.

let womanSince30 = users.filter(users => users['age'] >= 30 && users['gender'] == 'Female');
for (let i = 0; i < womanSince30.length; i++){
console.log(womanSince30[i]['first_name'] + ' is ' + womanSince30[i]['age'] + ' years old.');
}

let onlyNumbers = 0;
for (let i = 0; i<womanSince30.length; i++){
onlyNumbers += womanSince30[i]['age'];
}

console.log('Together they have ' + onlyNumbers + ' years.');

// task 15 Dodaj do kolekcji dodatkowe klucze. Następnie zwróć tablicę imion tych osób, które mają BMI w zakresie 18,5 – 24,99.

for (let i = 0 ; i < users.length ; i ++) {
    let height = users[i]['age'] +100;
    users[i]['height'] = height;
    let weight = users[i]['age'] + 10;
    users[i]['weight'] = weight;
    let BMI = weight / (height/100) **2;
    users[i]['BMI'] = BMI;
    }

    let filteredUsers = users.filter(item => item['BMI'] > 18.5 && item['BMI'] < 24.99);

    let filteredNames = [];
    for (let i = 0 ; i < filteredUsers.length; i++) {
       filteredNames.push(filteredUsers[i].first_name);
    }

console.log(filteredNames);


//task 16 Na podstawie tablicy obiektów `inventors`:

// 1. Posortuj wynalazców według daty urodzenia, od najstarszego do najmłodszego
// 2. Wyświetl informację ile lat żyli wszyscy wynalazcy?
// 3. Posortuj wynalazców według długości życia, od najdłużej żyjącego do najkrócej

const inventors = [
    {
        name: 'Adam Mickiewicz', date_of_birth: '1798-12-24 GMT' , date_of_death: '1855-11-26 GMT'
    },
    {
        name: 'Cyprian Kamil Norwid', date_of_birth: '1821-09-24 GMT' , date_of_death: ' 1883-05-23 GMT'
    },
    {
        name: 'Juliusz Słowacki', date_of_birth: '1809-09-04 GMT', date_of_death: '1849-04-03 GMT'
    },
];

//zamieniam datę na odpowiedni format

for (let i = 0; i < inventors.length; i++){
    inventors[i]['date_of_birth'] = new Date(inventors[i]['date_of_birth'])
};
//zamieniam datę na format mozliwy do porównania i ustawiam kolejność
for (let i = 0; i < inventors.length; i++){
    inventors[i]['date_of_birth'] = inventors[i]['date_of_birth'].getTime()
};
inventors.sort((a,b) => a.date_of_birth - b.date_of_birth);
console.log(inventors);

//licze ile przezyli lat i dodaje do tablicy
for (let i = 0; i < inventors.length; i++){
let years = new Date(new Date(inventors[i].date_of_death) - new Date(inventors[i].date_of_birth)).getFullYear() - 1970; 
console.log(inventors[i]['name'] + ' ' + years);
inventors[i]['years'] = years;
}

// zmieniam date urodzenia na Date
for (let i = 0; i < inventors.length; i++){
    inventors[i]['date_of_birth'] = new Date(inventors[i]['date_of_birth'])
};
// ustawiam kolejność po liczbie przeżytych lat
inventors.sort((a,b) => b.years - a.years);
console.log(inventors);

//task 17 Napisz funkcję `dayOfTheWeekYouWereBorn()`, która zwróci dzień tygodnia na podstawie daty Twoich urodzin.

function dayOfTheWeekYouWereBorn(date_of_birth) {
    date_of_birth = new Date(date_of_birth);
    let numberOftheDay = date_of_birth.getDay();
    switch (numberOftheDay) {
        case 0: {
            numberOftheDay = 'Sunday';
            break;
        }
        case 1: {
            numberOftheDay = 'Monday';
            break;
        }
        case 2: {
            numberOftheDay = 'Tuesday';
            break;
        }
        case 3: {
            numberOftheDay = 'Wednesday';
            break;
        }
        case 4: {
            numberOftheDay = 'Thursday';
            break;
        }
        case 5: {
            numberOftheDay = 'Friday';
            break;
        }
        case 6: {
            numberOftheDay = 'Saturday';
            break;
        }
        }
        return 'You were born on ' + numberOftheDay
        }
    

console.log(dayOfTheWeekYouWereBorn("November 30 1993"));
console.log(dayOfTheWeekYouWereBorn("September 28 1992"));
console.log(dayOfTheWeekYouWereBorn("April 17 1991"));


//task 18 Napisz funkcję `daysUntilChristmas()`, która zwróci liczbę dni do Świąt Bożego Narodzenia 🎅🏻🎄

function daysUntilChristmas() {
    let christmasEve = 'December 25 2023';
    //zmieniam format dat
    christmasEve = new Date(christmasEve);
    christmasEve = christmasEve.getTime();
    let today = new Date();
    today = today.getTime();
    // róznica miedzy datami w milisekundach
    let timeDifference = christmasEve - today;
    //zmiana milisekund dni
    let daysUntilChristmas = timeDifference / (1000 * 3600 * 24);
    //dni w zaokrągleniu w górę
    return Math.ceil(daysUntilChristmas);
}

console.log(daysUntilChristmas());

//task 19 already done 
//task 20 Napisz funkcję `countWordOccurrences`, która przyjmie ciąg znaków i zwróci obiekt, który będzie reprezentował ilość wystąpień każdego słowa w przekazanym _stringu_.

function countWordOccurrences(sentence) {
sentence = sentence.split(' ');
let counts = {};
sentence.forEach(function(word) {
counts[word] = (counts[word] || 0) + 1;
});
return counts;
}

console.log(countWordOccurrences('Załapałam się na fajne promocje na puzzle w dzień puzzli i uważam ten dzień za bardzo fajny i owocny w puzzle na zapas.'));
console.log(countWordOccurrences('Piękny dzień, bo piękny był sen, a piękny był on, bo piękny musiał być.'));

//task 21 Zaimplementuj funkcję `toCamelCase` która przyjmie _string_, który będzie ciągiem znaków, gdzie każde słowa będą oddzielone albo myślnikiem (`-`) albo znakiem podkreślenia (`_`). Funkcja `toCamelCase` powinna konwertować otrzymany w parametrze ciag znaków i modyfikować go tak, aby był napisany _camelCase_.

// Dodatkowo zwracany ciąg znaków powinien być pisany wielkimi literami tylko wtedy, gdy oryginalne słowo było pisane wielkimi literami.

function toCamelCase(sentence) {
//pozbywam się separatora
sentence = sentence.replaceAll('-', ' ');
sentence = sentence.replaceAll('_', ' ');
console.log(sentence)
//dzielę zdanie na pojedyncze słowa
sentence = sentence.split(' ')
console.log(sentence)
// każda pierwsza literka oprócz pierwszego słowa ma być to UpperCase
let result = '';
for (let i = 1; i<sentence.length; i++) {
    sentence[i].split('');
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].replace(sentence[i][0], '');
    result = sentence.join('');
}
return result;
};

console.log(toCamelCase('gosia-banaszkiewicz'));
console.log(toCamelCase('gosia_banaszkiewicz'));
console.log(toCamelCase('gosia_banaszkiewicz_malnutelka'));
console.log(toCamelCase('gosia-banaszkiewicz-malnutelka'));
console.log(toCamelCase('Gosia-banaszkiewicz-malnutelkA'));

// task 22 Utwórz funkcję `getStudentTopGrades`, która pobiera tablicę obiektów, gdzie każdy obiekt reprezentuje ucznia i jego oceny. Funkcja powinna zwrócić tablicę ich najwyższych ocen - każdy element tablicy powinien reprezentować najwyższą uzyskaną ocenę cząstkową danego studenta. Jeśli uczeń nie ma ocen, to przyjmijmy, że jego najwyższa ocena jest równa 0.

let students = [
    {
      id: 1,
      name: "Jacek",
      grades: [5, 3, 4, 2, 5, 5],
    },
    {
      id: 2,
      name: "Ewa",
      grades: [2, 3, 3, 3, 2, 5],
    },
    {
      id: 3,
      name: "Zygmunt",
      grades: [2, 2, 4, 4, 3, 3],
    },
  ]

function getStudentTopGrades(students) {
    let wynik = [];
    for (let i = 0; i < students.length;i++) {
        wynik[i] = Math.max(...students[i]['grades']);
    }

    return wynik;
}

console.log(getStudentTopGrades(students));

//### Zadanie 23.

// Mamy obiekt `idUsers` w którym każdym kluczem jest `id` użytkownika, a przypisana do niego wartość jest jego danymi. Napisz funkcję `correctData()` która zamieni to na tablicę użytkowników tak, aby każdy element oprócz danych zawierał też pole `id` w następujący sposób:

// // ```javascript
// [
//   {
//     id: 243,
//     firstName: "Yorker",
//     lastName: "Surgey",
//     email: "ysurgey0@census.gov",
//     jobTitle: "VP Accounting"
//   },
//   {
//   ...
//   },
// ]


let idUsers = 
  {
  243: {
    firstName: "Yorker",
    lastName: "Surgey",
    email: "ysurgey0@census.gov",
    jobTitle: "VP Accounting"
  },
  324: {
    firstName: "Burgiej",
    lastName: "Kamil",
    email: "burgiej@census.gov",
    jobTitle: "Accounting"
  },
  343: {
    firstName: "Krakowska",
    lastName: "Monika",
    email: "mkrakowska0@gmail.com",
    jobTitle: "Secretary"
  }
  };

//najpierw wyciągam klucze
let keys = Object.keys(idUsers);
let idObject = {};
for(let i = 0; i < keys.length; i++){
idObject[i] = {
  ['id']: keys[i]
}
}

//pozbywam sie kluczy 
let flatUsers = Object.values(idUsers);

//dodaje klucze do srodka obiektu
for(let i = 0; i < flatUsers.length; i++){
Object.assign(flatUsers[i], idObject[i]);
}

console.log(flatUsers);
