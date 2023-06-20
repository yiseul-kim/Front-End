//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);


const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),  //js에서만 사용되는 것이라 console에 표시되지 않음 
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);   
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);    // 원하는 프로퍼티만 골라서 정의
console.log(json);


//2. JSON to Object
console.clear();
 json=JSON.stringify(rabbit);
 const obj = JSON.parse(json, (key, value) => {
    console.log(`key:${key}, value: ${value}`);
    return key === 'birthDate' ? new Data;
 });
 console.log(obj);
 rabbit.jump();
 //obj.jump();

console.log( rabbit.birthDate.getDate());
console.log(obj.birthDate);