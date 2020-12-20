var helicopterIMG, helicopterSprite, packageSprite,packageIMG,paddle1,paddle2,paddle3;
var packageBody,ground
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
	
	paddle1 = createSprite(395,650,120,20);
	paddle1.shapeColor = "blue";
	paddle2 = createSprite(345,635,20,50);
	paddle2.shapeColor = "blue";
	paddle3 = createSprite(465,635,20,50);
	paddle3.shapeColor = "blue";

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	package = Bodies.rectangle(width/2,200,10,10,{istatic:false});
	World.add(world,package);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  packageSprite.collide(paddle1);
  
 
  if(keyDown(DOWN_ARROW)){
	  packageSprite.velocityY = 5.5;
}
  
  
  drawSprites();
  
 

}




