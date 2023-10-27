document.getElementById("generateLink").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const referralCode = generateReferralCode(); // Função para gerar códigos exclusivos

    const referralLink = `https://bit.ly/?ref=${referralCode}`;

    // Encurta o link usando o Bitly (substitua pela API de encurtamento de URL de sua escolha)
    shortenURL(referralLink)
        .then(shortenedLink => {
            document.getElementById("referralLink").value = shortenedLink;
        })
        .catch(error => {
            console.error(error);
        });
});

function generateReferralCode() {
    // Implemente sua lógica para gerar códigos exclusivos aqui
    // Isso pode ser baseado no ID do usuário, data e hora, etc.
    return "Ba1bc23dE4F"; // Substitua pelo código gerado dinamicamente
}

function shortenURL(url) {
    // Use uma API de encurtamento de URL, como o Bitly
    // Substitua pelo seu próprio código ou biblioteca de encurtamento de URL
    return fetch(`https://api-ssl.bitly.com/v4/shorten`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer d1b1119a47f33e96647907541ecbc37957014bc9" // Substitua pelo seu token do Bitly
        },
        body: JSON.stringify({
            long_url: url
        })
    })
    .then(response => response.json())
    .then(data => data.link);
}


