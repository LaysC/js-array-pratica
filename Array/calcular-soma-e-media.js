// Este é um programa no qual o usuário deve inserir dez números inteiros em um array.
// Após isso, o programa deverá calcular e exibir a soma e a média dos valores digitados.

    const num = [];
    contador = 0;
    for(i = 1; i<=10; i++){
        valor = parseInt(window.prompt("Digite o novo valor:"));
        num.push(valor);
        contador = contador + valor;
    }

document.write("Soma: " + contador);
document.write('<br> Média: ' + contador/num.length);