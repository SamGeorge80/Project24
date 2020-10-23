
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,bin;
function preload()
{

}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;



	paper = new Paper(200,450,40);
	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);

	bin = new DustBin(1200,450,100,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


