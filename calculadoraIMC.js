function calcularIMC(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const erro = document.getElementById('erro');
    const res = document.getElementById('resultado');

    //Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <=0){
        erro.classList.add('visible');
        res.classList.remove('visible');
        return;
    }
    erro.classList.remove('visible');

    //Cálculo
    const imc = peso/ (altura * altura);

    //Classificação
    let classificacao, cor;
    if (imc < 18.5) { classificacao = '🔵 Abaixo do peso'; cor = '#4bc8f5';}
    else if (imc < 25.0) { classificacao = '🟢 Peso normal'; cor = '#c8f23d';}
    else if (imc < 30.0) { classificacao = '🟡 Sobrepeso'; cor = '#f5c24b';}
    else if (imc < 35.0) { classificacao = '🟠 Obesidade Grau I'; cor = '#ff8c42';}
    else if (imc < 40.0) { classificacao = '🔴 Obesidade Grau II'; cor = '#ff6b6b';}
    else { classificacao = '🔴 Obesidade Grau III (Mórbida)'; cor = '#c0392b';}

    //Exibe
    document.getElementById('imc-value').textContent = imc.toFixed(2);
    document.getElementById('imc-value').style.color = cor;
      document.getElementById('imc-classificacao').textContent = classificacao;

    //Posiciona marcador na barra (IMC 10 → 0%, IMC 45+ → 100%)
    const pct = Math.min(Math.max((imc - 10) / 35, 0), 1) * 100;
    document.getElementById('marcador').style.left = pct + '%';

    //Anime o resultado 
    res.classList.remove('visible');
    void res.offsetWidth; // reflow para reiniciar animação
    res.classList.add('visible');
}

//Calcular apertando Enter
document.addEventListener('keydown', e => {
    if (e.key === 'Enter') calcularIMC();
});