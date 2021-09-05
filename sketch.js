const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,leftWall,rightWall;
var chain,jointLink,jointPoint;
//var stones=[]
var stone;

function setup() {
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(300,550,600,20);
  leftWall = new Base(10,300,10,200);
  rightWall = new Base(590,300,10,200);
  chain = new Bridge(17,{x:590,y:300});
  Matter.Composite.add(chain.body, leftWall);
  jointLink = new link(chain,leftWall);
 stone = new Stone(300,300,20); 


}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  leftWall.show();
  rightWall.show();
  chain.show();
 stone.show();
//  for(var i =0;i<=8;i++){
//   var x = random(width/2-200,width/2+300)
//   var y = random(-10,140);
//   var stone= new Stone(x ,y,80);
//   stones.push(stone);
// }

}
