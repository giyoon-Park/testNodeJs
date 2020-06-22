//필요한 모듈 선언
var express = require('express');
var oracledb = require('oracledb');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

//라우팅 모듈 선언
var indexRouter = require('./routes/index');
var clubRouter = require('./routes/club/club');

//mybatis-mapper 추가
var mybatisMapper = require('mybatis-mapper');

//Mapper Load
mybatisMapper.createMapper([ './APP/mapper/oracle-mapper.xml' ]);

// 오라클 자동 커밋
oracledb.autoCommit = true;

//express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set('port', process.env.PORT || 8001);

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);
app.use('/club', clubRouter);

//html 템플릿 엔진 ejs 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//req.body 를 사용하기 위한 설정
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

//등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function(req, res) {
res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

//서버 생성
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});