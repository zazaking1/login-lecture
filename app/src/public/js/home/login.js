"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}


