function maiorIndice(meuArray) {
    let indiceMaior = 0;
    for (let indice in meuArray) {
        if (meuArray[indiceMaior] < meuArray[indice]) {
            indiceMaior = indice;
        }
    }
    console.log(indiceMaior);
}
maiorIndice([1, 2, 3, 5, 4, 6, 9])