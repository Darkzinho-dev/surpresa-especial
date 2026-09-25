const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const mensagemFinal = document.getElementById("mensagemFinal");

// Faz o botão NÃO fugir
function fugir() {

    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "fixed";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
}

botaoNao.addEventListener("mouseover", fugir);


// Quando clicar no SIM
botaoSim.addEventListener("click", function () {

    // Esconde os botões
    document.querySelector(".botoes").style.display = "none";

    // Esconde a pergunta
    document.querySelector("h2").style.display = "none";

    // Mostra a mensagem final
    mensagemFinal.style.display = "block";

    // Começa a chuva de corações
    criarCoracoes();
});


// Cria os corações
function criarCoracoes() {

    setInterval(function () {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao");
        coracao.innerHTML = "❤️";

        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(coracao);

        // Remove depois da animação
        setTimeout(function () {
            coracao.remove();
        }, 5000);

    }, 300);
}