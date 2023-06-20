'use strict'

// Array 

// 1. declaration
const arr1 = new Array ();
const arr2 = [1,2];

// 2. index position

const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]); //배열의 마지막 출력

console.clear();

// 3. looping over an array 

for(let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit)); 

// 4. Addtion , deletion, copy

// splice

fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);

fruits.splice(1, 1, '청사과', '수박'); // 몇개를 지울건지 지정 안하면 1번 빼고 다 지워짐
console.log(fruits);    // splice 뒷부분은 삭제된 뒷 부분 부터 추가가 되기도 함.

const fruits2 = ['포도', '오렌지']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Serching
// indexOF(있으면 방번호, 없으면 -1) , includes(true, false)
console.clear();
console.log(fruits.indexOf('사과'));

// lastIndexOf : 같은 값이 있을때 마지막에 있는 값을 삭제 



