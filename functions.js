// 1 zadanie

let Number = 124;
let String = 'Mam na imię Gosia';
let Boolean = true;
let nullVariable = null;
let undefinedVariable;
let symbolVariable = Symbol('hi');
let BigIntVariable = ('122222424444444555555555666666666');
let objectVariable = {animal: 'panda', mana: 'overpowered'} ;

//challenge 2 Przygotuj tablicę liczb, a następnie za pomocą pętli:

// - Policz i wyświetl sumę liczb użytkownikowi
// - Policz i wyświetl średnią liczb użytkownikowi
// - Policz i wyświetl iloczyn liczb użytkownikowi
// - Policz i wyświetl średnią liczb parzystych użytkownikowi
// - Znajdź maksymalną liczbę i wyświetl użytkownikowi
// - Znajdź minimalną liczbę i wyświetl użytkownikowi


let myFavouriteFood = ['pizza', 'owsianka', 'leczo'];
console.log(myFavouriteFood[0]);
console.log(myFavouriteFood[myFavouriteFood.length - 1]);
myFavouriteFood.push('tofurniki');
console.log(myFavouriteFood);
myFavouriteFood.shift();
console.log(myFavouriteFood);
// myFavouriteFood.splice(1, 1, 'placuszki pełnoziarniste');
myFavouriteFood[1]
console.log(myFavouriteFood);
myFavouriteFood.unshift('kanapki');
console.log(myFavouriteFood);

let myFood = '';
for (let i = 0; i < myFavouriteFood.length; i++) {
let result = myFavouriteFood[i];
myFood += result + ',' + '';
}

console.log(myFood);

//Bonus Challenge 1 
let goodFood = '';
function printArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        let result = array[i];
        goodFood += result + ',' + '';
        }
return goodFood;
}

console.log(printArrayElements(myFavouriteFood));
//Bonus Challenge 2
//Adding

let arrayOfNumbers = [1, 3, 1, 5, 10, 0];
let initialValue = 0;
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sum);

//Arithmetic Average
//1
const arithmeticAverage = arrayOfNumbers.reduce(() => (sum) / arrayOfNumbers.length, initialValue);
console.log(arithmeticAverage);

//2
function arithmeticAverage2(){
   let sumOfNumbers = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
   let result =  sumOfNumbers / arrayOfNumbers.length;
   return result;
}

console.log(arithmeticAverage2());

//multiplying

const multiplying = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(multiplying);

//arithmetic average of even numbers

function averageFromEvens() {

    let evens = arrayOfNumbers.filter(element => element % 2 == 0);
    let evensSum = evens.reduce((accumulator, currentValue) => accumulator + currentValue);
    let result = evensSum / evens.length;
    return result;
}

console.log(averageFromEvens());

//find biggest number

console.log(Math.max(...arrayOfNumbers));

//find smallest number

console.log(Math.min(...arrayOfNumbers));

//Bonus challenge 3: function adding positive integers from array

function positiveIntegresAdded() {
    let positiveIntegers = arrayOfNumbers.filter(element => element > 0);
    let result = positiveIntegers.reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;
}

console.log(positiveIntegresAdded());

// bonus 6: create a phone number

let phone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let notPhone = [1, 2, 3, 4];
let gibberishArray = [1, 'Gosia', 2n];
function createPhoneNumber(array) {
    let isANumber = (currentValue) => typeof currentValue == 'number';
if (array.length == 10 && array.every(isANumber)){
console.log('(' + array[0] + array[1] + array[2] + ') ' + array[3] +array[4] + array[5] + '-'+ array[6] + array[7] + array[8] + array[9]);
} else {
    console.log('This is not a phone number!');
}
}

createPhoneNumber(phone);
createPhoneNumber(notPhone);
createPhoneNumber(gibberishArray);

//bonus 7: create new object without keys

let names = [
    {name: 'Gosia'},
    {name: 'Kasia'},
    {name: 'Michał'},
    {name: 'Paweł'},
    {name: 'Tadeusz'},
    {name: 'Artur'},
]

console.log(names.map(value => value.name));
console.log(names);

// bonus 8 Rozszerz zadanie z *Challenge 1* sprawdzając czy przekazany ciąg znaków jest palindromem. Funkcję weryfikującą ciąg znaków nazwij `isPalindrom` i będzie ona zwracać wartość logiczną.

