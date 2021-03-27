class Image{

    constructor(x, y, width, height){

    this.width = width;
    this.height = height;
    this.image = loadImage("Images/dustbinObject.png")
    this.body = Bodies.rectangle(x, y, width, height)
    World.add(world, this.body)
    }

    display(){

        var imagepos = this.body.position

        push()
        translate(imagepos.x, imagepos.y)
        image(this.image, 0, 0, this.width, this.height)
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop()
        


    }
}

