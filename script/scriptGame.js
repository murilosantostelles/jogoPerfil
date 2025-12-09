let cartaAtual = null;
let scoreTotal = 0;
let pontosRodada = 100;
let pulosRestantes = 3;
let dicasUsadas = 0;
let respostaBloqueada = false;

const visorPontos = document.querySelector(".pontuacaoAtual h2");
const tituloTema = document.querySelector(".tema h2");
const areaDicasReveladas = document.getElementById("dicas-reveladas");
const botoesDica = document.querySelectorAll(".btn-dica");
const inputResposta = document.querySelector(".campo-de-resposta");
const btnEnviar = document.querySelector(".enviar");
const btnPular = document.querySelector(".btn-pular");
const audioFundo = document.getElementById("musicaFundo");
const somClique = new Audio("efeitos/button_song.wav");
const somAcerto = new Audio("efeitos/check_song.wav");
const somErro = new Audio("efeitos/fail_tick.wav");

function somEstaLigado() {
    return localStorage.getItem("efeitos") !== "off";
}

function tentarTocar(audio) {
    if (somEstaLigado()) {
        audio.currentTime = 0;
        audio.play().catch(() => { });
    }
}

if (audioFundo) {
    audioFundo.volume = 0.2;
    if (somEstaLigado()) {
        audioFundo.play().catch(() => { });
    } else {
        audioFundo.pause();
    }
}

let bancoDePalavras = [];

fetch("palavras.json")
    .then(res => res.json())
    .then(data => {
        bancoDePalavras = data;
        iniciarNovaRodada();
    })
    .catch(err => {
        console.error("Erro ao carregar palavras.json", err);
    });


function iniciarNovaRodada() {
    if (bancoDePalavras.length === 0) return;

    const indice = Math.floor(Math.random() * bancoDePalavras.length);
    cartaAtual = bancoDePalavras.splice(indice, 1)[0];

    pontosRodada = 100;
    dicasUsadas = 0;

    areaDicasReveladas.innerHTML = "";
    inputResposta.value = "";
    respostaBloqueada = true;
    inputResposta.disabled = true;
    btnEnviar.disabled = true;

    tituloTema.innerText = `Eu sou: ${cartaAtual.tipo}`;

    botoesDica.forEach(btn => {
        btn.classList.remove("usado");
        btn.disabled = false;
        btn.style.opacity = "1";
    });

    for (let i = 0; i < 10; i++) {
        const elDica = document.getElementById(`dica-${i + 1}`);
        if (elDica && cartaAtual.dicas[i]) {
            elDica.innerText = cartaAtual.dicas[i];
        } else if (elDica) {
            elDica.innerText = "Sem dica";
        }
    }
}

function atualizarPontuacao() {
    visorPontos.innerText = `Pontos: ${scoreTotal}`;
}

function verificarRecorde() {
    const recordeAtual = Number(localStorage.getItem("recorde")) || 0;

    if (scoreTotal > recordeAtual) {
        localStorage.setItem("recorde", scoreTotal);
    }
}

function salvarPontuacaoFinal() {
    localStorage.setItem("scoreUltimaPartida", scoreTotal);
    verificarRecorde();
}

function reduzirPontosDaRodada() {
    if (pontosRodada > 10) {
        pontosRodada -= 10;
    }
}

function formatarTexto(texto) {
    return texto.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function notificacaoAcerto() {
    const corpo = document.body;
    tentarTocar(somAcerto);

    corpo.classList.add("acerto-animacao");
    setTimeout(() => {
        corpo.classList.remove("acerto-animacao");
    }, 500);
}

function notificacaoErro() {
    const corpo = document.body;
    tentarTocar(somErro);

    corpo.classList.add("erro-animacao");
    setTimeout(() => {
        corpo.classList.remove("erro-animacao");
    }, 500);
}

function verificarResposta() {
    const respostaUsuario = formatarTexto(inputResposta.value);
    const respostaCerta = formatarTexto(cartaAtual.palavra);

    if (respostaUsuario === respostaCerta) {
        notificacaoAcerto();
        setTimeout(() => {
            scoreTotal += pontosRodada;
            atualizarPontuacao();
            verificarRecorde();
            iniciarNovaRodada();
        }, 500);
    }
    else {
        notificacaoErro();
        inputResposta.value = "";
        respostaBloqueada = true;
        inputResposta.disabled = true;
        btnEnviar.disabled = true;

        botoesDica[0].focus();

        if (dicasUsadas >= 10) {
            salvarPontuacaoFinal();

            setTimeout(() => {
                window.location.href = "indexPerdeu.html";
            }, 700);
            return;
        }
    }
}

botoesDica.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("usado")) return;

        tentarTocar(somClique);

        if (audioFundo && audioFundo.paused && somEstaLigado()) {
            audioFundo.play().catch(() => { });
        }

        dicasUsadas += 1;
        reduzirPontosDaRodada();

        const id = btn.getAttribute("data-id");
        const textoDicaOculta = document.getElementById(`dica-${id}`);

        if (textoDicaOculta) {
            const novaDica = document.createElement("div");
            novaDica.classList.add("texto-dica-revelada");
            novaDica.style.background = "#15616d";
            novaDica.style.color = "#ffecd1";
            novaDica.style.padding = "10px";
            novaDica.style.margin = "5px 0";
            novaDica.style.borderRadius = "8px";
            novaDica.innerText = `${id}. ${textoDicaOculta.innerText}`;

            areaDicasReveladas.appendChild(novaDica);
        }

        btn.classList.add("usado");
        btn.disabled = true;
        btn.style.opacity = "0.5";

        respostaBloqueada = false;
        inputResposta.disabled = false;
        btnEnviar.disabled = false;
        inputResposta.focus();
    });
});

if (btnEnviar) {
    btnEnviar.addEventListener("click", verificarResposta);
}

if (inputResposta) {
    inputResposta.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            verificarResposta();
        }
    });
}

if (btnPular) {
    btnPular.addEventListener("click", () => {
        if (pulosRestantes > 0) {
            pulosRestantes--;
            btnPular.innerText = `Pular (${pulosRestantes}/3)`;
            iniciarNovaRodada();
        } else {
            alert("Você não tem mais pulos!");
        }
    });
}

window.irPara = function (url) {
    window.location.href = url;
};