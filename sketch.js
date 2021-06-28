var path,mainCyclist;
var playerimage,player,playerimage1,playerimage2,playerimage3playerimage4;
var pathImg,mainRacerImg1,mainRacerImg2;
var bgImage,bg,playImage,playImage1,playImage2,level2bg;
var playbutton,playbuttonimg;
var box,boximg;
var level_button,level_buttonimage;
var level_button1,level_buttonimage1;
var notice_board,notice_boardimage;
var starttime;
var gameOverImg,cycleBell;
var gold,goldImage,goldGroup;
var gameState = "start";
var score=0,scorec,scoreimage;
var gameOver, restart;
var edges;
var invisiblespace;
var enemy1,enemyimage1,enemy2,enemyimage2;
var bow,arrow,bowimage,arrowimage;
var enemyGroup1,enemyGroup2,arrowGroup;
var count=0;
var mat,matimage,endimage;
var home,homeimage;

function preload(){
  
    pathImg = loadImage("Road.png");
    playerimage = loadAnimation("players__2_-removebg-preview.png");
    playerimage1 = loadAnimation("players__12_-removebg-preview.png");
   playerimage2 = loadAnimation("players__6_-removebg-preview.png");
     playerimage3 = loadAnimation("players__10_-removebg-preview.png");
       playerimage4 = loadAnimation("players__13_-removebg-preview.png");

    goldImage = loadImage("gold-coin-unscreen.gif");
    endimage = loadImage("endbg.jpeg");
    scoreimage = loadImage("score-removebg-preview (1).png");
    notice_boardimage = loadImage("notice_board-removebg-preview.png");
    cycleBell = loadSound("bell.mp3");
    gameOverImg = loadAnimation("completed.png");
    gameOverImg1 = loadAnimation("gameOver.png");
    bgImage = loadImage("bg.jpg");
    enemyimage1 = loadImage("enemy.gif");
    enemyimage2 = loadImage("enemy1-unscreen.gif");
    playbuttonimg = loadImage("play_button.png");
    boximg = loadImage("box-unscreen.gif");
    playImage = loadImage("play_bg.jpg");
    level2bg = loadImage("level2bg.jpg");
    bowimage = loadImage("bow0.png");
    arrowimage = loadImage("arrow0.png");
    matimage = loadImage("mat-removebg-preview.png");
    homeimage = loadImage("home__2_-removebg-preview.png");
    level_buttonimage = loadImage("level_button-removebg-preview.png");
    level_buttonimage1=loadImage("start-removebg-preview-removebg-preview.png");
}



function setup(){
  
createCanvas(750,570);
// Moving background

bg=createSprite(0,0,750,570);
bg.addImage(playImage);
bg.scale = 5
bg.visible = false;  

playbutton=createSprite(350,400);
playbutton.addImage(playbuttonimg);
playbutton.scale = 0.8;  
playbutton.visible = false;  

box=createSprite(350,100);
box.addImage(boximg);
box.scale = 1.3;    
box.visible = false;  

player=createSprite(70,360);
player.addAnimation("playerstanding",playerimage);
player.addAnimation("playerjump",playerimage1);
player.addAnimation("playerkick",playerimage2);
player.addAnimation("playerwin",playerimage3);
player.addAnimation("playerlose",playerimage4);
player.scale = 0.7;    
player.visible = false;    

level_button=createSprite(370,100);
level_button.addImage(level_buttonimage);
level_button.scale = 0.7;    
level_button.visible = false; 
 
level_button1=createSprite(370,250);
level_button1.addImage(level_buttonimage1);
level_button1.scale = 1.2;    
level_button1.visible = false; 
  
notice_board=createSprite(600,400);
notice_board.addImage(notice_boardimage);
notice_board.scale = 0.6;    
notice_board.visible = false; 
  
  
gameOver = createSprite(400,170);
gameOver.addAnimation("complete",gameOverImg);
gameOver.addAnimation("pause",gameOverImg1);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
edges = createEdgeSprites();
invisiblespace=createSprite(300,480,750,170);
invisiblespace.visible = false;  

bow = createSprite(player.x+10,220,20,50);
bow.addImage(bowimage); 
bow.scale = 1.2;  
bow.visible = false;  

mat = createSprite(630,180,20,50);
mat.addImage(matimage); 
mat.scale = 0.5;  
mat.visible = false;   
 
home = createSprite(120,30,20,50);
home.addImage(homeimage); 
home.scale = 0.5;  
home.visible = false;
  
scorec = createSprite(370,30,20,50);
scorec.addImage(scoreimage); 
scorec.scale = 0.3;  
//scorec.visible = false;
  
goldGroup = new Group();
enemyGroup2 = new Group();
enemyGroup1 = new Group();
arrowGroup = new Group();

 // player.debug = true;
  player.setCollider("rectangle",0,0,20,50);
}

