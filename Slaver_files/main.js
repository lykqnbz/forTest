var uri_server = 'ws://api.catchingdoll.com:8879/ws'
var client, localStream, camera, microphone;
var audioSelect = document.querySelector('select#audioSource')
var videoSelect = document.querySelector('select#videoSource')
var ms = jm.ms;
var channelKey = {}
var uid = Date.now() % 10000;
var uuid="";
channelKey = "fb841fe03362491aaf0b7f4a57cac661"
join()

function join () {
    document.getElementById("div_join").style.display = "none"
    var channel = document.getElementById('channel').value
    uid = Number(uid)
    document.getElementById("video").disabled = true;
    var channel_key = channelKey;
    client = AgoraRTC.createClient({mode: 'interop'});
    client.init(key.value, function () {
        console.log("appid:" + channel_key + ", channel:" + channel);
        client.join(channel_key, channel, uid, function (uid) {
            alert("User " + uid + " join channel " + channel +" successfully");
            if (document.getElementById("video").checked) {
                camera = videoSource.value;
                microphone = audioSource.value;
                localStream = AgoraRTC.createStream({
                    streamID: uid,
                    audio: true,
                    cameraId: camera,
                    microphoneId: microphone,
                    video: document.getElementById("video").checked,
                    screen: false
                });
                if (document.getElementById("video").checked) {
                    localStream.setVideoProfile('720p_3');
                }
            }
        }, function (err) {
            console.log("Join channel failed", err);
        });
    }, function (err) {
        console.log("AgoraRTC client init failed", err);
    });

    channelKey = "";
    client.on('error', function (err) {
        console.log("Got error msg:", err.reason);
        if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
            client.renewChannelKey(channelKey, function () {
                console.log("Renew channel key successfully");
            }, function (err) {
                console.log("Renew channel key failed: ", err);
            });
        }
    });

    client.on('stream-added', function (evt) {
        var stream = evt.stream;
        console.log("New stream added: " + stream.getId());
        console.log("Subscribe ", stream);
        client.subscribe(stream, function (err) {
            console.log("Subscribe stream failed", err);
        });
    });

    client.on('stream-subscribed', function (evt) {
        var stream = evt.stream;
        alert("Subscribe remote stream successfully: " + stream.getId());
        if ($('div#video #agora_remote' + stream.getId()).length === 0) {
            $('div#video').append('<div id="agora_remote' + stream.getId() + '" style="float:left; width:100%;height:350px;display:inline-block;border: 1px solid #eeeeee"></div>');
            if(screen.width<450){
                document.getElementById('agora_remote'+stream.getId()).style.height=screen.width+"px";
            }
        }
        stream.play('agora_remote' + stream.getId());
        
        //画面旋转
        var videoId="video"+stream.getId();
        document.getElementById(videoId).style.transform="rotate(90deg)";

        uuid="agora_remote"+stream.getId();
        

    });

    client.on('stream-removed', function (evt) {
        var stream = evt.stream;
        stream.stop();
        $('#agora_remote' + stream.getId()).remove();
        console.log("Remote stream is removed " + stream.getId());
    });

    client.on('peer-leave', function (evt) {
        var stream = evt.stream;
        if (stream) {
            stream.stop();
            $('#agora_remote' + stream.getId()).remove();
            console.log(evt.uid + " leaved from this channel");
        }
    });
    ;
 
}

//视口改变 直播窗口随之改变
window.onresize = function(){
    if(screen.width<450){
         document.getElementById(uuid).style.height=screen.width+"px";
    }
}

// function leave () {
//   document.getElementById("join").disabled = false;
//   document.getElementById("leave").disabled = true;
//   client.leave(function () {
//     console.log("Leavel channel successfully");
//   }, function (err) {
//     console.log("Leave channel failed");
//   });
// }

var ws = null
var socket;
if (!window.WebSocket) {
    window.WebSocket = window.MozWebSocket;
}
if (window.WebSocket) {
  console.log('connect app server')
    socket = new WebSocket(uri_server);
    socket.onmessage = function(event) {
        console.log(event.data);
    };
    socket.onopen = function(event) {
        ws = client
        console.info('连接成功');
        document.getElementById("start").style.display = "block"
        send("{'command':'AUTH', 'uid':'5a044fbd231077597f020ae6', 'token':'eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiI1YTA0NGZiZDIzMTA3NzU5N2YwMjBhZTYiLCJleHAiOjE1MTA4MzY3OTd9.CysocLi14h4cMrMYfPD-2XmvFshw5oenP24thy1PXFDqgJAx5OA18G8UuYrtRv0u1kI2dK1H-KPSiDsXJI6inQ','roomId':'10121', 'role':'USER'}");
    };
    socket.onclose = function(event) {
        console.info('断开连接');
        document.getElementById("start").style.display = "none"
        ws = null
    };
} else {
    alert("你的浏览器不支持 WebSocket！");
}

function send(message) {
    if (!window.WebSocket) {
        return;
    }
    if (socket.readyState == WebSocket.OPEN) {
        socket.send(message);
    } else {
        alert("连接没有开启.");
    }
}

function operate (direction) {
    send(JSON.stringify({command: direction}));
}
