/* eslint-disable */
/**
 *
 * JW Custom Plugin: Transcript + Search
 * Description: Transcript and search functionality from WebVTT Files
 * ID: cxlJWTranscript
 * Author: kyle@cxl.com
 * Original Source: INSERT GITHUB URL
 * Dependencies: annevk/parser.js
 *
 */

(() => {
  const id = 'cxlJWTranscript';

  class plugin {
    constructor(playerInstance) {
      /**
       *
       * Set global variables for transcript functionality.
       *
       */
      let chapters = [];
      let captions = [];
      let caption = -1;
      let matches = [];
      let query = '';
      let cycle = -1;

      /**
       *
       * Parse HTML from Chapter and Caption WebVTT Files.
       *
       */

      const loadCaptions = () => {
        let h = '<p>';
        let section = 0;
        captions.forEach((caption, i) => {
          if (section < chapters.length && caption.startTime > chapters[section].begin) {
            h += `</p><h4 id="chapter${chapters[section].begin}">${chapters[section].text}</h4><p>`;
            section++;
          }
          h += `<span id="caption${i}">${caption.text}</span>`;
        });
        transcript.innerHTML = `${h}</p>`;
      };
      /**
       *
       * Search functionality for transcript.
       * @param {string} q - Accepts transcript search (q)uery
       *
       */
      const searchTranscript = q => {
        matches = [];
        query = q;
        captions.forEach(({ text }, loc) => {
          if (text) {
            const matchSpot = text.toLowerCase().indexOf(q);
            if (matchSpot > -1) {
              const replacer = sanitizeRegex(q);
              document.getElementById(`caption${loc}`).innerHTML = text.replace(
                new RegExp(`(${replacer})`, 'gi'),
                '<em>$1</em>'
              );
              matches.push(loc);
            }
          }
        });
        if (matches.length) {
          cycleSearch(0);
        } else {
          match.classList.add('hidden');
          resetSearch();
        }
      };
      /**
       *
       * Allows user to press 'Enter' to jump to the next matched search result.
       * @param {number} i - Accepts (i)ndex of matched search item.
       *
       */
      const cycleSearch = i => {
        if (cycle > -1) {
          const o = document.getElementById(`caption${matches[cycle]}`);
          o.querySelector('em').classList.remove('current');
        }
        const c = document.getElementById(`caption${~~matches[i]}`);
        c.querySelector('em').classList.add('current');
        match.textContent = `${i + 1} of ${matches.length}`;
        wrap.scrollTop = c.offsetTop - wrap.offsetTop - 40;
        cycle = i;
      };
      /**
       *
       * Utility function to reset for another search query.
       *
       */
      const resetSearch = () => {
        if (matches.length) {
          captions.forEach((caption, i) => {
            document.getElementById(`caption${~~i}`).textContent = caption.text;
          });
        }
        query = '';
        matches = [];
        match.textContent = '0 of 0';
        cycle = -1;
        transcript.scrollTop = 0;
      };
      const sanitizeRegex = q => {
        return q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      };
      const getElements = elements => {
        const arr = elements.split(',');
        const selectedElements = arr.map(element => {
          if (element) {
            return document.querySelector(element);
          }
        });
        return selectedElements;
      };

      /**
       *
       * Utility function to convert .SRT caption files to WEBVTT format.
       * Via Github @silviapfeiffer
       *
       */
      const srt2webvtt = data => {
        // remove dos newlines
        let srt = data.replace(/\r+/g, '');
        // trim white space start and end
        srt = srt.replace(/^\s+|\s+$/g, '');

        // get cues
        const cuelist = srt.split('\n\n');
        let result = '';

        if (cuelist.length > 0) {
          result += 'WEBVTT\n\n';
          for (let i = 0; i < cuelist.length; i += 1) {
            result += convertSrtCue(cuelist[i]);
          }
        }

        return result;
      };

      function convertSrtCue(caption) {
        // remove all html tags for security reasons
        // srt = srt.replace(/<[a-zA-Z\/][^>]*>/g, '');

        let cue = '';
        const s = caption.split(/\n/);

        // concatenate muilt-line string separated in array into one
        while (s.length > 3) {
          for (let i = 3; i < s.length; i++) {
            s[2] += `\n${s[i]}`;
          }
          s.splice(3, s.length - 3);
        }

        let line = 0;

        // detect identifier
        if (!s[0].match(/\d+:\d+:\d+/) && s[1].match(/\d+:\d+:\d+/)) {
          cue += `${s[0].match(/\w+/)}\n`;
          line += 1;
        }

        // get time strings
        if (s[line].match(/\d+:\d+:\d+/)) {
          // convert time string
          const m = s[1].match(
            /(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/
          );
          if (m) {
            cue += `${m[1]}:${m[2]}:${m[3]}.${m[4]} --> ${m[5]}:${m[6]}:${m[7]}.${m[8]}\n`;
            line += 1;
          } else {
            // Unrecognized timestring
            return '';
          }
        } else {
          // file format error or comment lines
          return '';
        }

        // get cue text
        if (s[line]) {
          cue += `${s[line]}\n\n`;
        }

        return cue;
      }
      /** * End Transcript Module Globals && Functions */

      /** *M Start Transcript Setup */
      const playerContainer = playerInstance.getContainer().parentNode.getAttribute('id');
      let wrap = document.querySelector(`#${playerContainer} .transcript_wrapper`);
      playerInstance.on('ready', () => {
        const playerCaptionsList = playerInstance.getCaptionsList();
        const captionTracks = playerCaptionsList.filter(captionTrack => {
          if (captionTrack.id.startsWith('https://')) {
            return captionTrack.id;
          }
        });

        /**
         *
         * Get DOM Elements for Transcript viewer.
         * @param - Accepts a string of IDs
         *
         */
        getElements(
          `#${playerContainer} .transcript,#${playerContainer} .search, #${playerContainer} .match`
        );

        /**
         *
         * Get Texts Tracks from JWPlayer CDN.
         * Text Tracks:
         *  * Chapters // Getting from Cues loaded during setup
         *  * Captions // Going to pull url from setup.
         *
         */

        const fetchedTracks = captionTracks.map(captions => {
          return new Promise(resolve =>
            fetch(captions.id)
              .then(r => r.text())
              .then(t => resolve(t))
          );
        });

        Promise.all(fetchedTracks)
          .then(textTracks =>
            textTracks.map(track => {
              // Check if VTT or SRT, normalize and sent to parser.
              let vtt = '';
              track.indexOf('WEBVTT') === -1 ? (vtt = srt2webvtt(track)) : (vtt = track);

              const parser = new WebVTTParser();
              const parsedVtt = parser.parse(vtt, 'captions');

              return parsedVtt.cues;
            })
          )
          .then(parsedData => {
            captions = parsedData[0];
            chapters = playerInstance.getCues();
            loadCaptions();
          });
      });

      /** * Start Transcript Interactivity */
      /**
       *
       * Transcript React to JWPlayer current time.
       * Scroll transcript and highlight current line.
       *
       */
      playerInstance.on('time', function(e) {
        const p = e.position;
        for (let j = 0; j < captions.length; j++) {
          if (captions[j].startTime < p && captions[j].endTime > p) {
            if (j != caption) {
              const c = document.getElementById(`caption${j}`);
              if (caption > -1) {
                document.getElementById(`caption${caption}`).className = '';
              }
              c.className = 'current';
              if (query == '') {
                wrap.scrollTop = c.offsetTop - wrap.offsetTop - 40;
              }
              caption = j;
            }
            break;
          }
        }
      });
      /**
       *
       * React to user click event on a transcript line.
       * Seek JWPlayer to beginning of clicked transcript line.
       *
       */
      wrap.addEventListener('click', function(e) {
        if (e.target.id.indexOf('caption') === 0) {
          const i = Number(e.target.id.replace('caption', ''));
          playerInstance.seek(captions[i].startTime).play();
        }
        if (e.target.id.indexOf('chapter') === 0) {
          const i = Number(e.target.id.replace('chapter', ''));
          playerInstance.seek(i).play();
        }
      });
      /** * Start Transcript Search Interactivity */
      /**
       *
       * React to user focus.
       *
       *  // Note: Note fully sure what this step does,
       *  besides select search input after 100ms.
       *
       */
      search.addEventListener('focus', () => setTimeout(() => search.select(), 100));
      /**
       *
       * React to user keyboard events on search input.
       * Switch:
       *  Case:
       *    * Escape, Esc - Clear Search.
       *    * Delete, Backspace - If no value in in search input, hide match results span.
       *    * Enter - Perform search, continuing the press enter cycles through search results.
       *
       *
       * // Note: Good for MVP, but need buttons for mouse and mobile tap events.
       *
       */
      search.addEventListener('keydown', function(e) {
        let q = '';
        match.classList.remove('hidden');
        switch (e.key) {
          case 'Escape':
          case 'Esc':
            resetSearch();
            break;
          case 'Delete':
          case 'Backspace':
            if (this.value.length <= 1) {
              resetSearch();
              match.classList.add('hidden');
            }
            break;
          case 'Enter':
            q = this.value.toLowerCase();
            if (q.length) {
              if (q === query) {
                let thisCycle;
                if (e.shiftKey) {
                  thisCycle = cycle <= 0 ? matches.length - 1 : cycle - 1;
                } else {
                  thisCycle = cycle >= matches.length - 1 ? 0 : cycle + 1;
                }
                cycleSearch(thisCycle);
                return;
              }
              resetSearch();
              searchTranscript(q);
              return;
            }
            resetSearch();
            break;
          default:
          // none
        }
      });
      /** * End Transcript Interactivity M-END */
    }
  }

  plugin.version = '1.0.0';

  const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;
  registerPlugin(id, '1.0.0', plugin);
})();
