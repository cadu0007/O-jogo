var select = document.querySelector("#nivel")
var valor;
var mensagem = document.querySelector(".texto")
var nome = document.querySelector ("#Nick")


truca_dificuldade = () => {
    mensagem.innerHTML = '<p>' + 'Olá ' + nome.value + ', vamos jogar! De acordo com a opção de intervalo que você escolheu, descubra o número.'


    if(select.value == "1" ){
        valor = Math.floor(Math.random() * 11)
        console.log(valor);
    }
    
    else if(select.value == "2" ){
        valor = Math.floor(Math.random() * 101)
        console.log(valor);
    }

    else   {
        valor = Math.floor(Math.random() * 201)
        console.log(valor);
    }
}


var comparacao;
var valor_escolido = document.querySelector("#numero");

jogar = () => {
    if (valor_escolido == valor) {
        alert ("Parabens!, você certou")
    }

    else if (valor_escolido > valor){
        alert ("Numero maior que o escolhido")
    }

    else  {
        alert ("Numero menor do que o escolhido")
    }
} 




