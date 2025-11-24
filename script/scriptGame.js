document.addEventListener("DOMContentLoaded", () => {
  const bancoDePalavras = [
    {
      "id": 1,
      "palavra": "Guarda-chuva",
      "tipo": "Objeto",
      "dicas": [
        "Foi inventado na China antiga.",
        "Sua estrutura básica pouco mudou nos séculos.",
        "Símbolo de status em algumas culturas.",
        "Muitas pessoas esquecem em transportes.",
        "Pode ser automático ou manual.",
        "Tem estrutura de metal ou fibra.",
        "Possui uma versão maior para praia.",
        "É feito de material impermeável.",
        "Usado para se proteger.",
        "Serve para evitar que você se molhe na chuva."
      ]
    },
    {
      "id": 2,
      "palavra": "Micro-ondas",
      "tipo": "Objeto",
      "dicas": [
        "Descoberto acidentalmente testando radares.",
        "Usa radiação não ionizante.",
        "Possui um prato giratório.",
        "Não coloque metal dentro dele.",
        "Revolucionou a cozinha nos anos 70.",
        "Possui botões para descongelar.",
        "Faz moléculas de água vibrarem.",
        "Comum em copas de escritório.",
        "Faz pipoca muito rápido.",
        "Eletrodoméstico para aquecer comida."
      ]
    },
    {
      "id": 3,
      "palavra": "Brasil",
      "tipo": "Lugar",
      "dicas": [
        "Quinto maior país do mundo.",
        "Único na América que fala português.",
        "Abriga a maior parte da Amazônia.",
        "Venceu a Copa do Mundo 5 vezes.",
        "Capital planejada em forma de avião.",
        "Terra do Samba.",
        "Bandeira verde e amarela.",
        "Fica na América do Sul.",
        "Onde fica o Rio de Janeiro.",
        "Nosso país."
      ]
    },
    {
      "id": 4,
      "palavra": "Pelé",
      "tipo": "Pessoa",
      "dicas": [
        "Nome de batismo era Edson.",
        "Nasceu em Três Corações.",
        "Foi Ministro do Esporte.",
        "Parou uma guerra para jogar.",
        "Fez mais de 1000 gols.",
        "Brilhou no Santos.",
        "Venceu 3 Copas do Mundo.",
        "Camisa 10 eterno.",
        "Rei do Futebol.",
        "Maior jogador brasileiro."
      ]
    },
    {
      "id": 5,
      "palavra": "Violão",
      "tipo": "Objeto",
      "dicas": [
        "Descendente do alaúde.",
        "Tem corpo oco e caixa de ressonância.",
        "Pode ser acústico ou elétrico.",
        "Comum em rodas de amigos.",
        "Possui trastes no braço.",
        "Geralmente feito de madeira.",
        "Precisa ser afinado.",
        "Tocado com dedos ou palheta.",
        "Possui 6 cordas.",
        "Instrumento popular no sertanejo."
      ]
    },
  ];


  let cartaAtual = null;
  let scoreTotal = 0;
  let pontosRodada = 100;
  let pulosRestantes = 3;

  const visorPontos = document.querySelector(".pontuacaoAtual h2");
  const tituloTema = document.querySelector(".tema h2");
  const areaDicasReveladas = document.getElementById("dicas-reveladas");
  const botoesDica = document.querySelectorAll(".btn-dica");
  const inputResposta = document.querySelector(".campo-de-resposta");
  const btnEnviar = document.querySelector(".enviar");
  const btnPular = document.querySelector(".btn-pular");
  const audioFundo = document.getElementById("musicaFundo");

  const somClique = new Audio("efeitos/button_song.wav");
  const somAcerto = new Audio("efeitos/win.wav");
  const somErro = new Audio("efeitos/fail_tick.wav");

  iniciarNovaRodada();

  function iniciarNovaRodada() {
    const indice = Math.floor(Math.random() * bancoDePalavras.length)
    cartaAtual = bancoDePalavras[indice];

    pontosRodada = 110;
    areaDicasReveladas.innerHTML = "";
    inputResposta.value = "";

    tituloTema.innerText = `Eu sou: ${cartaAtual.tipo}`;

    botoesDica.forEach(btn => {
      btn.classList.remove("Usado");
      btn.disabled = false;
      btn.style.opacity = "1";
    });

    for (let i = 0; i < 10; i++) {
      const elDica = document.getElementById(`dica-${i + 1}`);
      if (elDica && cartaAtual.dicas[i]) {
        elDica.innerText = cartaAtual.dicas[i];
      }
      else if (elDica) {
        elDica.innerText = "Sem Dica";
      }
    }
  }

  function atualizarPontuacao() {
    visorPontos.innerText = `Score: ${scoreTotal}`;
  }


function reduzirPontosDaRodada() {
        if (pontosRodada > 10) {
            pontosRodada -= 10;
        }
    }

    function formatarTexto(texto) {
        return texto
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }
});