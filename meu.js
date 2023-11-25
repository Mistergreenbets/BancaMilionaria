document.addEventListener("DOMContentLoaded", function () {
    fetch("meu.json")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Erro ao carregar JSON:", error));
});

function displayData(data) {
    // Exemplo: exibir os dados em um formato legível
    const jsonContainer = document.getElementById("jsonContainer");
    jsonContainer.innerText = JSON.stringify(data, null, 2);
}