function draw() {
  
 if(mousePressedOver(home))
        {
          gameState="start";
          enemyGroup1.destroyEach();
          enemyGroup2.destroyEach();
          goldGroup.destroyEach();
          bow.visible = false;
          notice_board.visible = false;
           level_button.visible = false; 
          level_button1.visible = false; 
          player.visible = false; 
          home.visible = false; 


}

    if (gameState==="start")
{
            background(bgImage);

}
 else if (gameState==="play")
{
            background(playImage);

}  
 else if (gameState==="level1")
{
            background(playImage);

}
   else if (gameState==="level2-test")
{
            background(playImage);

}
   else if (gameState==="level2")
{
            background(level2bg);

} 
     else if (gameState==="end")
{
            background(endimage);

}
      else if (gameState==="pause")
{
            background(endimage);

} 
  player.collide(invisiblespace);
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ score,330,35);
     // console.log(gameState)

  
  if (gameState==="start")
    {
      
        playbutton.visible = true;  
        box.visible = true;  
      notice_board.visible = false;


      if(mousePressedOver(playbutton))
        {
          gameState="play";
}
    }
  
  else if(gameState==="play"){
    playbutton.visible = false;  
        box.visible = false;
          notice_board.visible = false;
            player.visible = true;
    home.visible = true;
    textSize(32)
    textStyle(BOLDITALIC)
    text("Level 1", 320, 110)
  level_button.visible = true; 
  level_button1.visible = true; 
      player.changeAnimation("playerstanding",playerimage);
     
     player.x = 70;
  player.y = 365; 
    
     if(mousePressedOver(level_button1))
        {
                   gameState="level1";
               
       }
 
    
}
  else if(gameState ==="level1")
    {
      playbutton.visible = false;  
      box.visible = false;
      level_button.visible = false; 
      level_button1.visible = false;
      notice_board.visible = true;
      fill("black")
      text("* Press space to jump",500,350);
      text("* Use mouse to move ",500,370)
      text("left/right",520,390)
      creategold();
       if(keyDown("space")&&player.y>=150) {
        player.velocityY = -10;
        }
      player.velocityY = player.velocityY + 0.8;
      player.x = World.mouseX;
      player.changeAnimation("playerjump",playerimage1);
      
    
      
for (var i = 0; i < goldGroup.length; i++) {                    if(goldGroup.get(i).isTouching(player)) {
        goldGroup.get(i).destroy();
        score = score +10;
        if(score === 20)
        {
        gameState = "level2-test";
        notice_board.destroy();
        goldGroup.destroyEach();}
                          } 
                      }
      
      
      
}
  
  else if (gameState === "level2-test")
    {
      notice_board.destroy();
      playbutton.visible = false;  
      box.visible = false;
      notice_board.y = 100;
      level_button.visible = true; 
      level_button1.visible = true;
      player.changeAnimation("playerstanding",playerimage);
      player.x = 70;
      player.y = 365; 

    textSize(32)
    textStyle(BOLDITALIC)
    text("Level 2", 320, 110)

     
      
        if(mousePressedOver(level_button1))
        {
                   gameState="level2";
               
       

    }
      
    }
  else if (gameState === "level2")
    {
      playbutton.visible = false;  
      box.visible = false;
      level_button.visible = false; 
      level_button1.visible = false;
      notice_board.visible = false;
      bow.visible = true;  
      mat.visible = true;   

      player.changeAnimation("playerstanding",playerimage);
     var select_enemy = Math.round(random(1,4));
  
    if (World.frameCount % 80 == 0) {
    if (select_enemy == 1) {
      enemies1();
    } else if (select_enemy == 2) {
      enemies2();
    } else if (select_enemy == 3) {
      enemies1();
    } else {
      enemies1();
    }
  
  }
          bow.y = player.y+30
                bow.x = player.x
 textSize(20)
      fill("black")
    textStyle(BOLDITALIC)
    text("* Press space to", 560, 130)
    text("jump", 570, 150)
    text("* Press right-", 560, 200)
    text("arrow to shoot", 570, 220)
    text("* Get 200 points", 560, 250)

if (keyDown("right_arrow")) {
    createArrow();
  //count++;
  
  if(score === 200 || score >200)
    {
      gameState =  "end" 
     

    }
  }
    
   if(keyDown("space")&&player.y>=150) {
        player.velocityY = -10;
        }
      player.velocityY = player.velocityY + 0.8;
      player.x = World.mouseX;
      player.changeAnimation("playerkick",playerimage2);
      
      for (var j = 0; j < enemyGroup1.length; j++) {                    if(enemyGroup1.get(j).isTouching(arrowGroup))              {
        enemyGroup1.get(j).destroy();
        arrowGroup.destroyEach();
        score = score +20;
                      }     
          }
      
      for (var j = 0; j < enemyGroup2.length; j++) {                    if(enemyGroup2.get(j).isTouching(arrowGroup))              {
        enemyGroup2.get(j).destroy();
        arrowGroup.destroyEach();
        score = score +40;
                      }     
          }
           
        if(enemyGroup1.isTouching(player)||enemyGroup2.isTouching(player)){
  enemyGroup1.destroyEach();
  enemyGroup2.destroyEach();
  arrowGroup.destroyEach();
 gameState = "pause";
}

  
      }
  
  else if (gameState === "pause") {
     gameOver.visible = true;
    gameOver.changeAnimation("pause",gameOverImg1);

    textSize(22);
    fill("black");
    text("Press Up Arrow to Restart the game!", 200,260);
   arrowGroup.destroyEach();
      enemyGroup1.destroyEach();
      enemyGroup2.destroyEach();
      mat.visible = false;
      bow.visible = false;
player.changeAnimation("playerlose",playerimage4);

     player.x = 70;
  player.y = 365; 
    
    if(keyDown("UP_ARROW")) {
      reset();
    }
  }
  else if (gameState === "end") {
    gameOver.visible = true;
  gameOver.changeAnimation("complete",gameOverImg);
    textSize(22);
    fill("black");
    text("Press Up Arrow to Restart the game!", 200,260);
   arrowGroup.destroyEach();
      enemyGroup1.destroyEach();
      enemyGroup2.destroyEach();
      mat.visible = false;
      bow.visible = false;
player.changeAnimation("playerwin",playerimage3);

     player.x = 100;
  player.y = 365; 
    
    if(keyDown("UP_ARROW")) {
      reset();
    }
  }
}



