var helicopterIMG, helicopterSprite, packageSprite,packageIMG,dusbinImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	dusbinImg=loadImage("dusbin.png")

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

	box1 = createSprite(370, 535, 50,100);
	box1.addImage(dusbinImg)
	box1.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(30)
  stroke(300)
  fill(0,0,255)
  text("press space to pause the helicopterSprite", 150, 100)  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	 }
	if (keyCode === LEFT_ARROW) {
	  Matter.Body.translate(packageBody,{x:-20,y:0});
	  helicopterSprite.x=helicopterSprite.x-20;
	  packageSprite.x=packageSprite.x-20;
	 }
	if (keyCode === RIGHT_ARROW) {
	  Matter.Body.translate(packageBody,{x:+20,y:0});
	  helicopterSprite.x=helicopterSprite.x+20;
	  packageSprite.x=packageSprite.x+20;
	 }
  }