class Bow {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.1,
        length: 10
      }
      this.pointB = pointB
      this.image=loadImage("images/bow.png");
      this.image.scale=1.5;
      this.bow = Constraint.create(options);
      World.add(world, this.bow);
    }

    attach(body){
      this.bow.bodyA = body;
  }
  
  fly(){
      this.bow.bodyA = null;
  }

    display(){
      image(this.image,100,132);
        if(this.bow.bodyA){
            var pointA = this.bow.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 250) {
                strokeWeight(7);
            }
            else{
                strokeWeight(3);
            }
           
            
            pop();
    }
  }
}
