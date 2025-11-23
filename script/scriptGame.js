document.addEventListener("DOMContentLoaded", () => {
    let pontosRodada = 100;
    let scoreTotal = 0;

    const botoes = document.querySelectorAll(".btn-dica");
    const dicasReveladas = document.getElementById("dicas-reveladas");
    const somClique = new Audio("som.mp3");
    const visor = document.querySelector(".pontuacaoAtual h2");

    visor.textContent = "Pontos: 0";

    function iniciarNovaRodada() {
        visor.textContent = "Pontos: " + scoreTotal;
        pontosRodada = 100;
        dicasReveladas.innerHTML = "";
        botoes.forEach(btn => {
            btn.classList.remove("usado");
            btn.disabled = false;
        });
    }

    function reduzirPontos() {
        pontosRodada = Math.max(0, pontosRodada - 10);
    }

   botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("usado")) return;

        const somClique = new Audio("efeitos/button_song.wav");
        somClique.play();

        reduzirPontos();

        const id = btn.getAttribute("data-id");
        const original = document.getElementById("dica-" + id);

        if (original && dicasReveladas) {
            const dica = original.cloneNode(true);
            dica.style.display = "block";
            dicasReveladas.appendChild(dica);
        }

        btn.classList.add("usado");
        btn.disabled = true;
    });
});

    window.playerErrou = () => {
        reduzirPontos();
    };

    window.playerAcertou = () => {
        scoreTotal += pontosRodada;
        iniciarNovaRodada();
    };
});


