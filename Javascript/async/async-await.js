// async & await
// clear style of using promise 

//1 async

async function fetchUser() {
    // 응답에 10초가 걸리는 코드 
        return 'yiseul';
}


const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);  // await은 delay가 끝날때까지 기다리게 만듬
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// then 구문
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana=> `${apple} + ${banana}`);
//     });
// }
// ============>  async로 축약된 구문
    async function pickFruits() {
            // await이 위와 아래 두번 연속으로 들어가서 00Promise를 
            // 동시에 진행해서(바나나, 사과 동시) 지정해서 시간을 단축시킨다.
            const applePromise = getApple();
            const bananaPromise = getBanana();

            const apple = await applePromise;
            const banana = await bananaPromise;
            return `${apple} + ${banana}`;
 
    }

pickFruits().then(console.log);

// ===================> 더 단순하게

// 3. useful Promise APIs : Promise.all
function pickAllFruits() {      // getApple과 getBanana의 delay가 끝나면 바로 작동
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + '));
};
pickAllFruits().then(console.log);


// 둘중 일찍 끝나는 걸 호출하고 싶다 : Promise.race
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
