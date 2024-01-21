import Player from '@vimeo/player';
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
