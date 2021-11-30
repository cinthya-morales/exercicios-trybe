//Ex 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//Ex 2
let soma = 0;
for (var index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log(soma);

//Ex 3
let media = 0;
for (var index = 0; index < numbers.length; index++) {
    media += numbers[index] / numbers.length;
}

//Ex 4
if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//Ex 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

//Ex 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        numeroImpar++;
    }
}

if (numeroImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numeroImpar);
}

//Ex 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < menorNumero && numbers[index] !== 0) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);

// Ex 8
let array = [];
for (let i = 0; i <= 25; i++) {
    array.push(i);
}
console.log(array);


//Ex 9
for (let index = 0; index < array.length; index++) {
    console.log(array[index] / 2);
};