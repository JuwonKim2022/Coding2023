// 6-1. if
let fruit = 'orange';
if(fruit === 'apple'){
  console.log('π');
}else{
  console.log('π');
};

// 6-2. ternary operator (μΌν­μ‘°κ±΄μ°μ μ)
fruit === 'apple' ? console.log('π') : console.log('π');

let emoji = fruit === 'appple' ? 'π': 'π';
console.log(emoji);

// test1
let num = 2;

if (num%2 == 0){
  console.log('π');
} else {
  console.log('π');
};

(num%2 == 0) ? console.log('π') : console.log('π');

// 6-3. switch
let day = 6;
let dayName;
switch(day){
  case 0: 
    dayName = 'μμμΌ';
    break;
  case 1:
    dayName = 'νμμΌ';
    break;
  case 2:
    dayName = 'μμμΌ';
    break;
  case 3:
    dayName = 'λͺ©μμΌ';
    break;
  case 4:
    dayName = 'κΈμμΌ';
    break;
  case 5:
    dayName = 'ν μμΌ';
    break;
  case 6:
    dayName = 'μΌμμΌ';
    break;
  default:
    console.log('ν΄λΉ μμΌ μμ');
}
console.log(dayName);

// 6-4. for
for(let i = 0; i<5; i++){
  for(let j = 0; j<3; j++){
    console.log(i, j);
  }
}

// 6-5. while
let numA = 5;
while (numA >= 0){
  console.log(numA);
  numA--;
}

// 6-6. logical

