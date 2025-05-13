//  class  constructor

class car {
    constructor(brand,price,speed,capacity,color) {
        this.brand=brand;
        this.price=price;
        this.speed=speed;
        this.capacity=capacity;
        this.color=color;
    }
    creat(){console.log(`I Need ${this.brand} car\nIts minimum Around ${this.price} cost\nIt run ${this.speed} \nThe Maximim of ${this.capacity} seats\nAnd I Like ${this.color} color`)}
}
const output = new car("BMW","25lakhs","200kmph",5,"Silver");
output.creat();
