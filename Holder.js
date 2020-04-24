class Holder{
    constructor(x, y, width, height) {

        var options={
            isStatic: true
          }


holder = Bodies.rectangle(x,y,width.height,options);
World.add(world,holder);



    }

display(){

    fill ("brown");
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,200,20);


}

}