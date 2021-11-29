//Ex 1
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* console.log(numbers); */

//Ex 2
/* let soma = 0;
for (var index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log(soma); */

//Ex 3
/* let media = 0;
for (var index = 0; index < numbers.length; index++) {
    media += numbers[index] / numbers.length;
}

//Ex 4
if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
} */

//Ex 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero);