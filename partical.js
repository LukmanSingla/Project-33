class Partical{
    constructor(xposition,y,width,height){
        var options={
            // restitution:1.1,
            density:1,
            friction:1
        }
        this.body=Bodies.circle(xposition,Math.round(random(10,12)),width,options);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
        
    }
    display(){
        push();
        fill(this.color);
        strokeWeight(0);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}