//Encontrei os 2 exercicios aqui https://cursos.alura.com.br/forum/topico-escreva-um-codigo-que-imprima-um-quadrado-de-asteriscos-161926

//Exercicio 1
var n = 5;
var asterisco = "";
for (var linha = 1; linha <= n; linha++) {
    for (var coluna = 1; coluna <= n; coluna++) {
        asterisco += "*";
    }
    console.log(asterisco);
    asterisco = "";
}
//Exercicio 2
var n = 5;
var asterisco = "";
for (var linha = 1; linha <= n; linha++) {
    for (var coluna = 1; coluna <= n; coluna++) {
        if (coluna == linha) {
            asterisco += "*";
        }
    }
    console.log(asterisco);
}
//Exercicio 3
var n = 5;
var asterisco = "*";
var espaco = "";
for (var linha = n; linha > 0; linha -= 1) {
    for (var coluna = n; coluna > 0; coluna -= 1) {
        if (coluna == linha) {
            asterisco += "*";
        }
    }
    console.log(asterisco);
}