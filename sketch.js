const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var bow;
var arrow;
var mango1,mango2,mango3;
var backgroundImg;


var score=0;

function preload(){
backgroundImg= loadImage("images/download.jpg");
}

function setup() {
  createCanvas(1600,789);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,789,1600,14);
  arrow=new Arrow(235,377,200,100);
  bow = new Bow(arrow.body,{x:235,y:377});
  pig1=new Pig(1450,390,100,100);
  pig2=new Pig(1325,240,100,100);
  pig3=new Pig(1325,540,100,100);
  pig4=new Pig(1200,90,100,100);
  pig5=new Pig(1200,690,100,100);
 
  
  log1=new Log(1450,410,100,20);
  log2=new Log(1325,260,100,20);
  log3=new Log(1325,560,100,20);
  log4=new Log(1200,110,100,20);
  log5=new Log(1200,710,100,20);
  
 }

function draw() {
  background(backgroundImg);
  Engine.update(engine);


  noStroke();
  textSize(35);
  fill("yellow");
  text("Score  " + score, width-300, 50);
  text("Destroy the pigs",width-1000,100);
  textSize(15);
  text("(Press space to bring the arrow back)",width-1000,125);
 
  ground.display();  
  arrow.display();
  bow.display();
  pig1.display();
  pig1.score();
  pig2.display();
  pig2.score();
  pig3.display();
  pig3.score();
  pig4.display();
  pig4.score();
  pig5.display();
  pig5.score();
 
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
 
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  bow.fly();
 }
 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(arrow.body,{x:235,y:377});
        bow.attach(arrow.body);
    }
}





