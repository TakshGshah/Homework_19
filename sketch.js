var mario,bg;
var mariorun,bgImg;
var PLAY=1;
var END=0;
var gameState=1;
var ob1,ob2,ob3,ob4,ob5,ob6;
var obstaclesGroup;
var obstacle;

function preload(){
	mariorun = loadImage("Mario running.png")
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

	mario = createSprite(20,277)
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

		bg.velocityX= -5
		mario.velocityX = 0
		bg.setCollider('circle',20,10,50)
		bg.debug = true
		spawnOb2()
		if (bg.x <=0){

			bg.x=199

		}
	}
	drawSprites()


} 

function spawnOb() {
	if(frameCount%60===0){
	console.log("functoin called")
	obstacle = createSprite(500,277);
	//obstacle.setCollider('circle',0,0,50)
	//obstacle.debug = true
	obstacle.scale = 0.2;
  	//obstacle.lifetime = 800;
  obstacle.depth = 7;
  //obstaclesGroup.add(obstacle);

	

	var opPick = Math.round(random(1,6));
    switch(opPick) {
      case 1: obstacle.addImage(ob1);
            break;
      case 2: obstacle.addImage(ob2);
            break;
	case 3: obstacle.addImage(ob3);
			break;
	case 4: obstacle.addImage(ob4);
			break;
	case 5: obstacle.addImage(ob5);
			break;
	case 6: obstacle.addImage(ob6) 
			obstacle.velocityX = -2;
			break;
      default: break;
		}
	}
}
function spawnOb2(){

if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,height-95,20,30);
    obstacle.setCollider('circle',0,0,50)
     obstacle.debug = true
  
    obstacle.velocityX = -2;
    
    //generate random obstacles
    var opPick2 = Math.round(random(1,6));
    switch(opPick2) {
      case 1: obstacle.addImage(ob1);
            break;
      case 2: obstacle.addImage(ob2);
            break;
	case 3: obstacle.addImage(ob3);
			break;
	case 4: obstacle.addImage(ob4);
			break;
	case 5: obstacle.addImage(ob5);
			break;
	case 6: obstacle.addImage(ob6) 
			obstacle.velocityX = -2;
			break;
      default: break;
		}
	
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //obstacle.depth = trex.depth;
    //trex.depth +=1;
   // add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}