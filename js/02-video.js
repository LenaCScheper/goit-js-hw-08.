import throttle from 'lodash/throttle';
import Player from '@vimeo/player';

const playerIframe = document.querySelector('#vimeo-player');
const player = new Player(playerIframe);

// --------play video-----------
player.on('play', function () {
  console.log('played the video!');
});

// -------------get current time - throttled----------
player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log('current time: ', data.seconds);
}

// ---------set start time if saved------------
const timeCatcher = localStorage.getItem('videoplayer-current-time');

if (timeCatcher) {
  player.setCurrentTime(timeCatcher);
  localStorage.removeItem('videoplayer-current-time');
}
console.log('timeCatcher: ', timeCatcher);
