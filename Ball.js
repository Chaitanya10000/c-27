class Ball{
    constructor(x, y, width, height) {
        var options = {
            restitution : 1.0,
            density : 1.0
          }
          ball  = Bodies.circle(x,y,width,options);
          World.add(world,ball);
      }
      display(){
         
         fill("blue");
         ellipseMode(RADIUS);
         ellipse(ball.position.x,ball.position.y,40);
      }
}