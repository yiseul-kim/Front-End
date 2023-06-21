'use strict';

// promise 
// 1. 상태(State) : pending -> fulfilled or rejected
// 2. 제공자(Producer)와 사용자(Consumer)의 차이 이해

// 제공자 (Producer)
const promise = new Promise ((resolve, reject) => {
    // 주로 heavy한 일을 진행함. (비동기적-빠른 업무를 미리 처리하고 추후에 확인할수 있도록)
    // ex ) network, red files)
    // when new promise is created, the executor runs automatically.
    console.log('doing something...');
    setTimeout(() => {
        resolve('yiseul');
        //reject(new Error('no network'));   //callback 함수 
    }, 2000)    // 2초 뒤에 진행
});
 // 사용자가 버튼을 눌러 네트워크 요청을 하는 경우라면 위의 구문이 무필요(쓸데없이 진행-다운)

 // 2. Consumer : then, catch, finally
 promise
    .then((value) => {
    console.log(value); //위의 resolve 함수가 무사히 진행됐을시 나타나는 호출구문
    })
    .catch((error) => {     // them으로 나온 결과에 catch로 값을 다시 처리
        console.log(error);
    })
    .finally(()=> {     // 성공과 실패 상관없이 호출됨
        console.log('끝')
    });


// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); //1이 전달됨
});

fetchNumber
.then(num => num*2 ) // 1*2
.then(num => num*3 ) // 2*3
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num-1), 1000); // num : 6-1
    })
})
.then(num=>console.log(num));   // 총 실행시간 위(1000)+아래(1000)=2000 2초 걸림

// 4. Error heading

const getHen = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve('닭', 1000));
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(()=> resolve(`${hen} => 달걀`), 1000);
        setTimeout(()=> reject(new Error(`error! ${hen} => 달걀`)), 1000);
    });
const cook = egg => 
    new Promise ((resolve, reject ) => {
        setTimeout(()=> resolve(`${egg} => 요리`), 1000);
    });

/*
getHen()
    .then(hen => getEgg(hen))
    .then(egg=>cook(egg))
    .then(meal=>console.log(meal));
*/
// 위의 getHen과 동일한 값을 나타냄 -> 짧게 줄임( 반복되는 단어를 줄여도 괜찮음.)
getHen()
    .then(getEgg) 
    // .catch(error => {
    //     return '빵';
    // })
    .then(cook) 
    .then(console.log)
    .catch(console.log);    // 오류 발생시 어디에서 오류가 발생했는지 알수 있음. 
    


    
    
