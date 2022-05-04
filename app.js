"use strict";
// 모듈
const express = require('express');
const app = express();

// 라우팅 
const home = require('./src/routes/home');

//앱 세팅
app.set('views','./views');
app.set('view engine','ejs');

app.use('/', home) // use -> 미들웨어 등록해주는 메소드

module.exports = app;