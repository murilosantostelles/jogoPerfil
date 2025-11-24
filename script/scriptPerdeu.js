document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("somAbertura");
    const loop = document.getElementById("musicaLoop");

    if (localStorage.getItem("efeitos") === "off") {
        return; 
    }

    loop.volume = 0.3; 
    intro.addEventListener("ended", () => {
        loop.play().catch(e => console.log("Erro no loop:", e));
    });

    intro.play().catch(() => {
        console.log("Autoplay bloqueado. Aguardando clique do usuário...");
        document.body.addEventListener('click', () => {
            if (localStorage.getItem("efeitos") !== "off") {
                intro.play();
            }
        }, { once: true });
    });
});