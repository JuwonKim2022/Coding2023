// 8-1. array
let array = new Array(2);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5,6);
console.log(array);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

array = Array.from(anotherArray);
console.log(array);

array = Array.from({
  0: 'μ',
  1: 'λ',
  length: 2,
});
console.log(array);
console.log('===================');

//8-2. add
const fruits = ['π','π','π','π'];
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

// 8-3. array method1
console.log(Array.isArray(fruits)); //λ°°μ΄μΈμ§ μ²΄ν¬
console.log(fruits.indexOf('π')); //μμΉ μ°ΎκΈ°
console.log(fruits.includes('π')); //λ°°μ΄ μμ νΉμ  μμ΄νμ΄ μλ νμΈ
// μΆκ° 
let length = fruits.push('π');    //λ€μ μΆκ°, λ°°μ΄ μμ²΄λ₯Ό μλ‘ λ§λ¦
console.log(fruits);
console.log(length);
length = fruits.unshift('π');     //μμ μΆκ°
console.log(fruits);     
console.log(length);
// μ κ±°
let lastItem = fruits.pop();    //μ μΌ λ€ μ κ±°
console.log(fruits);
console.log(lastItem);      
lastItem = fruits.shift();     //μ μΌ μ μ κ±°
console.log(fruits);
console.log(lastItem);    
// μ€κ°μ μΆκ° μ­μ 
const deleted = fruits.splice(1,1);     //μ€κ° μμΉ,μλ μ κ±°....λ°°μ΄ μμ²΄ λ€μ λ§λ¦
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, 'π','π','π');     //μ€κ° μμΉ, μ κ±°μλ μκ³ .... μΆκ°ν  κ±° λ£κΈ°
console.log(fruits);

// 8-4. araay method2
let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);
//μ¬λ¬λ°°μ΄ λΆμ
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
const arr4 = arr3.reverse();
console.log(arr4);
//μ€μ²© λ°°μ΄μ μΌλ° λ°°μ΄λ‘
let arr5 = [0,[1,2,3],[4,[5,6]]];
console.log(arr5);
console.log(arr5.flat()); //1λ¨κ³λ§ νμ΄μ€
console.log(arr5.flat(2)); //μ μ²΄ νμ΄μ€
//νΉμ κ°μΌλ‘ λ°°μ΄ μ±μ°κΈ°
arr6 = arr5.flat(3);
arr6.fill(0);         //λ°°μ΄ μμ²΄λ₯Ό μμ 
console.log(arr6);
arr6.fill('s', 1, 3);
console.log(arr6);
//λ°°μ΄ λ¬Έμμ΄λ‘ ν©μΉκΈ°
let text = arr5.join();
console.log(text);

// 8-5. shallow
const pizza = {name: 'π', price: 2};
const ramen = {name: 'π', price: 3};
const sushi = {name: 'π£', price: 1};
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);