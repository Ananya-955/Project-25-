class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y,100,120);
      translate(pos.x, pos.y);
      //rotate(this.body.angle);
      fill("white");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  