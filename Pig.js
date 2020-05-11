
class Pig extends BaseClass {
  constructor(x, y,width,height){
    var options={
      isStatic:true
    }
    super(x,y,width,height,options);
    this.image = loadImage("images/pig.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 15){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }

score(){
  if(this.Visiblity<0 && this.Visiblity>-55){
    score++;
  }
}

};
