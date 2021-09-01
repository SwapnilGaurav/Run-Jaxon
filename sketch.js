
  var runner,runnerImg;
  var path,pathImg;
  var left_boundary;
  var right_boundary;
  var coin,coinImg;
 var coinScore = 0;

 function preload(){
  //pre-load images

  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  //path.y = path.height/30;

  runner = createSprite(180,340,30,30);
  runner.addAnimation("running", runnerImg );
  runner.scale = 0.05;

  coin = createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3;
  coin = createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3;
  coin = createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3;

  left_boundary = createSprite(0,300,100,600);
  right_boundary = createSprite(390,300,80,600);
  left_boundary.visible = false;
  right_boundary.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  textSize(15);
  text('coin Score',1,200);
  textSize(15);
  text('0',20,230);
  
  path.velocityY = 5;
  runner.x = World.mouseX ;
  if(path.y>400) {
    path.y = height/2 ;
    if(runner.isTouching(coin)) {
      coinScore = coinScore+1;
    }

  }
   runner.collide(left_boundary);
   runner.collide(right_boundary);
   
   //runner.collide(edges[3]);
   
    drawSprites()

}
