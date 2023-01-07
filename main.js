var textInput = document.querySelector("#entradaTexto");
var outInput = document.querySelector("#saidaTexto");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.querySelector(".saida").style.display = "none";
    document.querySelector(".saida_crip_botao").style.display = "inline-block";
    document.getElementById('saidaTexto').innerHTML = resultCripto

}

function descriptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.querySelector(".saida").style.display = "none";
    document.querySelector(".saida_crip_botao").style.display = "inline-block";
    document.getElementById('saidaTexto').innerHTML = resultCripto;
}

function copiar() {
    var textoCop = document.getElementById('saidaTexto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}

/*var textInput = document.querySelector("#entradaTexto");
var outInput = document.querySelector(".saidaTexto");

function criptografar(){

    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.querySelector(".saida").style.display = "none";
    document.querySelector(".saida_crip_botao").style.display = "inline-block";
    document.querySelector(".saidaTexto").innerText = resultCripto;
}

function descriptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('saidaTexto').innerHTML = resultCripto;

}*/
