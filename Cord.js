class Cord {
    constructor(bodyA,bodyB){
var options = {
    bodyA : ball,
    bodyB : cord,
    stiffness: 0.04,
    length : 100
  }
  
     this.cord = Constraint.create(options);
     World.add(world,this.cord);
     fill("White");

    }

    display(){
    var pointA = this.cord.bodyA.position;
    var pointB = this.cord.bodyB.position;
    strokeWeight(8);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    stroke("white");
    line(ball.position.x,ball.position.y,cord.position.x,cord.position.y);

    }
}