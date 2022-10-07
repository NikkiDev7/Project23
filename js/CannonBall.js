class CannonBall {
    constructor(x,y,radius) {
        var options={
            isStatic: true
        }
        this.CannonBall = Matter.Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.CannonBall)
        this.Image = loadImage("assets/cannonball.png")
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.Image, this.CannonBall.position.x, this.CannonBall.position.y,this.radius,this.radius)
        pop();
    }

    shoot(){
        var newAngle = cannon.angle-28
        newAngle = newAngle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle)
        velocity.mult(0.5) 
        Matter.Body.setStatic(this.CannonBall, false)
        Matter.Body.setVelocity(this.CannonBall,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
    }
}
