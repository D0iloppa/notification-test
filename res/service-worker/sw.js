self.addEventListener('push' , function(event) {
    const title = "Doil test";

    const options = {
        body : "This notification was generated from a Doil's server ",
        icon : "res/images/example.png",
        vibrate : [100, 50, 100],
        data : {
            dateOfArrival : Date.now(),
            primaryKey : '2'
        },
        actions:[
            {
                action : 'explore',
                title : 'Explore this new world',
                icon : 'res/images/checkmark.png'
            },
            {
                action : 'close',
                title : 'Close',
                icon : 'res/images/xmark.png'
            },
        ]
    }

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
    
});



self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click received.');
  
    event.notification.close();
    /*
        [event.waitUntil()] ensures that 
        the browser doesn't terminate the service worker before the new window or tab has been displayed.
    */
    
    event.waitUntil( () => {
        eventCallBackFunc() 
    });
  });


  function eventCallBackFunc(){
    // 언제든 변경 가능
    clients.openWindow('https://www.wellconn.co.kr');
  }
