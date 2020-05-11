 class Arrow extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("images/arrow.png");
  }

  display() {
   console.log(this.body.speed);
    super.display();

  }
}

 
