async function subscribe(){
    let sw = await navigator.serviceWorker.ready;
    // push 구독 신청
    let push = await sw.pushManager.subscribe({
        userVisibleOnly:true,
        // vapid public key
        applicationServerKey:'BFZMlmRstkzDw-FHUR_8OwuGzX-0v6hhy1ykdFstaiUJJG2j-Z-WJrOm-vYTgk0YoYVRvXZg6yi7KY5Hs2DGMc4'
    });

    console.log(JSON.stringify(push));
}