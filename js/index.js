document.addEventListener('DOMContentLoaded', function() {

    reproductorVideo();

});

function reproductorVideo() {
    
    const video = document.querySelector('#video');
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    const backward = document.querySelector('#backward');
    const forward = document.querySelector('#forward');
    const progress = document.querySelector('#progress');

    //Reproduce el Video
    play.addEventListener('click', () => {
        video.play();
        play.hidden = true
        pause.hidden = false
    });

    //Pausa el Video
    pause.addEventListener('click', () => {
        video.pause();
        pause.hidden = true
        play.hidden = false
    });

    //Atrasa en .10s el video
    backward.addEventListener('click', () => video.currentTime -= 10);
    //Adelanta en .10s el video
    forward.addEventListener('click', () => video.currentTime += 10);
    //Nos devuelve la duración del Video
    video.addEventListener('loadedmetadata', () => progress.max = video.duration);
    //Combina la duración del Video con la barra de Progreso
    video.addEventListener('timeupdate', () => progress.value = video.currentTime);
    //Función para mover el video con la barra de Proceso
    progress.addEventListener('input', () => video.currentTime = progress.value);
    
}
