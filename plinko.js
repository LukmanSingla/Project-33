class Plinko{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,width,options);
        World.add(world,this.body);

    }
    display(){
        fill("#fff");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}