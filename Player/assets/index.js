import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

//ejecución del programa
const  video = document.querySelector('video');
const  player = new MediaPlayer({ 
    el:video, 
    plugins: [ new AutoPlay(), new AutoPause() ] });

const  playButton = document.querySelector('#playButton');
playButton.onclick = () =>  player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}

//Service Workers: Sirven para hacer que nuestras aplicaciones funcionen Offline.
//Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.