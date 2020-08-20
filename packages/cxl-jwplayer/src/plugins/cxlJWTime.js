/* eslint-disable */
/**
 *
 * JW Custom Plugin: Time Manipulation
 * Description: Link to time & Resume Playback functionality
 * ID: cxlJWTime
 * Author: kyle@cxl.com
 * Original Source: INSERT GITHUB URL
 * Dependencies: js-cookie
 *
 */

(() => {
  const id = 'cxlJWTime';

  class plugin {
    constructor(playerInstance) {
      // Start Plugin Code
      const seconds = s => {
        const a = s.split(':');
        let r = Number(a[a.length - 1]) + Number(a[a.length - 2]) * 60;
        if (a.length > 2) {
          r += Number(a[a.length - 3]) * 3600;
        }
        return r;
      };
      /** Start LinkToTime Globals */

      /**
       *
       * Check for timecode hash, calculate offset in seconds
       * set bool 'shouldPlay' to configure JWPlayer for autoplay.
       * jwplayer().setup() depends on shouldPlay.
       * @var hash - Returns hash value from url -
       * @global offset - If hash has 't=', get SMPTE timecode from hash, then run seconds function
       * to parse timecode into seconds to use in jwplayer().seek(offset).
       * @global shouldPlay - Sets autoplay in jwplayer config if conditions are met.
       *
       */
      const { hash } = window.location;
      const offset = hash.indexOf('t=') ? seconds(`${window.location.hash.substr(3)}.000`) : false;
      const shouldPlay = !!hash;
      /** End LinkToTime Globals */
      playerInstance.on('setup', () => {
        playerInstance.setConfig({
          autostart: shouldPlay
        });
      });
      /** Start ResumePlayback Globals */
      const cookieData = Cookies.get(`jw_${playerInstance}_resumevideodata`);
      /** End ResumePlayback Globals */
      playerInstance.on('ready', () => {
        /** *M Start LinkToTime Interactivity */
        if (offset) {
          playerInstance.seek(offset);
        }
        /** * End LinkToTime Interactivity M-END */
        /** *M Start Resume Playback (using cookies) */
        /**
         *
         * Check cookie data and set playback location when the video
         * starts playing (player event: play - fired).
         *
         */
        playerInstance.once('play', function() {
          if (!cookieData || shouldPlay === true) {
            return;
          }
          const [resumeAt, duration] = cookieData.split(':');
          if (resumeAt < duration) {
            playerInstance.seek(resumeAt);
          }
        });
        playerInstance.on('time', function(e) {
          Cookies.set(
            `jw_${playerInstance}_resumevideodata`,
            `${Math.floor(e.position)}:${playerInstance.getDuration()}`
          );
        });
        /** *End Resume Playback (using cookies) M-END */
      });
      // End Plugin Code
    }
  }

  plugin.version = '1.0.0';

  const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;
  registerPlugin(id, '1.0.0', plugin);
})();
