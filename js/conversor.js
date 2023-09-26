function converter() {


    const metros = parseFloat(document.getElementById("metros").value);
    const unidade = document.getElementById("unidade").value;
        let resultado;
    
/* Para a conversão de medidas em metros foram utilizadas as seguintes fórmulas:
    1 Metro = 100            Centímetros
    1 Metro = 0.001          Quilômetros
    1 Metro = 0.000621371    Milhas
    1 Metro = 3.28084        Pés
    1 Metro = 39.3701        Polegadas
    1 Metro = 1.09361        Jardas */

    switch (unidade) {
        case "centímetros":
            resultado = metros * 100;
            break;
        case "quilômetros":
            resultado = metros * 0.001;
            break;
        case "milhas":
            resultado = metros * 0.000621371;
            break;
        case "pés":
            resultado = metros * 3.28084;
            break;
        case "polegadas":
            resultado = metros * 39.3701;
            break;
        case "jardas":
            resultado = metros * 1.09361;
            break;
        default:
            resultado = "🚨 Selecione uma unidade de medida válida!";
    }

    
    document.getElementById("resultado").textContent = `${resultado} ${unidade}`;
}