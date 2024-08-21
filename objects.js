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

// console.log(person.age); // Alice

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    start: function() {
      console.log('Car started');
    }
  };
  car.start();

  function findFrequency(arr) {
    const frequency = {};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (frequency[num]) {
        frequency[num]++;
      } else {
        frequency[num] = 1;
      }
    }
  
    return frequency;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 2, 3];
  const frequency = findFrequency(arr);
  console.log(frequency); // { '1': 1, '2': 2, '3': 2 }
  

  function mapCharacters(N) {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let obj = {};
    for(let i = 0; i < N; i++){
        obj[str[i]] = i+1;
    }
    for(let key in obj){
        console.log(key +"-"+ obj[key]);
    } 
}


mapCharacters(5)


