class Log {
    constructor(x,y,width,height,angle){
        var option = {
            restitution:0.3,
            friction : 1,
            density: 1.5
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body, angle)
        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill ("gold");
        stroke("red");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
}
}