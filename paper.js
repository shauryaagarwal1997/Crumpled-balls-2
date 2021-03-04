class Paper{
    constructor(x,y,radius){
var options={
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
    this.paper=Bodies.circle(x,y,radius,options)
    World.add(world,this.paper);

   
    this.radius=radius;
    this.image=loadImage("sprites/paper.png")
    }
    display(){

    ellipseMode(RADIUS)
    ellipse(this.paper.position.x,this.paper.position.y,this.radius,this.radius);
   
    image(this.image,this.paper.position.x,this.paper.position.y,-10,10);
    }
}