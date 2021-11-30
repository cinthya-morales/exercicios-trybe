//Ex 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i = 1; i <= numbers.length; i++) {
    for (j = 0; j <= numbers.length - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log(numbers);


//Ex 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i = 1; i <= numbers.length; i++) {
    for (j = 0; j <= numbers.length - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log(numbers);
//Ex 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
for (let i = 0; i < numbers.length - 1; i++) {
    if (i + 1 < numbers.length) {
        array.push(numbers[i] * numbers[i + 1])
    } else {
        array.push(numbers[i] * 2);
    }
}
console.log(array);