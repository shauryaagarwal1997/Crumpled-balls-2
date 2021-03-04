const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(80,580,20);
	box1=new Dustbin(530,580,150,20);
	box2=new Dustbin(510,530,20,70);
	box3=new Dustbin(670,530,20,70);
	ground=new Ground(0,700,800,15);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  keyPressed();

 paper.display();
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-80})
	}
}