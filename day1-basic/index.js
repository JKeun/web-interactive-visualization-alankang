function render() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var text = 'What time is it now? : ' + hour + ":" + min + ":" + sec;
    window.document.querySelector('p').innerHTML = text;
}
