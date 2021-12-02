// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de 
// números pares e ímpares no formato: { pares: 0, ímpares: 0 }

function contaParEimpar(meuArray) {
    let par = 0;
    let impar = 0;

    for (let indice in meuArray) {
        if (indice % 2 === 0) {
            par += 1;
        } else {
            impar += 1;
        }
    }
    console.log("{ pares:" + par + ", ímpares:" + impar + " }");
}
contaParEimpar([5, 4, 7, 8, 10, 6])