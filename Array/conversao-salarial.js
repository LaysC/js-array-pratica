// Este é um programa no qual o usuário insere valores em reais de cinco salários em um array.
// Após isso, os valores deverão ser exibidos em reais e em dólares.O programa deve aceitar diferentes cotações.
       
       
        const salario = [];
	    for (i = 1; i <= 5; i++) {
        s = parseFloat(window.prompt('Digite o salário em reais:'));
        salario.push(s);
    }
	    dolar = parseFloat(window.prompt('Digite a cotação do dólar:'));
	
        for (i = 0; i < salario.length; i++) {
        document.write('RS ' + salario[i] + ' - US$ ' + salario[i] / dolar + '<br>');
    }
