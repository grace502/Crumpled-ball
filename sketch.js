
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400, 260, 900, 20);
Dustbin1=new Dustbin(650, 230, 200, 20);
Dustbin2=new Dustbin(750, 190, 20, 100);
Dustbin3=new Dustbin(550, 190, 20, 100);
paper1=new Paper(50,150,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  paper1.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:7,y:-7}) // adding force to the paper
	}
}


