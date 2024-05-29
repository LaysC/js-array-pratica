// Este é um programa no qual o usuário deve insere dez números inteiros em um array.
// Após isso, deve ser exibida a lista de números pares
// entre os digitados e a lista de números ímpares entre os digitados, uma lista abaixo da outra.

const num = [];
    for(i = 1; i<=10; i++){
        valor = parseInt(window.prompt("Digite o novo valor:"));
        num.push(valor);
    }
document.write("Pares: ");
for(i = 0; i< num.length; i++){
    if(num[i] % 2 == 0){
            document.write(num[i] + ' ');
    }
}
document.write('<br> Ímpares: ');
for(i = 0; i< num.length; i++){
    if(num[i] % 2 != 0){
            document.write(num[i] + ' ');
    }
}