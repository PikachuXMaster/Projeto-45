var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;         

var database, gameState;

var form, player, playerCount;

var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; //logo logo vamos tirar alguns


var skibidi_dop_Gif, skibidi_musica;
var naruto, narutoImagem;
var Goku, Goku_Imagem;
var Speed_Boost, Speed_Boost_Imagem;

//inimigos :)
var Vegeta, Vegeta_Imagem;
var Sasuke, Sasuke_Imagem;
var Ki, Ki_Imagem;
var Airton_Sena, Airton_Sena_Imagem;

var protags = []; //essa será matriz :)                  

var blastImage;    
var currentLife = 0;             

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  blastImage = loadImage("./assets/blast.png"); 

  //carregando o skibidi_dop
  skibidi_dop_Gif = loadAnimation("./assets/skibidi.gif");

  //carregando os protags
  Goku_Imagem = loadImage("./assets/Goku.webp");
  narutoImagem = loadImage("./assets/Naruto.webp");

  //outros personagens
  Ki_Imagem = loadImage("./assets/Ki.png");
  Vegeta_Imagem = loadImage("./assets/Vegeta.webp");
  Sasuke_Imagem = loadImage("./assets/Sasuke.png");
  Airton_Sena_Imagem = loadImage("./assets/AyrtonSenna.webp");


 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
