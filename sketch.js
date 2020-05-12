var planet,planetimage;
var neptune,nepimg;
var mars,marsimg;
var jup,jupimg;
var sat,satimg;
var tri;
var star;
var w=window.innerWidth;
var h=window.innerHeight;
var a,b;
var px,py,pr;
var mr;
var jr;
var wi,hi;
var ok,oh,oz;
ok=oz;
function preload() {
  planetimage=loadImage("earth.png");
  marsimg=loadImage("mars.png");
  jupimg=loadImage("jupiter.png");
  satimg=loadImage("saturn.png");
  nepimg=loadImage("neptune.png");
  sunimg=loadImage("sun.png");
}
function setup() {
  createCanvas(w,h);
  sun=createSprite(w/2, h/2, 50, 50);
  wi=sun.width;
  hi=sun.height;
  sun.width=wi;
  sun.height=hi;
  a=sun.x;
  b=sun.y;
 sun.addImage(sunimg);
 //sun.debug=true;
 sun.scale=0.2;
 sun.setCollider("circle",0,0,212);
 planet= createSprite(a-70,b-70, 50, 50);
pr=b-100;
 planet.addImage(planetimage);
 //planet.debug=true;
 planet.scale=0.2;
 planet.setCollider("circle",0,0,80);
 mars=createSprite(a-115,b+115, 100, 100);
 mars.addImage(marsimg);
// mars.debug=true;
 mars.scale=0.06;
 mars.setCollider("circle",0,0,00);
 mr=b+115;
 jup=createSprite(a+205,b-205, 50, 50);
 jr=b-205
 jup.addImage(jupimg);
 //jup.debug=true;
 jup.scale=0.4;
 jup.setCollider("circle",0,0,85);
 planet.x=a-pr;
 planet.y=b+sqrt(pow(pr,2)-pow(planet.x-a,2));
 mars.x=a-mr;
 mars.y=b+sqrt(pow(mr,2)-pow(mars.x-a,2));
 angle=0;
}
function draw() {
  background(0,0,0);
  sun.scale=sun.scale+0.0007;
  if(sun.collide(planet)){
   planet.lifetime=1;
  }
  if(sun.collide(jup)){
    jup.lifetime=1;
    sun.lifetime=50;
   }

   if(sun.collide(mars)){
    mars.lifetime=1;
   }
  planet.x=a+(a-pr-250) * cos(angle);
  planet.y=b+(b-pr) * sin(angle);
  mars.x=a+(a-mr+100) * cos(angle);
  mars.y=b+(b-mr-30) * sin(angle);
  jup.x=a+(a-jr) * cos(angle);
  jup.y=b+(b-jr) * sin(angle);
  angle=angle+1;
  //if(planet.x<a+pr){
  //planet.x=planet.x+0.5;
  //}else if(planet.x>a-pr){
  //  planet.x=planet.x-0.5;
  //}
  //planet.y=py;
  //planet.y=b+sqrt(pow(pr,2)-pow(planet.x-a,2));
  stars();
  drawSprites();
}
function stars(){
  if (frameCount%2===0) {
 star=createSprite(random(10,w-10),0,2,2);
  star.shapecolor="white";
  star.velocityY=3;
  star.lifetime=1000;
  }
}
 