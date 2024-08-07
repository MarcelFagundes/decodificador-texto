function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirTextoNaTelaID(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

exibirTextoNaTela('title', 'Decodificador de Texto');
exibirTextoNaTela('p', 'Apenas letras minúsculas e sem acento.');
exibirTextoNaTelaID('nenhuma-mensagem', 'Nenhuma mensagem <br> encontrada.');
exibirTextoNaTelaID('digite-um-texto', 'Digite um texto que você deseja <br> criptografar ou descriptografar.');
exibirTextoNaTelaID('inputText', '');
exibirDetetiveTela();

function validarTexto() {
    const input = document.getElementById('inputText');
    const texto = input.value;
    const regex = /^[a-z ]*$/;
    if (regex.test(texto)) {
        input.classList.remove('textoInvalido');
        input.classList.add('textoValido');
    } else {
        input.classList.remove('textoValido');
        input.classList.add('textoInvalido');
    }
}

function criptografarTexto() {
    let text = document.getElementById('inputText').value.toLowerCase();
    let result = text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultText').innerText = result;
    mostrarResultados();
    limparCampo();
}

function descriptografarTexto() {
    let text = document.getElementById('inputText').value;
    try {
        let result = text.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('resultText').innerText = result;
    } catch (e) {
        document.getElementById('inputText').innerText = 'Texto inválido para descriptografia!';
    }
    mostrarResultados();
    limparCampo();
}
function copiarTexto() {
    let resultText = document.getElementById('resultText').innerHTML;
    navigator.clipboard.writeText(resultText);
    exibirTextoNaTelaID('resultText', 'Nenhuma mensagem');
}
function mostrarResultados() {
    const imgSemDetetive = document.getElementById('img-sem-detetive');
    const imgComDetetive = document.getElementById('img-com-detetive');
    imgComDetetive.style.display = 'none';
    imgSemDetetive.style.display = 'block';
}
function exibirDetetiveTela() {
    const imgComDetetive = document.getElementById('img-com-detetive');
    const imgSemDetetive = document.getElementById('img-sem-detetive');
    imgComDetetive.style.display = 'block';
    imgSemDetetive.style.display = 'none';
}

function limparCampo() {
    document.getElementById('inputText').value = '';
}
function limparCampoResultado() {
    document.getElementById('resultText').innerText = 'Nenhuma mensagem';
}

function limparCampoTexto(id) {
    if (id = 'inputText') {
        document.getElementById('inputText').value = '';
    } else {
        document.getElementById('resultText').innerText = 'Nenhuma mensagem';
    }
}