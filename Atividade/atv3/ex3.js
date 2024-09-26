function atv() {

const nomeAluno = document.getElementById('nome').value;
const idadeAluno = document.getElementById('idade').value;
var primeiraNota = parseFloat(document.getElementById('nota1').value);
var segundaNota = parseFloat(document.getElementById('nota2').value);

var mediaNota = (primeiraNota+segundaNota) / 2;

if (mediaNota < 6) {
    document.getElementById('resultado').innerText = ("Reprovado");
}

else {
    document.getElementById('resultado').innerText = ("Aprovado");
}

if (idadeAluno >= 18) {

    document.getElementById('resultadoIdade').innerText = ("Maior de idade");
}

else {
    document.getElementById('resultadoIdade').innerText = ("Menor de idade");
}

}