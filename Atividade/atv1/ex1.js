function pais(){

const nomePais = document.getElementById('paises').value;

if (nomePais == "Brasil"){
    document.getElementById("resultado").innerText=("Você é Brasileiro");    
}

else {
    document.getElementById("resultado").innerText=("Você é Estrangeiro");
}


}

