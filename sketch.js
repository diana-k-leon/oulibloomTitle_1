var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var p
var engine
var box1
var world
var ground
var xspeed=2
var yspeed=1
var x=0
var y=30
var hu = 0;
 
function setup() {
	frameRate(60)
	createCanvas(1000, 600);
	colorMode(HSB, 255);
	hu = random(255);
	p=split(prompt("text:"),"")
	
	engine = Engine.create();
	world=engine.world
	Engine.run(engine);
	// Engine.run(engine);
	box1 = Bodies.circle(-200, -100, 60,{isStatic:true,restitution:1});
  hits.push(new Hit(width/2, height+40, width, 80));
  hits.push(new Hit(-40, height/2, 80, height));
  hits.push(new Hit(width+40, height/2, 80, height));
	World.add(world, box1);
	// World.add(world, ground);
	rectMode(CENTER)
	// hits.push(new Hit(0,height/2,40,height))
	// hits.push(new Hit(width,height/2,40,height))
	colorMode(HSB,255)
	for(let i=0;boxs.length<101;i+=1){
	x+=80
	if(x>width){x=80;y+=80}
		
		// print(width)
	boxs.push(new Box(x+random(-1,1),y,60))}
	// print(boxs.length)
	// p=split("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679","")

}

function draw() {
	background(hu, 100, 255)
	//if (frameCount%200 == 0)saver();
	// print(p[1])
	// Engine.update(engine, 1000/(frameRate()*2));
  push()
	// fill(82, 250, 223)
  // rect(width/2, height-40, width, 80)
	pop()
	for (let i=0; i< boxs.length;i++){
    boxs[i].move();}
	
	for (let i=0; i< hits.length;i++){
    hits[i].move();}
	Matter.Body.setPosition( box1, {x: mouseX, y: mouseY})
	//boxs.push(new Box())
	push()
	fill(0,255/2)
	if(keyIsDown(32)){
	  ellipse(box1.position.x,box1.position.y,120,120)}
	pop()
	//if(frameCount%20==0){
		
	//mousePressed()}
}

var boxs=[]
var hits=[]
	
	 // boxs.push(new Box(x,y))

function Box (xx,yy,ww,hh)  {
	this.x=xx
	this.y=yy
	this.w=ww
	this.h=hh
	this.f=random(255)
	this.t=p[boxs.length%p.length]
	
  textSize(ww*1.5)
  this.body=Bodies.rectangle(xx, yy, textWidth(this.t),70, {restitution:1});


	World.add(world, this.body);
	this.move=function(){
		
	// Matter.Body.setVelocity( this.body, {x: xspeed, y: yspeed});
	var pos=this.body.position
	var angle=this.body.angle
	push()
	translate(pos.x,pos.y)
	fill(0)
	rotate(angle)
	textSize(ww*1.5)
	textAlign(CENTER)
	
	text(this.t,0,ww/2)
	fill(0,(255/2))
	if(keyIsDown(32)){

	rect(0,0,textWidth(this.t),70)}

	pop()

}}


function Hit (xx,yy,ww,hh)  {
	this.x=xx
	this.y=yy
	this.w=ww
	this.h=hh
  this.body=Bodies.rectangle(xx, yy, ww, hh,{ isStatic: true });

	World.add(world, this.body);
	
	this.move=function(){
		
	var pos=this.body.position
	var angle=this.body.angle
	push()
	translate(pos.x,pos.y)
	rotate(angle)
	//rect(0,0,this.w,this.h)
	pop()

}}


function keyPressed(){
  save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
}