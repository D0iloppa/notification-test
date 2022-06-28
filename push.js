var push = require('web-push');

//const vapidKeys = push.generateVAPIDKeys();
const vapidKeys = {
    publicKey: 'BFZMlmRstkzDw-FHUR_8OwuGzX-0v6hhy1ykdFstaiUJJG2j-Z-WJrOm-vYTgk0YoYVRvXZg6yi7KY5Hs2DGMc4',
    privateKey: 'xCgJO-gCIp5tywlxbkkPuH6-6cwOVzOHIS7HQ5KSgBo'
};

push.setVapidDetails('mailto:kdi3939@naver.com' , vapidKeys.publicKey , vapidKeys.privateKey);



let sub = {};


push.sendNotification(sub,'test message');