function reset(){
  gameState = "start";
  gameOver.visible = false;


  score = 0;
}

function creategold() {
  if (World.frameCount % 30 == 0) {
  gold = createSprite(Math.round(random(50, 600),40, 10, 10));
  gold.addImage(goldImage);
  gold.scale=0.5;
  gold.velocityY = 2;
  gold.lifetime = 220;
  goldGroup.add(gold);
  }
}

function enemies1() {
  enemy1 = createSprite(600,Math.round(random(50, 370)), 10, 10);
  enemy1.addImage(enemyimage1);
  enemy1.velocityX = -3;
  enemy1.lifetime = 200;
  enemy1.scale =0.2
  enemyGroup1.add(enemy1);
}
function enemies2() {
  enemy2 = createSprite(600,Math.round(random(50, 370)), 10, 10);
  enemy2.addImage(enemyimage2);
  enemy2.velocityX = -3;
  enemy2.lifetime = 200;
  enemy2.scale =0.4
  enemyGroup2.add(enemy2);
}

 function createArrow() {
  var arrow= createSprite(50, 100, 60, 10);
  arrow.addImage(arrowimage);
  arrow.y=bow.y;
  arrow.x=bow.x;
  arrow.velocityX = 4;
  arrow.lifetime = 580;
  arrow.scale = 0.3;
   arrowGroup.add(arrow);
  return arrow;
   
}