function calcularIMC() {
    // Capturar os valores inseridos nos inputs
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Calcular o IMC
    let imc = peso / (altura * altura);

    // Exibir o valor do IMC
    document.getElementById("imc").textContent = `IMC: ${imc.toFixed(2)}`;

    // Classificar o IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    // Exibir a classificação do IMC
    document.getElementById("classificacao").textContent = classificacao;
}
