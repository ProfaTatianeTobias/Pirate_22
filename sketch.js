//namespace para os módulos da Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variáveis
var engine, world;
var torre, torreImg;
var fundoImg, solo;

//pré-carregamento das imagens
function preload(){
  fundoImg = loadImage("imagens/background.gif");
  torreImg = loadImage("imagens/tower.png");
}

//configurações iniciais
function setup() {
  //tela do jogo
  createCanvas(1200,600);

  //mecanismo de física e mundo
  engine = Engine.create();
  world = engine.world;

  //solo
  var options = {
    isStatic: true,
  }
  solo = Bodies.rectangle(0,height-1,width,1,options);
  World.add(world,solo);
  
  //torre
  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);


}

function draw() 
{
  //fundo
  //background("lightgray");
  image(fundoImg,0,0,1200,600);
  
  //mostrando a torre
  push();
  imageMode(CENTER);
  fill("green");
  image(torreImg,torre.position.x, torre.position.y,160,310);
  pop();

  //mostrando o solo
  rect(solo.position.x, solo.position.y,width,1);
  
}

