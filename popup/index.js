
function begin(){
    console.log('chrome', chrome)
  // 向 Service Worker 发送消息
    chrome.runtime.sendMessage({
        action: 'fromPopup',
        message: 'Hello from Popup!'
    });
}
function begin_req(){
    beginGetreq();
}
function nextPage(){
    nextPageReq();
}
function checks(){
    checksReq();
}

function init_controls() {
    window.onload=function() {
        document.getElementById("begin").addEventListener("click", begin);
        document.getElementById("beginGet").addEventListener("click", begin_req);
        document.getElementById("nextPage").addEventListener("click", nextPage);
        document.getElementById("checks").addEventListener("click", checks);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    init_controls();
});
