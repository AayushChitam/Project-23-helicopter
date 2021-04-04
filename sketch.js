var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Rectangle1,Rectangle2,Rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Rectangle1=createSprite(275, 610, 20, 80);
	Rectangle1.shapeColor=color("Red")
	Rectangle2=createSprite(365, 650, 200, 20);
	Rectangle2.shapeColor=color("Red")
    Rectangle3=createSprite(455, 610, 20, 80);
	Rectangle3.shapeColor=color("Red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
 



 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y+10
    
  }
  drawSprites()
}

