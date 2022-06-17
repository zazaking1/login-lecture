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
}

 

module.exports = UserStorage;
