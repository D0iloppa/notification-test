const https = require('https');

const express = require("express"); // express 웹 서버 사용

const fs = require('fs'); // 파일로드 사용
var cors = require('cors'); 

var webpush = require('web-push'); // web-push 사용

const app = express();
const PORT = 3939;

/*
fs.readdir('./ssl',function(err,filelist){
  console.log(filelist);
});
*/
/*
const options = {
  cert: fs.readFileSync('./ssl/localhost+2.pem'),
  key: fs.readFileSync('./ssl/localhost+2-key.pem')
};  
*/

// 기본 설정
const os = require("os");
const server_ip  = getServerIp();

// server ip 구하기
function getServerIp() {
  var ifaces = os.networkInterfaces();
  var result = '';
  for (var dev in ifaces) {
      var alias = 0;
      ifaces[dev].forEach(function(details) {
          if (details.family == 'IPv4' && details.internal === false) {
              result = details.address;
              ++alias;
          }
      });
  }
  return result;
}

// 정적 파일 불러오기
app.use(express.static(__dirname + "/res"));


//cross origin 허용
app.use(cors());
//json사용
app.use(express.json());
//body-parse사용
app.use(express.urlencoded({ extended: true})); 

app.use('/client', express.static('client'));       //구독 페이지
app.use('/sketcher', express.static('sketcher'));   //Push 전송 페이지



// vapid key 생성
const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
    'mailto:kdi3939@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

console.log(vapidKeys);


// root 도메인 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// 서버키를 구함
app.get("/getServerKey.do", (req,res) => {
  let sendData = {};
  sendData["key"] = vapidKeys.publicKey;
  res.json(sendData);
});

// 구독
const temp_subs = [];
app.post('/subscribe.do', (req, res) => {
    temp_subs.push(req.body.subscription);
    console.log(`subscribed : ${JSON.stringify(req.body.subscription)}`);
    res.send('Subscribed');
});

// 
app.post('/notify.do', (req, res) => {
  console.log(`-------------------------------------------`);
  console.log(`notify requested : ${JSON.stringify(req.body)}`);
  let payload = {};
  payload.title = req.body.title;
  payload.message = req.body.message;

  for(const subs of temp_subs){
      webpush.sendNotification(subs, JSON.stringify(payload))
      .then( (response) => {
          console.log('sent notification');
          res.sendStatus(201);
      }).catch( (err) => {
          console.error(`notification error : ${err}`);
          res.sendStatus(500);
      });
  }
});













// https 서버실행
/*
https.createServer(options, app).listen( PORT, () => {
  console.log(`
  ##############################################################
    😎 [HELLO, WORLD🌏] 😎

    🎉 This is doil's driving-TEST server with express-graphql
    🛡️ Server listening on port ${PORT} 🛡️
    Here's the Server URL : [ https://${server_ip}:${PORT}/ ]
  ##############################################################
  `);
});
*/


// http 서버 실행

app.listen(PORT, () => {
  console.log(`
  ##############################################################
    😎 [HELLO, WORLD🌏] 😎

    🎉 This is doil's driving-TEST server with express-graphql
    🛡️ Server listening on port ${PORT} 🛡️
    Here's the Server URL : [ http://${server_ip}:${PORT}/ ]
  ##############################################################
  `);
});


/*
⌨️💻🖥️🌏🐳👨‍💻👨🏻‍💻🎉
*/