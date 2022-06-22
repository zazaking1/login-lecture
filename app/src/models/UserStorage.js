"use strict"

class UserStorage {
    static #users = {
        id : ["woorimIT","나개발","김탐정"],
        psword : ["1234","1234","123456"],
        name : ["우리밋", "나개발", "김탐장"],
    }
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser;
        }, {});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.id);
        return { success : true };
        
    }
} 

 

module.exports = UserStorage;
