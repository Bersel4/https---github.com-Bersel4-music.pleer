const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause-none');
const ttl = document.querySelector('.fa-forward-step');
const forw = document.querySelector('.title');
const art_img = document.querySelector('#artist');
const art_name = document.querySelector('#name');
const playSong = document.querySelector('#playsong');

const artist_name = ['Alan Walker', 'Drake', 'Jubin Nautiyal', 'Asees Kaur', 'Aca Xoca', 'Javed Ali'];
const artist_title = ['Faded', 'Baby I Like Your Style one Dance', 'Raatan Lambiyan', 'La La Io La La', 'Srivalli'];

playSong.addEventListener('click',effect)

function effect() {
    if  (ad.duration == ad.currentTime) {
    x +=1;
    console.log(x);
}
    if  ((!playing.classList.contains('none'))) {
        // ad.play();
        // setInterval(prog,1000);
        // setInterval(line,1000);
        // progres.adEventListener('click', (e)=>{
        //     var widthbar2 = (e.offsetX/e.target.clientWidth)*ad.duration;
        //     ad.currentTime = widthbar2;
        // })
    } else {
        ad.pause();
    }

    ttl.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
}

