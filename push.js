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

let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/d56-iiAfdJE:APA91bEGg62lpeDeBXP2ziV2sgrNVrWU8uGVu34kuFaVNyvOZHYaMGL0BKzouiGRXLNhgOkjH89btwnMmrZqH1ZoKUcq4TcKQqPuBRM3egwTcdut0ynIWVZ5jjMrNnmJVXug5T4h4303","expirationTime":null,"keys":{"p256dh":"BDRHyIS6pgVHb4tE5iKcEFWm2mkc9g1waJ2gH14OmClvVUell6F6XdGz1SYvHtsconWrqCVFRnMCq6E1uHx7EoU","auth":"T75pmprvMmWaQpEzxNiM6A"}}
let sub3 = {"endpoint":"https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAAVp00z0DLC9Vompq5PKAT1ypv4PDquyeVaRsSk1RgC7QBRvZGRF6TXwPeGtwNjrxdI0InBc4dBlHXvuYMNOo3S2NFLaxeFeATOYIgF3Rmf6hfV9qb3AE79JiNuoDA%2bXCpqw8blhMeWz7GdTxk036bHu5yzE8h5NEn1pyW9TfIOyoSblGd2np9iSGx%2fu94MYU14spbYJUlqBIsRV1IkZS5zFImuIEaByudEE%2bSHUoLiulvE03ZKRMPmOryLY6qiTSnpMEM8996m2wQB8oc3IKuRbzYg5hka6Ev0tpwkE%2f%2bgvpxwBAOvg7RsJ%2b6OIIhIdjRQOxsp66qM7jCBS00ksk2cp8ikDVfbiQ9GNkjOB1qz5A%3d%3d","expirationTime":null,"keys":{"p256dh":"BOkoF8SggPWZ_w2cxkd6GLh3le256wHkakkvHxOlkGJmrB5_cZliryy7vVi0ixFNTz7A4vg2XcEURs52R2-f9dM","auth":"eW6kHhkAZyYb9voPVHECRw"}};

push.sendNotification(sub2,'test message');