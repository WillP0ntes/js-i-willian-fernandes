function car(){
    const velo = document.getElementById('velocidade').value;

    if (velo > 60){
        document.getElementById('resultado').innerText = ("Você ultrapassou a velocidade permitida");
    }
    else{
        document.getElementById('resultado').innerText = ("Você está dentro do limite de velocidade");
    }
}