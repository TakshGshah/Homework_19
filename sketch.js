var mario,bg,mariofall;
var mariorun,bgImg,mariofallImg;
var PLAY=1;
var END=0;
var gameState=1;
var ob1,ob2,ob3,ob4,ob5,ob6;
var obstacle,obstaclesGroup;
var invisibleGround; 

function preload(){
	mariorun = loadImage("Mario running.png")
	mariofallImg = loadImage("Mario falling.png")
	bgImg = loadImage("Mario sky.png")
	ob1 = loadImage("ob1.png")
	ob2 = loadImage("ob2.png")
	ob3 = loadImage("ob3.png")
	ob4 = loadImage("ob4.png")
	ob5 = loadImage("ob5.png")
	ob6 = loadImage("ob6.png")
}

function setup() {
	createCanvas(600,600)

	invisibleGround = createSprite(300,276,600,1);
	invisibleGround.depth = 8

	mario = createSprite(20,270)
	mario.addImage(mariorun)
	mario.scale = 0.075
	mario.depth = 8

	bg = createSprite(200,200,600,600)
	bg.addImage("background",bgImg);
	bg.depth = 5
	obstaclesGroup = new Group()
}

function draw() {
	background("bg");

	if(gameState === 1){
		bg.velocityX= -3
		invisibleGround.velocityX= -3
		mario.velocityX = 0

		mario.collide(invisibleGround)

		spawnOb()

		if (bg.x <=0){
			bg.x=199
		}

		if (invisibleGround.x <=0){
			invisibleGround.x=199
		}

		if(obstaclesGroup.isTouching(mario)){
			gameState = END;
		}

		if(keyDown("space") || keyDown("UP_ARROW") || keyDown("w") || touches.length > 0 && mario.y  >= 254.725){
			mario.velocityY = -10
			touches = []
		}

		mario.velocityY = mario.velocityY + 1
	}
	drawSprites()
} 

function spawnOb(){

	if(frameCount % 180 === 0) {
		var obstacle = createSprite(400,277);
		obstacle.setCollider('circle',0,0,190)
		obstacle.debug = true
		obstacle.velocityX = -3;
  
		var opPick2 = Math.round(random(1,6));
		switch(opPick2) {
			case 1: obstacle.addImage(ob1);
					obstacle.setCollider('rectangle',0,0,10,25)
					break;
			case 2: obstacle.addImage(ob2);
					obstacle.setCollider('circle',-20,0,90)
					break;
			case 3: obstacle.addImage(ob3);
					break;
			case 4: obstacle.addImage(ob4);
					obstacle.setCollider('rectangle',0,0,10,100)
					obstacle.y = 177
					break;
			case 5: obstacle.addImage(ob5);
					obstacle.setCollider('circle',-220,50,90)
					break;
			case 6: obstacle.addImage(ob6) ;
					obstacle.velocityX = -5;
					obstacle.setCollider('circle',-20,10,190)
					break;
			default: break;
			}
				
		obstacle.scale = 0.15;
		obstacle.lifetime = 300;
		obstacle.depth = 8;

		obstaclesGroup.add(obstacle);
	}
}
