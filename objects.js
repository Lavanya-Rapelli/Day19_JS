// Using object literal
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  // Accessing properties
  

person.email = 'alice@example.com'; // Adding a property
person.age = 31; // Modifying a property
delete person.greet; // Deleting a property

console.log(person.age); // Alice

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    start: function() {
      console.log('Car started');
    }
  };
  car.start();

