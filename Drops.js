class Drops{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
    this.radius=5;
    this.rain = Bodies.circle(x,y,5,options);
    World.add(world, this.rain);
 }

 showDrop()
 {
    fill("blue");
    ellipseMode(CENTER);
    ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);

 }

}