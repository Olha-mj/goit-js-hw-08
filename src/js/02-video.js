import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const updateLocalStoragePlaybackTime = async () => {
    try {
      const currentTime = await player.getCurrentTime();
      localStorage.setItem('videoplayer-current-time', currentTime);
    } catch (error) {
      console.error('Error saving playback time:', error);
    }
  };
  
  player.on('timeupdate', updateLocalStoragePlaybackTime);
  
  document.addEventListener('DOMContentLoaded', async () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      try {
        await player.setCurrentTime(savedTime);
      } catch (error) {
        console.error('Error setting current time:', error);
      }
    }
  });