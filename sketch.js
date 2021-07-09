var score=0

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, bg;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  bg = createSprite(0,0,600,600);
  bg.addImage(backgroundImage);
  bg.scale = 3.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
}
  

  


 function draw() {
   
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
 
  //moving bow
  bow.y = World.mouseY
   
  
  
  if(keyDown("space")){
    arrow()
  } 
   if(frameCount%80===0){
     
  
   var r= Math.round(random(1,4))
   switch(r) {
      case 1: Redb()
              break;
      case 2: Greenb()
              break;
      case 3: Blueb()
              break;
      case 4:Pinkb
      break;
   }
   }
   drawSprites();
 textSize(20)
 text("score "+score,200,100)
}

 function arrow(){
   
   var arrow=createSprite(360,100,5,10)
   arrow.addImage(arrowImage)
   arrow.velocityX= -5
   arrow.scale=0.5
   arrow.y=bow.y
   arrow.lifetime=150
    }
function Redb(){
  var red=createSprite(0,200,10,10)
  red.addImage(red_balloonImage)
  red.velocityX=4
  red.scale=0.1
  red.y=random(20,500)
  red.lifetime=150
}
function Greenb(){
  var green=createSprite(0,200,10,10)
  green.addImage(green_balloonImage)
  green.velocityX=4
  green.scale=0.1
  green.y=random(20,500)
  green.lifetime=150
}
function Blueb(){
  var blue=createSprite(0,200,10,10)
  blue.addImage(blue_balloonImage)
  blue.velocityX=4
  blue.scale=0.1
  blue.y=random(20,500)
  blue.lifetime=150
}

function Pinkb(){
  var pink=createSprite(0,200,10,10)
  pink.addImage(pink_balloonImage)
  pink.velocityX=4
  pink.scale=0.1
  pink.y=random(20,500)
  pink.lifetime=150
}
