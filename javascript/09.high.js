// 9-1. hof
const fruits = ['π', 'π', 'π', 'π'];
//λΉκΈλΉκΈ λλ©΄μ μνλκ±°(μ½λ°±ν¨μ) ν  λ
fruits.forEach(function(value, index, array) {
  console.log('-----------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});
fruits.forEach((value) =>  console.log(value));
console.log('=============================');
// μ‘°κ±΄μ λ§λ μ½λ°±ν¨μ μμ΄ν μ°Ύμ λ
const item1 = {name: 'π₯', price: 2};
const item2 = {name: 'πͺ', price: 3};
const item3 = {name: 'π', price: 1};
const products = [item1, item2, item3, item2];
let found =  products.find((value) => value.name === 'πͺ');
console.log(found);
found =  products.findIndex((value) => value.name === 'πͺ');
console.log(found);
found =  products.some((value) => value.name === 'πͺ');
console.log(found);
found =  products.every((value) => value.name === 'πͺ');
console.log(found);
found =  products.filter((value) => value.name === 'πͺ');
console.log(found);
console.clear();
console.log('============================');

// 9-2. mapping
const nums =[1,2,3,4,5];
result = nums.map((item) => item*2);
console.log(result);
result = nums.map((item)=>{
  if(item%2===0){
    return item*2;
  }else{
    return item;
  }
});
console.log(result);
//flatmap
result = nums.map((item)=>[1,2]);
console.log(result);
result = nums.flatMap((item)=>[1,2]);
console.log(result);

result = ['dream','coding'].map((text)=>text.split(''));
console.log(result);
result = ['dream','coding'].flatMap((text)=>text.split(''));
console.log(result);
//sort
const texts = ['hi','abc'];
texts.sort();
console.log(texts);
const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
//0λλ° μμΌλ©΄ aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
numbers.sort((a,b)=>a-b);
console.log(numbers);
//reduce
result = [1,2,3,4,5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
result = [1,2,3,4,5,6].reduce((sum, value) => (sum += value), 0);
console.log(result);