// 자바 : 동기적인 아이
// 호이스팅 이후부터 동기적으로 작동됨
// 비동기 : 언제 작동할지 모르는 상태
// hoisting: var, function decleration 이 제일 위로 올라가는 것 

console.log('1');
setTimeout( function () {       // callback함수 (function 생략 가능)
    console.log('2')
}, 1000);
console.log('3');

// 동기 callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));

// 비동기 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

// 콜백지옥
class UserStroage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error ('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {

    }
}