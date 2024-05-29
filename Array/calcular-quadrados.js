// Este é um programa no qual o usuário insere dez números inteiros em um array.
// Depois disso, o programa deverá preencher um segundo array com base na seguinte regra: todo
// elemento do segundo array deve ser o quadrado do elemento correspondente do primeiro array.
// Em seguida, deverão ser exibidos os valores armazenados nos dois arrays, um array abaixo do outro

const A = [], B =[];
    for(i = 1; i<=10; i++){
        valor = parseInt(window.prompt("Digite os valores:"));
        A.push(valor);
    }
    for(i = 0; i<A.length; i++){
        B.push(A[i]**2)
}
document.write("Array 1: " + A);
document.write('<br> Array 2: ' + B);