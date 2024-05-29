// Este é um programa no qual o usuário deve inserir dez números inteiros em um array “a”.
// Após isso, o programa deverá preencher um segundo array “b” conforme a seguinte
// regra: se o valor do elemento em “a” for par, o valor correspondente em “b” deverá ser o dobro do valor do elemento em “a”. Caso contrário, deverá ser o triplo.
// Depois disso, os valores dos dois arrays deverão ser
// exibidos, um array abaixo do outro.

const A = [], B = [];
for (i = 1; i <= 10; i++) {
    valor = parseInt(window.prompt("Digite o novo valor:"));
    A.push(valor);
}
for (i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
        B.push(A[i] * 2)
    } else {
        B.push(A[i] * 3)

    }
}
document.write("A: " + A);
document.write('<br> B: ' + B);
