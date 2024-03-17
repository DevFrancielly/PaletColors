const generateButton = document.querySelector("#generateButton");
const colorsDiv = document.querySelector(".colors");

// Adiciona a quantidade de cores
function generateColors(){
    colorsDiv.innerHTML = "";

    for(let i = 0; i < 5; i++){ //informa a quantidade de cores da paleta
        const color = generateColorsPalet();
        const colorDiv =  document.createElement("div"); // Cria o elemento div
        colorDiv.style.backgroundColor = color; // Define a cor da div criada
        const colorName = document.createElement("p"); // cria o elemento paragrafo
        colorName.textContent = color; // deifine a cor do texto inserido no paragrafo
        colorDiv.appendChild(colorName); // atribui o Paragrafo a div
        colorsDiv.appendChild(colorDiv); //insere a div criada dentro do compo vazio.
    };
};

//Gera paleta de cores
function generateColorsPalet(){
    const letters = "0123456789ABCDEF"; // string que serão utilizadas na criação da cor
    let color = "#"; 

    for(let i = 0; i < 6; i++){
        // Math.floor é usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor
        // Math.ramdom pode ser usado para retornar números inteiros aleatórios.
        // += realiza a soma 
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

generateButton.addEventListener("click", generateColors); // Cria um evento de click no botão
