let carta1 = {
  nome: "Tyrion Lannister",
  foto:
    "https://rollingstone.uol.com.br/media/_versions/tyrion_lannister_game_of_thrones_reproducao_widelg.jpg",
  atributos: {
    força: 50,
    destreza: 40,
    magia: 10,
    inteligência: 80
  }
};

let carta2 = {
  nome: "Daynerys Targaryen",
  foto:
    "https://s2.glbimg.com/cHJm7LsaL21RTnlNkoBuqCE7qP4=/e.glbimg.com/og/ed/f/original/2019/02/21/game-of-thrones-daenerys_targaryen_temporada_6.jpg",
  atributos: {
    força: 30,
    destreza: 50,
    magia: 60,
    inteligência: 70
  }
};

let carta3 = {
  nome: "Jon Snow ",
  foto:
    "http://s2.glbimg.com/9VoznmjSgOKLaYkQQqvcl9rE0dI=/e.glbimg.com/og/ed/f/original/2016/05/31/jon.jpg",
  atributos: {
    força: 70,
    destreza: 60,
    magia: 10,
    inteligência: 40
  }
};

let carta4 = {
  nome: "Arya Stark",
  foto:
    "https://ik.imagekit.io/meugamer/wp-content/uploads/2018/11/gameofthrones_hbo_ccxp_meugamercom.jpg",
  atributos: {
    força: 50,
    destreza: 80,
    magia: 10,
    inteligência: 60
  }
};

let carta5 = {
  nome: "Bran Stark",
  foto:
    "https://s2.glbimg.com/e5EFlIxbBC4-l94oD0VNBvc8PDE=/e.glbimg.com/og/ed/f/original/2019/04/12/bran_stark1.jpg",
  atributos: {
    força: 40,
    destreza: 10,
    magia: 80,
    inteligência: 60
  }
};

let carta6 = {
  nome: "Sandor Clegane",
  foto:
    "http://s2.glbimg.com/bWwktacoZqw89bEaQzTSu9l6QzY=/e.glbimg.com/og/ed/f/original/2015/08/24/sandor-clegane-cao-de-caca.jpg",
  atributos: {
    força: 80,
    destreza: 50,
    magia: 10,
    inteligência: 50
  }
};

let carta7 = {
  nome: "Samwell Tarly",
  foto:
    "https://poltronanerd.com.br/wp-content/uploads/2017/07/samwell-tarly-5-980x551-xlarge_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg",
  atributos: {
    força: 30,
    destreza: 50,
    magia: 50,
    inteligência: 80
  }
};

let carta8 = {
  nome: "Melisandre",
  foto:
    "https://rollingstone.uol.com.br/media/_versions/melisandre_-_reproducao_-_hbo_widelg.jpg",
  atributos: {
    força: 30,
    destreza: 50,
    magia: 70,
    inteligência: 70
  }
};

let carta9 = {
  nome: "Bronn",
  foto:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVyscAAU_tVK_yC4LE8Ub35eAaJJvddD0Ug&usqp=CAU.jpg",
  atributos: {
    força: 60,
    destreza: 80,
    magia: 10,
    inteligência: 50
  }
};

let carta10 = {
  nome: "Verme Cinzento",
  foto:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/07/verme-cinzento.jpg",
  atributos: {
    força: 70,
    destreza: 80,
    magia: 10,
    inteligência: 40
  }
};

let baralho = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
let meuBaralho = [];

function distribuiCartas() {
  for (let minhasCartas = 0; minhasCartas < 5; minhasCartas++) {
    let indiceAleatorio = Math.floor(Math.random() * baralho.length);

    if (
      indiceAleatorio >= baralho.length &&
      indiceAleatorio >= baralho.length
    ) {
      indiceAleatorio = baralho.length - 1;
    }

    meuBaralho.push(baralho.splice(indiceAleatorio, 1)[0]);
  }
}

distribuiCartas();

let cartaMaquina;
let cartaJogador;
let minhaCarta = document.querySelector("#cartaEscolhida");
let campoJogador = document.querySelector(".cartaJogador");
let campoMaquina = document.querySelector(".cartaMaquina");
let pontos = document.querySelector(".pontuacao");
let versus = document.querySelector(".versus");

pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`;

function sortearCarta() {
  numeroCartaMaquina = Math.floor(Math.random() * baralho.length);
  numeroCartaJogador = Math.floor(Math.random() * meuBaralho.length);

  if (
    numeroCartaMaquina >= baralho.length &&
    numeroCartaJogador >= meuBaralho.length
  ) {
    numeroCartaMaquina = baralho.length - 1;
  }
  cartaMaquina = baralho[numeroCartaMaquina];

  cartaJogador = meuBaralho[numeroCartaJogador];
  document.getElementById("campoBatalha").style.display = "none";
  document.getElementById("btnSortear").style.display = "none";
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("escolhaAtributo").style.display = "block";

  minhaCarta.style.display = "block";

  minhaCarta.innerHTML = `
        <div class='carta'>
        <div class="nomeCarta">${cartaJogador.nome}</div>
        <img class="imgCarta" src="${cartaJogador.foto}" alt="">             
        <div class="atributosCarta">
        <div class="bg1"><span>Força</span><span>${cartaJogador.atributos.força}</span></div>
        <div class="bg2"><span>Magia</span><span>${cartaJogador.atributos.magia}</span></div>
        <div class="bg1"><span>Destreza</span><span>${cartaJogador.atributos.destreza}</span></div>
        <div class="bg2"><span>Inteligência</span><span>${cartaJogador.atributos.inteligência}</span></div>
        </div></div>`;
  exibirOpcoes();
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<div><input  type='radio' name='atributo' value='${atributo}'>${atributo}</div>`;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  let radioAtributo = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

let resultado = document.querySelector("#resultado");

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  minhaCarta.innerHTML = "";
  campoJogador.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaJogador.nome}</div>
    <img class="imgCarta" src="${cartaJogador.foto}" alt="">             
    <div class="atributosCarta">
    <div class="bg1"><span>Força</span><span>${cartaJogador.atributos.força}</span></div>
    <div class="bg2"><span>Magia</span><span>${cartaJogador.atributos.magia}</span></div>
    <div class="bg1"><span>Destreza</span><span>${cartaJogador.atributos.destreza}</span></div>
    <div class="bg2"><span>Inteligência</span><span>${cartaJogador.atributos.inteligência}</span></div>
    </div></div>`;

  versus.innerHTML = `<img class="img-x" src="https://i.imgur.com/zRf2J4T.png" alt="">`;

  campoMaquina.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaMaquina.nome}</div>
    <img class="imgCarta" src="${cartaMaquina.foto}" alt="">             
    <div class="atributosCarta">
    <div class="bg1"><span>Força</span><span>${cartaMaquina.atributos.força}</span></div>
    <div class="bg2"><span>Magia</span><span>${cartaMaquina.atributos.magia}</span></div>
    <div class="bg1"><span>Destreza</span><span>${cartaMaquina.atributos.destreza}</span></div>
    <div class="bg2"><span>Inteligência</span><span>${cartaMaquina.atributos.inteligência}</span></div>
    </div></div>`;

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    resultado.innerHTML = "Você ganhou!";
    meuBaralho.push;
    meuBaralho.push(baralho.splice(numeroCartaMaquina, 1)[0]);
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    resultado.innerHTML = "Você perdeu!";
    baralho.push(meuBaralho.splice(numeroCartaJogador, 1)[0]);
  } else {
    resultado.innerHTML = "Empate";
  }

  document.getElementById("campoBatalha").style.display = "flex";
  document.getElementById("escolhaAtributo").style.display = "none";
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovoJogo").disabled = false;
  pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`;
}

function novoJogo() {
  if (baralho.length == 0) {
    resultado.innerHTML = `As cartas do seu oponente acabaram, e você ganhou o jogo.<br> Parabéns!`;
    baralho = meuBaralho;
    escodeButton();
  } else if (meuBaralho.length == 0) {
    resultado.innerHTML = `As cartas acabaram, e você perdeu o jogo.<br> Boa sorte na próxima vez`;
    escodeButton();
  } else {
    document.getElementById("btnNovoJogo").disabled = true;
    minhaCarta.style.display = "none";
    document.getElementById("escolhaAtributo").style.display = "none";
    campoJogador.innerHTML = "";
    versus.innerHTML = "";
    campoMaquina.innerHTML = "";
    resultado.innerHTML = "";
    sortearCarta();
    pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`;
  }
}

function reiniciarJogo() {
  meuBaralho = [];
  distribuiCartas();
  pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`;
  resultado.innerHTML = "";
  document.getElementById("btnNovoJogo").disabled = true;
  mostraButton();
}

function escodeButton() {
  document.getElementById("reiniciarJogo").style.display = "inline-block";
  document.getElementById("btnJogar").style.display = "none";
  document.getElementById("btnNovoJogo").style.display = "none";
  campoJogador.innerHTML = "";
  versus.innerHTML = "";
  campoMaquina.innerHTML = "";
}

function mostraButton() {
  document.getElementById("reiniciarJogo").style.display = "none";
  document.getElementById("btnJogar").style.display = "inline-block";
  document.getElementById("btnNovoJogo").style.display = "inline-block";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnSortear").style.display = "inline-block";
  document.getElementById("reiniciarJogo").style.display = "none";
}
