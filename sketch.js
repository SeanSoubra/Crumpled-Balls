
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var paper, dustbin1, dustbin2, dustbin3
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 800)
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper = new Paper(100, 550, 20, 20, PI/2)
	ground = new Ground(400, 700, 800, 15)
	dustbin1 = new Dustbin(625, 682, 225, 20)
	dustbin2 = new Dustbin(525, 610, 25, 125)
	dustbin3 = new Dustbin(725, 610, 25, 125)
	
	 


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60})
	}
}

