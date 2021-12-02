// function maiorIndice(meuArray) {
//     let indiceMaior = 0;
//     for (let indice in meuArray) {
//         if (meuArray[indiceMaior] < meuArray[indice]) {
//             indiceMaior = indice;
//         }
//     }
//     console.log(indiceMaior);
// }
// maiorIndice([1, 2, 3, 5, 4, 6, 9])

// function menorIndice(meuArray) {
//     let menor = 0;
//     for (let indice in meuArray) {
//         if (meuArray[menor] > meuArray[indice]) {
//             menor = indice;
//         }
//     }
//     console.log(menor);
// }
// menorIndice ([1, 2, 3, 5, 4, 6, 9]);

function maiorNome(array) {
    let maior = array[0];
    for (let nome in array) {
        if (maior.length < array[nome].length) {
            maior = array[nome];
        }
    }
    console.log(maior);
}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);