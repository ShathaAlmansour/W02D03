function Cars(make, model, colour, image, registration, number, price) {
  this.make = make;
  this.model = model;
  this.colour = colour;
  this.image = image;
  this.registration = registration;
  this.number = number;
  this.price = price;
  this.editPrice = function (newPrice) {
    this.price=newPrice
    return newPrice
  }
  this.showAll = function () { 
console.log("car is ${this.make} model ${this.model} colour ${this,colour} image ${this.image} registration ${this.registration} number ${this.number} price ${this.price} ")
  }
}
console.log("Cars");
const car = new Cars ("Hyundai", "Elantra" , "Grey" , "img" , "111" , "222" ,"40000")
console.log(car.price);

car.editPrice(60000);
console.log(car.price)
  

