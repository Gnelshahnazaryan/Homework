class Rectangle{

    constructor(width,height){

        this.width = width;
        this.height = height;

    }

    area(width,height){

        return width * height;

    }

    perimeter(width,height){

        return 2 * (width + height);

    }

}


const rectangle = new Rectangle(10,5);
console.log(rectangle);
console.log(rectangle.area(10,5));
console.log(rectangle.perimeter(10,5));
