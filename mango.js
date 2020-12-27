class Mango{
    constructor(x, y, diametre) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y,diametre , options);
        this.diametre=diametre;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.diametre,this.diametre);
        pop();
      }
}