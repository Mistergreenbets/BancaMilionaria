document.addEventListener("DOMContentLoaded", function () {
    fetch("meu.json")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Erro ao carregar JSON:", error));
});

function displayData(data) {
    // Lógica para exibir os dados na página, por exemplo, preenchendo o div com id "jsonContainer"
    document.getElementById("jsonContainer").innerText = JSON.stringify(data, null, 2);
}


