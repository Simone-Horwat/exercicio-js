const form  = document.getElementById('form-b-a');

form.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const numB = document.getElementById('numB');
    const numA = document.getElementById('numA');

    const mensagemPositiva = ` Parabéns!! O número B <b>${numB.value}</b> é maior que o número A <b>${numA.value}</b>.`;
    const mensagemNegativa = ` Erro ...  O número B <b>${numB.value}</b> deve ser maior que o número A <b>${numA.value}</b>.`;

    if (Number(numB.value) > Number(numA.value)) {
        const containerMensagemPositiva = document.querySelector('.mensagem-Positiva');
        document.querySelector('.mensagem-Positiva').innerHTML = mensagemPositiva;
        containerMensagemPositiva.style.display = 'block';
        
        numA.value = '';
        numB.value = '';

    } else {
        numB.style.border = '1px solid red';
        const containerMensagemNegativa = document.querySelector('.mensagem-Negativa');
        document.querySelector('.mensagem-Negativa').innerHTML = mensagemNegativa;
        containerMensagemNegativa.style.display = 'block';

        numA.value = '';
        numB.value = '';
    }
    
});
