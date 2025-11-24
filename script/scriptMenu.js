let efeitosAtivos = localStorage.getItem("efeitos") !== "off";

function atualizarTextoEfeitos() {
    const span = document.querySelector(".on-of");
    if (span) {
        span.textContent = efeitosAtivos ? "ON" : "OFF";
    }
}

function atualizarMusica() {
    const efeitos = localStorage.getItem("efeitos") !== "off";
    const musica = document.getElementById("musicaFundo");

    if (!musica) return;

    if (efeitos) {
        musica.play().catch(() => {});
    } else {
        musica.pause();
    }
}

function trocarEfeitos() {
    efeitosAtivos = !efeitosAtivos;
    localStorage.setItem("efeitos", efeitosAtivos ? "on" : "off");
    atualizarTextoEfeitos();
    atualizarMusica();
}

function tocarSom(caminho) {
    const efeitos = localStorage.getItem("efeitos") !== "off";
    if (!efeitos) return;

    const audio = new Audio(caminho);
    audio.currentTime = 0;
    audio.play();
}

function irPara(caminho) {
    tocarSom("efeitos/button_song.wav");
    setTimeout(() => {
        window.location.href = caminho;
    }, 120);
}

window.onload = () => {
    if (localStorage.getItem("efeitos") === null) {
        localStorage.setItem("efeitos", "on");
    }
    efeitosAtivos = localStorage.getItem("efeitos") !== "off";

    atualizarTextoEfeitos();
    atualizarMusica();
};