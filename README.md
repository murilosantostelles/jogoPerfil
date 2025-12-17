# 🧩 Perfil - Jogo de Adivinhação

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Version](https://img.shields.io/badge/Version-v0.1.5_Beta-blue?style=for-the-badge)

## 🚀 Jogue Agora

O projeto está online! Clique no link abaixo para jogar diretamente pelo navegador (Mobile e Desktop):

### 👉 [https://jogoperfilweb.vercel.app/](https://jogoperfilweb.vercel.app/)

---

## 🎬 Apresentação do Projeto

Como parte da avaliação da disciplina, gravamos vídeos demonstrando o funcionamento do jogo e explicando a estrutura do código desenvolvido pela dupla:

* 🎥 **Apresentação do Murilo:** [Clique aqui para assistir](https://drive.google.com/file/d/1YxvxepAv6-5slOUoc_g_RbHEheGaGMDX/view?usp=drive_link)
* 🎥 **Apresentação do Vinicius:** [Clique aqui para assistir](https://drive.google.com/file/d/1rBIFpq00YnAAIXjsVfvoABQ1Yd7Oy3vK/view?usp=drive_link)

---

## 🎮 Sobre o Jogo

Este é um jogo de adivinhação web inspirado no clássico jogo de tabuleiro **"Perfil"**. O objetivo é descobrir a palavra secreta utilizando o menor número de dicas possível.

O projeto foi desenvolvido utilizando **JavaScript Puro**, focando em manipulação do DOM e consumo de dados externos via JSON.

## 🕹️ Como Funciona

1.  **Menu Inicial:** Ao entrar, o jogador, além de conseguir iniciar o jogo, tem acesso rápido ao **Tutorial**, controle de **Efeitos Sonoros** e visualização do **Recorde Atual**.
2.  **O Desafio:** O jogo apresenta uma categoria (Pessoa, Lugar ou Objeto.) e o jogador escolhe uma dica inicial.
3.  **Dicas Interativas:** Você pode revelar até **10 dicas** clicando nos botões numerados.
4.  **Pontuação Dinâmica:**
    * A rodada começa valendo **100 pontos**.
    * Cada dica revelada desconta pontos do prêmio final.
5.  **Tentativas e Pulos:**
    * **Acertou?** Soma pontos e salva o recorde.
    * **Errou?** O jogo obriga o usuário a escolher uma nova dica antes de dar um novo palpite.
    * **Pulos:** O jogador tem **3 pulos** estratégicos para evitar o Game Over.

## ⚙️ Tecnologias e Funcionalidades

### Front-end
* **HTML5 & CSS3:**
    * **Layout Moderno:** Uso combinado de **Flexbox** e **CSS Grid**.
    * **Animações:** Feedback visual de acerto/erro (tela pisca verde/vermelho), animação de "shake" ao errar e transições suaves nos botões.
    * **Responsividade:** Interface adaptada para funcionar bem tanto no PC quanto no celular.

### JavaScript (Lógica e Dados)
* **JSON (Simulação de API):** Os dados (palavras e dicas) são carregados de um arquivo `palavras.json` externo via **Fetch API**, simulando uma requisição real.
* **Persistência de Dados:** Uso de `localStorage` para salvar o **Recorde (High Score)** e as preferências de som do usuário (o jogo lembra se você desligou os efeitos).
* **Audio API:** Sistema de efeitos sonoros imersivos (clique, vitória, derrota) com botão de *toggle* (ligar/desligar).
* **Regex:** Validação inteligente de respostas que ignora acentuação e letras maiúsculas/minúsculas.
