document.addEventListener("DOMContentLoaded", () => {
    const bancoDePalavras = [
                {
                    "id": 1,
                    "palavra": "Guarda-chuva",
                    "tipo": "objeto",
                    "dicas": [
                        "Fui inventado na China antiga.",
                        "Minha estrutura básica mudou muito pouco ao longo dos séculos.",
                        "Já fui símbolo de status em várias culturas.",
                        "Sou um dos itens que as pessoas mais esquecem em transportes públicos.",
                        "Posso ser automático ou manual.",
                        "Sou feito com estrutura de metal ou fibra.",
                        "Tenho uma versão maior usada na praia.",
                        "Sou fabricado com material impermeável.",
                        "As pessoas me usam para se proteger.",
                        "Sirvo para evitar que você se molhe na chuva."
                    ]
                },
                {
                    "id": 2,
                    "palavra": "Micro-ondas",
                    "tipo": "objeto",
                    "dicas": [
                        "Fui descoberto acidentalmente durante testes com radares.",
                        "Funciono usando radiação não ionizante.",
                        "Tenho um prato que gira no meu interior.",
                        "Não coloque metal dentro de mim.",
                        "Me tornei muito popular nas cozinhas a partir dos anos 70.",
                        "Tenho funções específicas para descongelar alimentos.",
                        "Faço as moléculas de água vibrarem para aquecer a comida.",
                        "Sou muito comum em cozinhas de escritório.",
                        "Faço pipoca bem rápido.",
                        "Sou usado para aquecer alimentos."
                    ]
                },
                {
                    "id": 3,
                    "palavra": "Brasil",
                    "tipo": "lugar",
                    "dicas": [
                        "Sou o quinto maior país do mundo.",
                        "Sou o único país das Américas que fala português.",
                        "Abrigo grande parte da Floresta Amazônica.",
                        "Sou o maior campeão da Copa do Mundo.",
                        "Minha capital foi planejada e tem formato que lembra um avião.",
                        "Sou conhecido como a terra do samba.",
                        "Minhas cores são verde e amarelo.",
                        "Fico localizado na América do Sul.",
                        "Sou lar do Rio de Janeiro.",
                        "Sou o seu país."
                    ]
                },
                {
                    "id": 4,
                    "palavra": "Pelé",
                    "tipo": "pessoa",
                    "dicas": [
                        "Meu nome de batismo é Edson Arantes.",
                        "Nasci em Três Corações.",
                        "Já fui Ministro do Esporte.",
                        "Cheguei a parar uma guerra para jogar uma partida.",
                        "Marquei mais de mil gols na minha carreira.",
                        "Brilhei jogando no Santos.",
                        "Sou o único tricampeão mundial de seleções.",
                        "Sou eternamente a camisa 10.",
                        "Sou conhecido como o Rei do Futebol.",
                        "Sou considerado um dos maiores jogadores da história."
                    ]
                },
                {
                    "id": 5,
                    "palavra": "Violão",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou descendente do alaúde.",
                        "Tenho um corpo oco e uma caixa de ressonância.",
                        "Posso ser acústico ou elétrico.",
                        "Sou muito presente em rodas de amigos.",
                        "Tenho trastes ao longo do meu braço.",
                        "Sou geralmente feito de madeira.",
                        "Preciso ser afinado para soar corretamente.",
                        "Posso ser tocado com os dedos ou com uma palheta.",
                        "Tenho seis cordas.",
                        "Sou muito usado no sertanejo."
                    ]
                },
                {
                    "id": 6,
                    "palavra": "Avião",
                    "tipo": "Objeto",
                    "dicas": [
                        "Eu consigo voar pelos céus.",
                        "Eu transporto pessoas e cargas rapidamente.",
                        "Você me encontra em aeroportos.",
                        "Eu tenho asas.",
                        "Sou usado para longas viagens.",
                        "Eu fui inspirado no voo dos pássaros.",
                        "Meus primeiros modelos eram feitos de madeira e tecido.",
                        "Eu fui inventado pelos irmãos Wright.",
                        "Eu atravesso continentes em poucas horas.",
                        "Eu uso turbinas ou hélices para me mover."
                    ]
                },
                {
                    "id": 7,
                    "palavra": "Bicicleta",
                    "tipo": "Objeto",
                    "dicas": [
                        "Eu sou movida pela força das pernas.",
                        "Você me vê muito em ciclovias.",
                        "Tenho duas rodas.",
                        "Sou usada como exercício e transporte.",
                        "Posso ter marchas.",
                        "Já fui um símbolo de liberdade feminina.",
                        "Meu primeiro modelo não tinha pedais.",
                        "Sou muito usada por entregadores.",
                        "Sou comum em cidades sustentáveis.",
                        "Usar capacete comigo é sempre recomendado."
                    ]
                },
                {
                    "id": 8,
                    "palavra": "Computador",
                    "tipo": "Objeto",
                    "dicas": [
                        "Eu posso rodar jogos e programas.",
                        "Tenho teclado e tela.",
                        "Sou essencial para trabalhar hoje em dia.",
                        "Fui criado para fazer cálculos.",
                        "Posso ser portátil ou de mesa.",
                        "Eu funciono através de bits.",
                        "Meu primeiro modelo ocupava uma sala inteira.",
                        "Posso executar bilhões de operações por segundo.",
                        "Sou usado por programadores.",
                        "Você provavelmente está usando um de mim agora."
                    ]
                },
                {
                    "id": 9,
                    "palavra": "Médico",
                    "tipo": "Pessoa",
                    "dicas": [
                        "Eu cuido da saúde das pessoas.",
                        "Uso jaleco.",
                        "Atendo em hospitais.",
                        "Faço diagnósticos.",
                        "Estudei muitos anos.",
                        "Posso ter uma especialidade.",
                        "Uso estetoscópio.",
                        "Já existo desde civilizações antigas.",
                        "Eu faço juramento antes de exercer a profissão.",
                        "Sou chamado quando alguém está doente."
                    ]
                },
                {
                    "id": 10,
                    "palavra": "Albert Einstein",
                    "tipo": "Pessoa",
                    "dicas": [
                        "Eu criei a teoria da relatividade.",
                        "Meu cabelo era bem bagunçado.",
                        "Ganhei o Nobel de Física.",
                        "Nasci na Alemanha.",
                        "Fui considerado um dos maiores cientistas da história.",
                        "Fui professor universitário.",
                        "Contribuí para o desenvolvimento da mecânica quântica.",
                        "Minha equação mais famosa tem apenas três letras.",
                        "Fui alvo de espionagem na Guerra Fria.",
                        "Meu cérebro foi estudado após minha morte."
                    ]
                },
                {
                    "id": 11,
                    "palavra": "Cleópatra",
                    "tipo": "Pessoa",
                    "dicas": [
                        "Eu fui uma rainha poderosa.",
                        "Meu reinado foi no Egito.",
                        "Sou frequentemente retratada usando ouro.",
                        "Fui famosa pela minha inteligência.",
                        "Tive relações políticas com líderes romanos.",
                        "Falo várias línguas.",
                        "Fui a última faraó do Egito.",
                        "Meu nome está ligado a grandes romances históricos.",
                        "Fui treinada desde cedo para governar.",
                        "Minha morte é um grande mistério histórico."
                    ]
                },
                {
                    "id": 12,
                    "palavra": "Japão",
                    "tipo": "Lugar",
                    "dicas": [
                        "Eu sou um conjunto de ilhas.",
                        "Tenho tecnologia avançada.",
                        "Meu transporte público é muito eficiente.",
                        "Minhas flores de cerejeira são famosas.",
                        "Tenho uma das maiores economias do mundo.",
                        "Eu fico na Ásia.",
                        "Tenho muitos vulcões.",
                        "Minha escrita usa três sistemas diferentes.",
                        "Já fui isolado do mundo por séculos.",
                        "Minha capital é uma das maiores cidades do mundo."
                    ]
                },
                {
                    "id": 13,
                    "palavra": "Paris",
                    "tipo": "Lugar",
                    "dicas": [
                        "Eu sou conhecida como a cidade do amor.",
                        "Tenho uma torre muito famosa.",
                        "As pessoas me visitam para conhecer minha culinária.",
                        "Fiquei famosa pela moda.",
                        "Sou capital de um país europeu.",
                        "Recebo milhões de turistas por ano.",
                        "Meu rio se chama Sena.",
                        "Grandes artistas viveram aqui.",
                        "Fui palco de importantes revoluções.",
                        "Tenho museus renomados no mundo inteiro."
                    ]
                },
                {
                    "id": 14,
                    "palavra": "Amazonas",
                    "tipo": "Lugar",
                    "dicas": [
                        "Eu sou um estado do Brasil.",
                        "Tenho uma floresta muito famosa.",
                        "Sou cortado pelo maior rio do mundo.",
                        "Meu clima é quente e úmido.",
                        "Minha capital é Manaus.",
                        "Abrigo uma rica diversidade de espécies.",
                        "O Festival de Parintins acontece aqui.",
                        "Tenho cidades acessíveis apenas por barco ou avião.",
                        "Minha floresta é chamada de pulmão do mundo.",
                        "Sou um dos maiores estados brasileiros."
                    ]
                },
                {
                    "id": 15,
                    "palavra": "Câmera Fotográfica",
                    "tipo": "Objeto",
                    "dicas": [
                        "Eu capturo momentos.",
                        "Tenho lente.",
                        "Sou usada por fotógrafos.",
                        "Posso ser digital ou analógica.",
                        "Tenho botão de disparo.",
                        "Meus primeiros modelos precisavam de longas exposições.",
                        "Sou usada em filmes e documentários.",
                        "A luz é essencial para eu funcionar.",
                        "Posso ter zoom óptico.",
                        "Guardo memórias em imagens."
                    ]
                },
                {
                    "id": 16,
                    "palavra": "Relógio",
                    "tipo": "Objeto",
                    "dicas": [
                        "Eu marco o tempo.",
                        "Fico no pulso ou na parede.",
                        "Tenho ponteiros ou números digitais.",
                        "Sou usado todos os dias.",
                        "Posso despertar você de manhã.",
                        "Minhas versões antigas usavam engrenagens.",
                        "Já existo há milhares de anos.",
                        "Podem me encontrar em torres famosas.",
                        "Meu tic-tac é bem reconhecível.",
                        "Sou indispensável para organização."
                    ]
                },
                {
                    "id": 17,
                    "palavra": "Cristiano Ronaldo",
                    "tipo": "Pessoa",
                    "dicas": [
                        "Eu jogo futebol profissionalmente.",
                        "Sou artilheiro nato.",
                        "Já joguei em grandes clubes europeus.",
                        "Uso o número 7.",
                        "Sou muito famoso no mundo inteiro.",
                        "Nasci na Ilha da Madeira.",
                        "Tenho diversos prêmios individuais.",
                        "Sou conhecido pela minha impulsão.",
                        "Tenho uma celebração marcante.",
                        "Sou considerado um dos maiores jogadores da história."
                    ]
                },
                {
                    "id": 18,
                    "palavra": "Itália",
                    "tipo": "Lugar",
                    "dicas": [
                        "Eu sou famosa pela gastronomia.",
                        "Meu formato lembra uma bota.",
                        "Tenho cidades históricas.",
                        "Sou berço da cultura romana.",
                        "Tenho uma torre muito inclinada.",
                        "Minha bandeira tem três cores.",
                        "Fico na Europa.",
                        "Sou cheia de ruínas antigas.",
                        "Sou o lar de uma cidade inteira dentro de mim.",
                        "Sou um destino turístico amado no mundo."
                    ]
                },
                {
                    "id": 19,
                    "palavra": "Escova de Dentes",
                    "tipo": "Objeto",
                        "dicas": [
                            "Eu mantenho seus dentes limpos.",
                            "Sou usada todos os dias.",
                            "Tenho cerdas.",
                            "Fico geralmente no banheiro.",
                            "Sou usada com pasta.",
                            "Já fui feita de pelos de animais.",
                            "Sou substituída a cada poucos meses.",
                            "Sou essencial para a higiene.",
                            "Existem versões elétricas de mim.",
                            "Meu uso evita problemas bucais."
                        ]
                    },
                {
                    "id": 20,
                    "palavra": "Cristo Redentor",
                    "tipo": "Lugar",
                    "dicas": [
                        "Eu sou um dos maiores símbolos do Brasil.",
                        "Fico no alto de um morro.",
                        "Sou visitado por turistas do mundo inteiro.",
                        "Tenho os braços abertos.",
                        "Fico no Rio de Janeiro.",
                        "Fui inaugurado em 1931.",
                        "Fui eleito uma das sete maravilhas modernas.",
                        "Sou feito de concreto e pedra-sabão.",
                        "Tenho mais de 30 metros de altura.",
                        "Sou visível de vários pontos da cidade."
                    ]
                },
                {
                    "id": 21,
                    "palavra": "Caneta",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usada para escrever.",
                        "Carrego tinta dentro de mim.",
                        "Posso ser azul, preta ou vermelha.",
                        "Sou encontrada em escolas e escritórios.",
                        "Fui inventada há séculos em versões primitivas.",
                        "Sou leve e fácil de carregar.",
                        "Tenho uma ponta fina que libera tinta.",
                        "Sou essencial para anotações rápidas.",
                        "Posso ser descartável ou recarregável.",
                        "Ajudo a registrar ideias todos os dias."
                    ]
                },
                {
                    "id": 22,
                    "palavra": "Tesoura",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usada para cortar.",
                        "Tenho duas lâminas.",
                        "Sou muito comum em escolas.",
                        "Posso cortar papel, tecido e mais.",
                        "Já existo desde tempos antigos.",
                        "Preciso ser usada com cuidado.",
                        "Sou feita de metal e plástico.",
                        "Sou usada também por cabeleireiros.",
                        "Meu corte pode ser bem preciso.",
                        "Sou essencial em artesanato."
                    ]
                },
                {
                    "id": 23,
                    "palavra": "Fogão",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usado para cozinhar alimentos.",
                        "Funciono com gás ou eletricidade.",
                        "Tenho bocas que geram calor.",
                        "Estou presente em quase toda cozinha.",
                        "Sou essencial na preparação de refeições.",
                        "Fui muito diferente em minha versão antiga.",
                        "Sou usado todos os dias pela maioria das famílias.",
                        "Meus botões controlam minha chama.",
                        "Sou perigoso se mal utilizado.",
                        "Sou indispensável na culinária."
                    ]
                },
                {
                    "id": 24,
                    "palavra": "Relógio",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usado para ver as horas.",
                        "Posso ser de pulso ou de parede.",
                        "Funciono com bateria ou engrenagens.",
                        "Sou importante para organização do dia.",
                        "Minha invenção mudou o mundo.",
                        "Sou composto de ponteiros ou números digitais.",
                        "Estou presente em quase todos os lugares.",
                        "Sou um acessório de moda também.",
                        "Sou preciso na contagem do tempo.",
                        "Sem mim, horários seriam um caos."
                    ]
                },
                {
                    "id": 25,
                    "palavra": "Travesseiro",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usado para dormir.",
                        "Dou suporte à cabeça.",
                        "Sou macio e confortável.",
                        "Minha espuma pode variar.",
                        "Sou essencial em camas.",
                        "Minha capa costuma ser lavável.",
                        "Existem versões antialérgicas de mim.",
                        "Sou útil para descansar bem.",
                        "Sou encontrado em todos os quartos.",
                        "Ajudo a ter uma boa noite de sono."
                    ]
                },
                {
                    "id": 26,
                    "palavra": "Bicicleta",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usada para locomoção.",
                        "Tenho duas rodas.",
                        "Sou movida pela força humana.",
                        "Sou comum em parques.",
                        "Tenho pedais e guidão.",
                        "Fui inventada no século XIX.",
                        "Sou ótima para exercícios.",
                        "Sou popular no mundo todo.",
                        "Ajudo a evitar trânsito.",
                        "Posso ser usada para lazer ou esporte."
                    ]
                },
                {
                    "id": 27,
                    "palavra": "Churrasqueira",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usada para assar carnes.",
                        "Funciono com carvão, gás ou eletricidade.",
                        "Sou muito comum em festas.",
                        "Meu calor deixa a comida saborosa.",
                        "Sou símbolo de confraternização.",
                        "Sou usada há muitos séculos em formas primitivas.",
                        "Posso ser portátil.",
                        "Faço fumaça quando usada com carvão.",
                        "Sou muito popular no Brasil.",
                        "Sou essencial para um bom churrasco."
                    ]
                },
                {
                    "id": 28,
                    "palavra": "Garrafa",
                    "tipo": "objeto",
                    "dicas": [
                        "Guardo líquidos no meu interior.",
                        "Posso ser de plástico, vidro ou metal.",
                        "Sou muito usada no dia a dia.",
                        "Já fui usada por civilizações antigas.",
                        "Sou prática para transportar água.",
                        "Posso ter tampa de rosca.",
                        "Sou usada em esportes.",
                        "Sou encontrada em diferentes tamanhos.",
                        "Sou reciclável.",
                        "Ajudo a manter líquidos armazenados."
                    ]
                },
                {
                    "id": 29,
                    "palavra": "Chave",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usada para abrir portas.",
                        "Tenho formato específico para uma fechadura.",
                        "Sou pequena e metálica.",
                        "Sou carregada em chaveiros.",
                        "Existem versões modernas de mim.",
                        "Sou essencial para segurança.",
                        "Sou fácil de perder.",
                        "Minha invenção é muito antiga.",
                        "Sem mim, você não entra em casa.",
                        "Sou indispensável para trancar algo."
                    ]
                },
                {
                    "id": 30,
                    "palavra": "Lápis",
                    "tipo": "objeto",
                    "dicas": [
                        "Sou usado para escrever.",
                        "Tenho grafite dentro de mim.",
                        "Sou comum nas escolas.",
                        "Posso ser apontado.",
                        "Sou barato e muito útil.",
                        "Meu corpo é de madeira.",
                        "Permito apagar o que é escrito.",
                        "Sou usado em desenhos.",
                        "Sou um dos objetos mais antigos da escrita moderna.",
                        "Sou item obrigatório no material escolar."
                    ]
                },
                {
                    "id": 31,
                    "palavra": "Deserto do Saara",
                    "tipo": "lugar",
                    "dicas": [
                        "Sou um dos lugares mais quentes do mundo.",
                        "Sou o maior deserto quente do planeta.",
                        "Fico no norte da África.",
                        "Tenho dunas gigantescas.",
                        "Quase não chove em mim.",
                        "Minha paisagem é dominada por areia.",
                        "Sou lar de alguns povos nômades.",
                        "Minha temperatura pode cair à noite.",
                        "Sou um dos ambientes mais extremos da Terra.",
                        "Sou conhecido mundialmente como símbolo de calor."
                    ]
                },
                {
                    "id": 32,
                    "palavra": "Portugal",
                    "tipo": "lugar",
                    "dicas": [
                        "Fico na Europa.",
                        "Minha língua influenciou o Brasil.",
                        "Fui pioneiro nas navegações.",
                        "Minha capital é muito famosa.",
                        "Tenho comida típica com bacalhau.",
                        "Fui o império de grandes descobrimentos.",
                        "Sou banhado pelo oceano Atlântico.",
                        "Me tornei independente há séculos.",
                        "Sou um país pequeno, mas muito influente.",
                        "Sou o berço da língua portuguesa."
                    ]
                },
                {
                    "id": 33,
                    "palavra": "China",
                    "tipo": "lugar",
                    "dicas": [
                        "Sou um dos países mais antigos do mundo.",
                        "Tenho a maior população do planeta.",
                        "Sou lar da Grande Muralha.",
                        "Minha culinária é muito conhecida.",
                        "Fico na Ásia.",
                        "Tenho grandes inovações históricas.",
                        "Minha economia é uma das maiores do mundo.",
                        "Meu idioma é um dos mais difíceis.",
                        "Meu território é imenso.",
                        "Sou um gigante asiático."
                    ]
                },
                {
                    "id": 34,
                    "palavra": "Austrália",
                    "tipo": "lugar",
                    "dicas": [
                        "Sou um país e um continente ao mesmo tempo.",
                        "Fico cercado pelo oceano.",
                        "Sou lar de cangurus.",
                        "Tenho uma grande barreira de corais.",
                        "Minha população é concentrada no litoral.",
                        "Meu verão pode ser muito quente.",
                        "Tenho animais únicos no planeta.",
                        "Meu idioma oficial é o inglês.",
                        "Sou muito procurada para intercâmbio.",
                        "Sou famosa por minha natureza exótica."
                    ]
                },
                {
                    "id": 35,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu brilho no escuro.",
                    "Eu fico preso no teto.",
                    "Eu tenho lâmpadas dentro de mim.",
                    "Eu ilumino ambientes.",
                    "Eu posso ser colorido.",
                    "Eu posso ser redondo.",
                    "Eu sou ligado na eletricidade.",
                    "Eu posso aquecer um pouco.",
                    "Eu fico em quase toda casa.",
                    "Eu sou uma luminária."
                    ],
                    "resposta": "Luminária"
                },
                {
                    "id": 36,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu escrevo livros.",
                    "Eu criei histórias famosas.",
                    "Eu vivo no mundo da fantasia.",
                    "Eu fico sentado por horas escrevendo.",
                    "Eu tenho fãs do mundo inteiro.",
                    "Eu criei grandes personagens.",
                    "Eu já fui entrevistado muitas vezes.",
                    "Eu influenciei a literatura moderna.",
                    "Eu transformei ideias em aventuras.",
                    "Eu sou J. K. Rowling."
                    ],
                    "resposta": "J. K. Rowling"
                },
                {
                    "id": 37,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu sou um país europeu.",
                    "Eu tenho muita história antiga.",
                    "Eu tenho desertos de areia dourada.",
                    "Eu enfrentei vários impérios.",
                    "Eu tenho pirâmides famosas.",
                    "Eu tenho um rio muito longo.",
                    "Eu atraio turistas o ano todo.",
                    "Eu tenho cidades movimentadas.",
                    "Eu guardo múmias.",
                    "Eu sou o Egito."
                    ],
                    "resposta": "Egito"
                },
                {
                    "id": 38,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu guardo alimentos gelados.",
                    "Eu fico na cozinha.",
                    "Eu uso muita energia.",
                    "Eu tenho prateleiras internas.",
                    "Eu faço barulho leve.",
                    "Eu evito que a comida estrague.",
                    "Eu posso ter freezer junto.",
                    "Eu posso ser grande.",
                    "Eu sou indispensável em uma casa.",
                    "Eu sou uma geladeira."
                    ],
                    "resposta": "Geladeira"
                },
                {
                    "id": 39,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu faço filmes engraçados.",
                    "Eu uso bigode em muitos papéis.",
                    "Eu faço efeitos malucos.",
                    "Eu participo de comédias.",
                    "Eu já tive um canal no YouTube.",
                    "Eu virei ator famoso.",
                    "Eu já fiz o papel de professor atrapalhado.",
                    "Eu gosto de improviso.",
                    "Eu sou brasileiro.",
                    "Eu sou o Carlinhos Maia."
                    ],
                    "resposta": "Carlinhos Maia"
                },
                {
                    "id": 40,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu tenho castelos antigos.",
                    "Eu tenho clima frio.",
                    "Eu produzo uísque famoso.",
                    "Eu tenho lagos enormes.",
                    "Eu fico no Reino Unido.",
                    "Eu tenho o monstro do Lago Ness.",
                    "Eu tenho gaitas de fole.",
                    "Eu tenho muitas montanhas.",
                    "Eu tenho cidades históricas.",
                    "Eu sou a Escócia."
                    ],
                    "resposta": "Escócia"
                },
                {
                    "id": 41,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu aqueço ambientes.",
                    "Eu fico preso na parede.",
                    "Eu uso eletricidade.",
                    "Eu tenho várias potências.",
                    "Eu tenho grades na frente.",
                    "Eu posso queimar se encostar.",
                    "Eu sou muito usado no inverno.",
                    "Eu tiro o frio dos cômodos.",
                    "Eu preciso de segurança no uso.",
                    "Eu sou um aquecedor."
                    ],
                    "resposta": "Aquecedor"
                },
                {
                    "id": 42,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu sou cientista.",
                    "Eu fiz descobertas importantes.",
                    "Eu estudei o espaço e o tempo.",
                    "Eu tenho uma equação famosa.",
                    "Eu tive grande impacto na física.",
                    "Eu nasci na Alemanha.",
                    "Eu viajei pelo mundo.",
                    "Eu recebi um Prêmio Nobel.",
                    "Eu apareço em livros escolares.",
                    "Eu sou Albert Einstein."
                    ],
                    "resposta": "Albert Einstein"
                },
                {
                    "id": 43,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu fico na África.",
                    "Eu tenho animais selvagens.",
                    "Eu tenho savanas enormes.",
                    "Eu tenho reservas naturais.",
                    "Eu recebo muitos turistas.",
                    "Eu tenho uma grande diversidade cultural.",
                    "Eu tenho clima quente.",
                    "Eu tenho desertos e matas.",
                    "Eu tenho paisagens incríveis.",
                    "Eu sou o Quênia."
                    ],
                    "resposta": "Quênia"
                },
                {
                    "id": 44,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu tiro medidas.",
                    "Eu fico enrolado.",
                    "Eu posso ser de plástico ou tecido.",
                    "Eu sou muito usado em reformas.",
                    "Eu tenho números marcados.",
                    "Eu estico quando puxado.",
                    "Eu posso ter até 5 metros.",
                    "Eu sou usado por pedreiros.",
                    "Eu sou usado por costureiras.",
                    "Eu sou uma fita métrica."
                    ],
                    "resposta": "Fita métrica"
                },
                {
                    "id": 45,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu canto música pop.",
                    "Eu comecei jovem.",
                    "Eu virei fenômeno mundial.",
                    "Eu tenho diversas músicas famosas.",
                    "Eu já fiz shows enormes.",
                    "Eu tenho um estilo marcante.",
                    "Eu mudo muito meu visual.",
                    "Eu sou americana.",
                    "Eu sou muito premiada.",
                    "Eu sou a Lady Gaga."
                    ],
                    "resposta": "Lady Gaga"
                },
                {
                    "id": 46,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu sou uma grande cidade.",
                    "Eu tenho muitos carros.",
                    "Eu tenho construções antigas.",
                    "Eu sou muito populosa.",
                    "Eu fico na Ásia.",
                    "Eu tenho templos religiosos.",
                    "Eu tenho mercados vibrantes.",
                    "Eu tenho culinária famosa.",
                    "Eu sou uma capital importante.",
                    "Eu sou Bangkok."
                    ],
                    "resposta": "Bangkok"
                },
                {
                    "id": 47,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu mostro informações na tela.",
                    "Eu fico na mesa.",
                    "Eu funciono com cabo ou HDMI.",
                    "Eu faço parte do computador.",
                    "Eu posso ser grande.",
                    "Eu posso ter alta resolução.",
                    "Eu exibo imagens e vídeos.",
                    "Eu tenho luz interna.",
                    "Eu sou indispensável para PCs.",
                    "Eu sou um monitor."
                    ],
                    "resposta": "Monitor"
                },
                {
                    "id": 48,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu faço humor.",
                    "Eu tenho bordões famosos.",
                    "Eu apareço na televisão brasileira.",
                    "Eu tenho muitos personagens marcantes.",
                    "Eu uso muita maquiagem.",
                    "Eu já fiz novelas.",
                    "Eu faço comédia há décadas.",
                    "Eu tenho um programa com meu nome.",
                    "Eu sou muito conhecido no Brasil.",
                    "Eu sou o Tom Cavalcante."
                    ],
                    "resposta": "Tom Cavalcante"
                },
                {
                    "id": 49,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu fico no sul da Europa.",
                    "Eu tenho praias lindas.",
                    "Eu tenho culinária famosa.",
                    "Eu tenho ilhas turísticas.",
                    "Eu sou ensolarado.",
                    "Eu tenho templos antigos.",
                    "Eu sou culturalmente rico.",
                    "Eu fui uma grande civilização antiga.",
                    "Eu tenho muitas ruínas.",
                    "Eu sou a Grécia."
                    ],
                    "resposta": "Grécia"
                },
                {
                    "id": 50,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu corto alimentos.",
                    "Eu tenho lâmina metálica.",
                    "Eu preciso ser afiado.",
                    "Eu sou muito usado na cozinha.",
                    "Eu tenho cabo para segurar.",
                    "Eu posso ser grande ou pequeno.",
                    "Eu posso ser perigoso.",
                    "Eu fico na gaveta.",
                    "Eu sirvo para preparar refeições.",
                    "Eu sou uma faca."
                    ],
                    "resposta": "Faca"
                },
                {
                    "id": 51,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu faço filmes de aventura.",
                    "Eu sou britânico.",
                    "Eu sou agente secreto na ficção.",
                    "Eu uso terno em muitas cenas.",
                    "Eu trabalho para o MI6 nas histórias.",
                    "Eu tenho vários filmes famosos.",
                    "Eu sou interpretado por vários atores.",
                    "Eu bebo martíni.",
                    "Eu dirijo carros incríveis.",
                    "Eu sou James Bond."
                    ],
                    "resposta": "James Bond"
                },
                {
                    "id": 52,
                    "categoria": "lugar",
                    "dicas": [
                    "Eu sou frio.",
                    "Eu tenho gelo por toda parte.",
                    "Eu sou praticamente desabitado.",
                    "Eu sou branco.",
                    "Eu tenho vida selvagem única.",
                    "Eu tenho bases de pesquisa.",
                    "Eu chego a temperaturas extremas.",
                    "Eu não tenho cidades.",
                    "Eu tenho pinguins.",
                    "Eu sou a Antártida."
                    ],
                    "resposta": "Antártida"
                },
                {
                    "id": 53,
                    "categoria": "objeto",
                    "dicas": [
                    "Eu deixo o ar mais frio.",
                    "Eu fico no teto, janela ou parede.",
                    "Eu uso eletricidade.",
                    "Eu tenho controle remoto.",
                    "Eu tenho filtros internos.",
                    "Eu sou muito usado no verão.",
                    "Eu tiro o calor do ambiente.",
                    "Eu faço barulho leve.",
                    "Eu resfrio o quarto rapidamente.",
                    "Eu sou um ar-condicionado."
                    ],
                    "resposta": "Ar-condicionado"
                },
                {
                    "id": 54,
                    "categoria": "pessoa",
                    "dicas": [
                    "Eu faço filmes engraçados e dramáticos.",
                    "Eu sou ator famoso.",
                    "Eu interpretei um pirata icônico.",
                    "Eu tenho aparência marcante.",
                    "Eu faço personagens excêntricos.",
                    "Eu já ganhei prêmios importantes.",
                    "Eu tenho uma carreira longa.",
                    "Eu trabalho em Hollywood.",
                    "Eu fiz Edward Mãos de Tesoura.",
                    "Eu sou Johnny Depp."
                    ],
                    "resposta": "Johnny Depp"
                },


            ];

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

    iniciarNovaRodada();

    function iniciarNovaRodada() {
        const indice = Math.floor(Math.random() * bancoDePalavras.length);
        cartaAtual = bancoDePalavras[indice];

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
});

window.irPara = function (url) {
    window.location.href = url;
};
