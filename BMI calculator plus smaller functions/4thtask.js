// // 1 zadanie
function add(a, b) {
    return a + b + ' ' + typeof a + ' ' + typeof b
}
console.log(add(100, 2));

// //2 zadanie

function substracting(a, b) {
    if (b === undefined) {
        return a;
    }
    if ( typeof a === 'number' && typeof b === 'number'){
        return a - b;
    }
        return 'Niepoprawny parametr';
    
}

console.log(substracting(20, 5));
console.log(substracting(5, 5));
console.log(substracting('20', 5));
console.log(substracting(5));

function multiplying(a, b) {
    if (b === undefined) {
        return a
    }
    if ( typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
        return 'Niepoprawny parametr';
    
}

console.log(multiplying(2, 2));
console.log(multiplying(5, 5));
console.log(multiplying('20', 5));
console.log(multiplying(5));


// function dividing(a, b) {
    if (b === undefined) {
        return a
    }
    if ( typeof a === 'number' && typeof b === 'number') {
        return a / b
    } else {
        return 'Niepoprawny parametr'
    }
    

console.log(dividing(2, 2));
console.log(dividing(50, 5));
console.log(dividing('20', 5));
console.log(dividing(5));

// // 3 zadanie

function biggestNumber(a, b, c) {
    let result = Math.max(a, b, c);
    return 'Największa liczba to: ' + result;
}

console.log(biggestNumber(1, 50, 33));
console.log(biggestNumber(100, 50, 383));
console.log(biggestNumber(-1, 500, 3));
console.log(biggestNumber(0, 15, 33));

// 4 zadanie

function BMICalculator(age, height, weight) {

    if (typeof age !== 'number' || typeof height !== 'number' || typeof weight !== 'number') {
        return ('Błędne dane')
          }
    
    let BMI = weight / (height * height)

    if (age >= 19 && age <=24 && BMI >=19 && BMI <= 24 
    || age >= 25 && age <=34 && BMI >= 20 && BMI <= 25
    || age >= 35 && age <=44 && BMI >= 21 && BMI <= 26
    || age >= 45 && age <=54 && BMI >= 22 && BMI <= 27
    || age >= 55 && age <=64 && BMI >= 23 && BMI <= 28)
    {
    return BMI + " Prawidłowe"}
    
    else if (age >= 19 && age <=24 && BMI > 24
        || age >= 25 && age <=34 && BMI > 25
        || age >= 35 && age <=44 && BMI > 26
        || age >= 45 && age <=54 && BMI > 27
        || age >= 55 && age <=64 && BMI > 28
        ){
    return BMI + " Nadwaga"}
           
    else if (age >= 19 && age <=24 && BMI < 19
        || age >= 25 && age <=34 && BMI < 20
        || age >= 35 && age <=44 && BMI < 21
        || age >= 45 && age <=54 && BMI < 22
        || age >= 55 && age <=64 && BMI < 23
        ){
    return BMI + " Niedowaga"} 
        
    else if (age < 19) {
    return ('Jesteś za młody, by martwić się BMI')
    }
    else if (age > 64) {
    return ('W tym wieku już nie musisz martwić się BMI')
    }
   
}

console.log(BMICalculator(30, 1.68, 57.7));
console.log(BMICalculator(65, 1.68, 57.7));
console.log(BMICalculator(3, 1.68, 57.7));
console.log(BMICalculator(30, 1.33, 43));
console.log(BMICalculator('trzynaście', 1.68, 57.7));