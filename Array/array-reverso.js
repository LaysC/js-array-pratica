// Este é um programa no qual o usuário insira dez números inteiros em um array “a”.
// Depois disso, o programa deverá preencher um 2º array “b” invertido em relação ao array “a”, ou seja, o último
// elemento do array “b” deverá ser o 1º elemento do array“a”, o penúltimo elemento do array “b” deverá ser o 2º
// do array “a” e assim por diante. Em seguida, deverão ser exibidos os valores armazenados nos dois arrays, um array abaixo do outro.

const A = [], B =[];
    for(i = 1; i<=10; i++){
        valor = parseInt(window.prompt("Digite os valores:"));
        A.push(valor);
    }
    for (i = A.length - 1; i >= 0; i--) {
        B.push(A[i]);
    }
    document.write(A+ '<br>' + B);
