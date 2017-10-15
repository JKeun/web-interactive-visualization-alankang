function render() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var text = 'What time is it now? : ' + hour + ":" + min + ":" + sec;
    window.document.querySelector('p').innerHTML = text;

    var degSec = sec / 60 * 360;
    document.querySelector("#sec").style.transform = 'rotate(' + degSec + 'deg)';
    var degMin = min / 60 * 360;
    document.querySelector("#min").style.transform = 'rotate(' + degMin + 'deg)';
    var degHour = hour / 12 * 360;
    document.querySelector("#hour").style.trnsform = 'rotate(' + degHour + 'deg)';
    window.setInterval(render, 1000);
}