Palindrom to słowo które czytane od lewej do prawej lub od prawej do lewej daje w rezultacie ten sam wyraz. Przykłady:


function isPalindrom(word){
let splittedWord = word.split('');
let reversedWord = splittedWord.reverse();
let reversedAndJoinedWord = reversedWord.join('');
    if (word == reversedAndJoinedWord)
{
    return true;
} else {
    return false;
}
}

console.log(isPalindrom('madam'));
console.log(isPalindrom('kociak'));

// Palindrom check for whole sentence

function sentencePalindrom(sentence){
    let removedSpaces = sentence.replaceAll(' ', '');
    let lowerCasedSentence = removedSpaces.toLowerCase();
    let splittedSentence = lowerCasedSentence.split('');
    let joinedOriginal = splittedSentence.join('');
    console.log(joinedOriginal);
    let reversedSentence = splittedSentence.reverse();
    let joinedReversed = reversedSentence.join('');
    console.log(joinedReversed);
        if (joinedOriginal === joinedReversed)
    {
        return true;
    } else {
        return false;
    }
    }

    console.log(sentencePalindrom("Do geese see God"));
    console.log(sentencePalindrom("Was it a cat I saw"));
    console.log(sentencePalindrom("International Puzzle Day is coming!"));
    
    //bonus 9 Twoim zadaniem będzie przygotowanie własnej funkcji-walidatora o nazwie `isPasswordCorrect` która sprawdzi czy:

// - hasło ma przynajmniej 6 znaków
// - zawiera przynajmniej jeden znak specjalny
// - zawiera przynajmniej jedną liczbę

// Funkcja powinna zwracać `true` dla poprawnego hasła i `false` dla hasła które nie spełnia wymagań.


    function isPasswordCorrect(password) {
        if (password.length >= 6 && password.includes('!'||'@'||'#'||'$'||'%'||'^'||'&'||'*') && /\d/. test(password)) {
            return true;
        } else {
            return false;
        }
    }

    console.log(isPasswordCorrect('ulala'));
    console.log(isPasswordCorrect('ojaciekrece77!'));
    console.log(isPasswordCorrect('czytojestdobrypassword?'));

    //bonus 10 Czy zostanę junior developerem? Trudne pytanie! Napisz funkcję, która pomoże rozwikłać tę zagadkę.

// Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie:

// 1. Przerobić odpowiednio dużo zadań (minimum 100)
// 2. Przepracować w czasie wolnym co najmniej 80h

// Tablica `students` zawiera ilość aspirujących developerów, a obiekt `requirements` zawiera opisane wyżej wymagania.
// Napisz funkcję `checkJuniorReq` - powinna ona zwracać string zawierający imiona osób którzy są na dobrej drodze do zostania Juniorem oraz osoby, które trzeba pogonić do pracy. Wynikowy kod może wyglądać następująco:

// ```
// "Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek - DO ROBOTY LENIE!";

    const students = [
        { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
        { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
        { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
        { name: "Seba", tasksDone: 200, hoursSpent: 40 },
        { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
      ];
      
      const requirements = {
        minHoursSpent: 80,
        minTasksDone: 100,
      };

    function checkJuniorReq(students, requirements) {
        for (let i = 0; i < students.length; i++ ){
            if(students[i]['hoursSpent'] >= requirements['minHoursSpent'] && students[i]['tasksDone'] >= requirements['minTasksDone']){
                console.log(students[i]['name'] + '- gratulacje! Ciężka praca popłaca! ')
            }else {
                console.log(students[i]['name'] + '- DO ROBOTY LENIE!')
            }
        }
    }

    checkJuniorReq(students, requirements);

    function checkJuniorReq2(students, requirements) {
        
        let greatStudents = '';
        let lazyStudents = '';
        for (let i = 0; i < students.length; i++ ){
            if(students[i]['hoursSpent'] >= requirements['minHoursSpent'] && students[i]['tasksDone'] >= requirements['minTasksDone']){
                console.log(greatStudents += students[i]['name'] + ' ');
            }else {
                console.log(lazyStudents += students[i]['name'] + ' ');
            }
        }
        return greatStudents + '- gratulacje! Ciężka praca popłaca! ' + lazyStudents + '- DO ROBOTY LENIE!' 
    }

    console.log(checkJuniorReq2(students, requirements));