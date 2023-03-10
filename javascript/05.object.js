// 8-1. Object literal {key: value }
// 8-2. new Object();
// 8-3. Object.create();
let apple = {
  name: 'apple',
  'hello-bye': 'π',
  0: 1,
  ['hello-bye1']: 'π',
};
console.log(apple.name);
console.log(apple['name']);
console.log(apple['hello-bye']);
// μμ±μΆκ°
apple.emoji = 'πΊ';
console.log(apple.emoji);
console.log(apple['emoji']);
// μμ±μ­μ 
delete apple.emoji;
console.log(apple);

// 8-4.compute
const obj1 = {
  name: 'μλ¦¬',
  age: 20,
};
obj1.name;
obj1.age;

function getValue(obj, key){
  return obj[key];
}
console.log(getValue(obj1, 'name'));

function addKey(obj, key, value){
  obj[key] = value;
};
function deleteKey(obj, key){
  delete obj1[key];
};

addKey(obj1, 'job', 'engineer');
console.log(obj1);
console.log('----------------');

// 8-5. short
const x = 0;
const y = 0;
// const coordinate = {x: x, y: y};
const coordinate = {x, y};
console.log(coordinate);

function makeObj(name, age) {
  return{
    // name: name,
    // age: age,
    name,
    age,
  }
}
console.log('----------------');

// 8-6. method
const banana = {
  name: 'banana',
  display: function() {
    console.log(`${this.name}: π`);
  },
};
banana.display();

// 8-7.create
const orange = {
  name: 'orange',
  display: function() {
    console.log(`${this.name}: π`);
  },
};
orange.display();

function Fruit(name, emoji){
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; //μλ΅κ°λ₯
} 
const grape = new Fruit('grape','π');
console.log(grape);
console.log(grape.name);
console.log(grape.emoji);
grape.display();