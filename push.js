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


push.sendNotification(sub,'test message');