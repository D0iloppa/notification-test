var push = require('web-push');

//const vapidKeys = push.generateVAPIDKeys();
const vapidKeys = {
    publicKey: 'BFZMlmRstkzDw-FHUR_8OwuGzX-0v6hhy1ykdFstaiUJJG2j-Z-WJrOm-vYTgk0YoYVRvXZg6yi7KY5Hs2DGMc4',
    privateKey: 'xCgJO-gCIp5tywlxbkkPuH6-6cwOVzOHIS7HQ5KSgBo'
};

push.setVapidDetails('mailto:kdi3939@naver.com' , vapidKeys.publicKey , vapidKeys.privateKey);



let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dyyXRVqFa0I:APA91bFX0-dtNPkXMq8pvX6AKATfxSrRspBhqhZ8r-Wz2LpDhqdJOvb9TCNhrpsDVV8PDfxI_vCYlU0pzu-JG3ovuZYwwmYjYAbf2aJRMLqEks2ZglegeX8AxZ7ox5ITOVZwBumOh9M_",
    expirationTime:null,
    keys:{
            p256dh:"BAG13FkUX64yCezV4owm-iJWYbUzS9cEJ1A34uoNYCCRD7M4QdFafE-o70L8CvIg4ZIKYepccdXSNcYBKVu1ndo",
            auth:"deS-6Y2y0pBCe73F61sKkQ"
        }
}

let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/diBDLGU-No8:APA91bECrD5MQWGizi_0mBujmgZuc-iyPOA1Eudht-fdwDhaq3MXgRvyzDdECv7fc7PCkKRLgDVDi2lSq_phzjdHRII3kbBLprDR72TwLRUKDG0q6Yuz-2c14_Oj2yuqjOQpwdVvLjm-","expirationTime":null,"keys":{"p256dh":"BM6TiSMRaan6ZZzx54t-Pqx1VdYwfnlxqb-QKSzYzHteKShVPX_OANxxVUdoP_xrPdXNbVl0zT__ssMUvxk3ckE","auth":"nIF_O5vRpEx5xFXLvCCizw"}};

push.sendNotification(sub2,'test message');