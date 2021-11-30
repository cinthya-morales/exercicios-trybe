//Encontrei os 2 exercicios aqui https://cursos.alura.com.br/forum/topico-escreva-um-codigo-que-imprima-um-quadrado-de-asteriscos-161926

//Exercicios 1
var n = 5;
var asterisco = "";
for (var linha = 1; linha <= n; linha++) {
    for (var coluna = 1; coluna <= n; coluna++) {
        asterisco += "*";
    }
    console.log(asterisco);
    asterisco = "";
}
//Exercicios 2
var n = 5;
var asterisco = '';
for (var linha = 1; linha <= n; linha++) {
    for (var coluna = 1; coluna <= n; coluna++) {
        if (coluna == linha) {
            asterisco += '*'
        }
    }
    console.log(asterisco)
}