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
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then(console.log);
}


