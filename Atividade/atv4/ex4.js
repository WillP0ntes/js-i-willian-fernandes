function votacao(){
    const idade = document.getElementById('idade').value;
 
    if (idade >= 18 & idade < 70){
        document.getElementById('resultado').innerText = ("Seu voto é obrigatorio");
    }
    else if (idade == 16 | idade == 17 | idade >= 70){
        document.getElementById('resultado').innerText = ("Seu voto é opcional");
    }
    else {
        document.getElementById('resultado').innerText = ("Não pode votar");
    }
 
}