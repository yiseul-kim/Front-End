'use strict';




// 콜백지옥 해결! 
class UserStroage {
    loginUser(id, password) {
        return new Promise((resolve, reject)=>{           
        setTimeout(()=> {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                resolve(id);
            } else {
                reject(new Error ('not found'));
            }
        },2000);
    });
}
    getRoles(user) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                if(user === 'ellie') {
                    resolve({ name: 'ellie', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

//호출
const userStorage = new UserStroage();
const id = prompt('enter your id');
const password = prompt('enter your passrword');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user=> alert(`안녕하세요 ${user.name}, you have a ${user.role} role`))
.catch(console.log);