const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,plinkos,test,arr=[],arr2=[],arr3=[],wall1,wall2,chance=3;
var s1=500,s2=100,s3=200;
var score=0,gameState="start";
function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  test=new Ground(width/2,height-10,width,20);
  wall1=new Division(0,350,10,700);
  wall2=new Division(500,350,10,700);
for(var i=0;i<13;i++){
  arr.push(new Plinko((i+1)*50,50,10,10));
}
for(var i=0;i<15;i++){
  arr.push(new Plinko(i*50+15,150,10,10));
}
for(var i=0;i<13;i++){
  arr.push(new Plinko((i+1)*50,250,10,10));
}
for(var i=0;i<15;i++){
  arr.push(new Plinko(i*50+15,350,10,10));
}

for(i=0;i<width+10;i+=70){
  arr3.push(new Division(i,height-130,10,260));2
}
}

function draw() {
  background(0);
  test.display();
  textSize(23);
  fill("#fff");
  Engine.update(engine);
  for(var i=0;i<arr.length;i++){
    arr[i].display();
  }
  for(var i=0;i<arr2.length;i++){
    arr2[i].display();
  }
  for(var i=0;i<arr3.length;i++){
    arr3[i].display();
  }
  for(var i=0;i<4;i++){

    text(s1,i*70+15,470);
  }
  for(var i=0;i<3;i++){
    text(s2,i*70+295,470);
  }
  for(var i=0;i<3;i++){
    text(s3,i*70+505,470);
  }
  drawSprites();
  // mousePressed();

  if(mouseWentDown("left") && (gameState=="start")){
    arr2.push(new Partical(mouseX,40,10,10));
    gameState="play";
    chance--;
  }
  text("Score : " + score,20,30);
  if(gameState=="play"){
    console.log("test");
    if(arr2[arr2.length-1].body.position.y>600){
      gameState="start";
      if(arr2[arr2.length-1].body.position.x<280){
    if(chance==0){ gameState="End";}

        score+=500;
      }else if(arr2[arr2.length-1].body.position.x<490){
    if(chance==0){ gameState="End";}

        score+=100;
      }else if(arr2[arr2.length-1].body.position.x<700){
    if(chance==0){ gameState="End";}

        score+=200;
      }else{
        score+=0;
      }
      
      // arr2=[];
    }
  }

  if(gameState=="End"){
    text("Game Over", 300,320);
    if(keyCode>0){
      gameState="start";
      chance=3;
      arr2=[];
    }
  }
}
