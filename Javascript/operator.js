
// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${ 1 + 2 }`);

// 2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(1%1); //remainder
console.log(1**1); //exponentiation

// 3. 더하기 증가 
let counter = 2; 

//4. 할당하는 operator
let x = 3;
let y = 6;
x+= y ;
x-= y ;
x*= y ;
x/= y ;

// 5 비교

// 6 logical operators: ||(or) $$(and) !(not)
// or : 값중 하나라도 true면 true : so 앞의 값이 false인것 위주로 넣어준다(true가 먼저 나오면 뒤의 값이 계산 안됨)
// !(not)

// 7 . equality : 
//  2개 == 으로 넣을때는 레퍼런스가 다를때도 같다고 나옴
//  3개 === 은 레퍼런스까지 같을때 같음
console.log(0 == false); // true 
console.log(0 === false); // false 레퍼런스 다름 
console.log('' == false); // true
console.log('' === false); //false 레퍼런스 다름
console.log(null == undefined ); // true
console.log(null === undefined ); // false 레퍼런스 다름

// 8. if, else if, else

// 9. ternary operator 
// condition ? value1 : value2;
const name = 'df';
console.log(name === 'ellie' ? 'yes' : 'no');

//10 . switch
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. LOOPS

// DO while 

// for loop, 
for(let i = 3; i>0; i=i-2 ){
    console.log(`inline variable for : $[i]`);
}

const add = (a, b) => a + b;

console.log(add(2, 3));

//class : 속성(fields)과 행동(methods)이 있음
