export default class JWTranscriptPlugin {
  static get version () {
    return '1.0.0'
  }

  static get id() {
    return 'cxlJWTranscript'
  }

  constructor(player) {
    console.log(player.id)
    /**
     * Set global variables for transcript functionality.
     */
    const mediaId = player.id.substring(13, this.length);
    let chapters = [];
    let captions = [];
    let caption = -1;
    let matches = [];
    let query = '';
    let cycle = -1;

    /**
     * Get DOM Elements for Transcript viewer.
     */
    const playerContainer = `jwplayer_container_${mediaId}`;
    const transcriptWrapper = document.querySelector(`#${playerContainer} .transcript-wrapper`);
    const transcript = document.getElementById(`transcript_${mediaId}`);
    const search = document.querySelector(`#${playerContainer} .search`);
    const match = document.querySelector(`#${playerContainer} .match`);
    /**
     * Get text tracks from player_config, pull english for transcript.
     * Note: this only works for Single Item players.
     *
     * @todo refactor for multi-lang.
     */
    const textTracks = window.cxlJWPlayerData[mediaId].media_config.playlist[0].tracks;
    const englishCaptionTrack = textTracks.filter((track) => {
        if (track.kind.includes('captions') && track.label.toLowerCase().includes('english')) {
            return track.file;
        }
    });

    if (!englishCaptionTrack[0].file) {
        return;
    }

    /**
     * Request text track data from JW API
     * Parse file and load into html.
     *
     * @todo refactor: make call and parse serverside
     * @todo drop annvek parser.js, srt2webvtt function, convertSrtCue
     */
    Promise.all([
        new Promise((resolve) => {
            return fetch(englishCaptionTrack[0].file)
                .then(r => r.text())
                .then(t => resolve(t))
        })
    ])
        .then(tracks => tracks.map(track => {
            let vtt = '';
            vtt = (track.indexOf('WEBVTT') === -1) ? srt2webvtt(track) : track;

            const parser = new WebVTTParser();
            const parsedVtt = parser.parse(vtt, 'captions');

            return parsedVtt.cues;

        }))
        .then(parsedData => {
            captions = parsedData[0];
            chapters = player.getCues();
            transcript.innerHTML = loadCaptions(captions, chapters);
            document.querySelector(`#${playerContainer} .searchbox`).classList.remove('hidden');
        }).catch(() => {
        transcript.innerHTML = 'There was an error loading the transcript. Please refresh your window.';
    });

    /**
     * Transcript React to JWPlayer current time.
     * Scroll transcript and highlight current line.
     *
     * @todo refactor DOM selectors after loadCaptions refactor
     */
    player.on('time', function (e) {
        const p = e.position;
        for (let j = 0; j < captions.length; j++) {
            if (captions[j].startTime < p && captions[j].endTime > p) {
                if (j != caption) {
                    const c = document.querySelector(`#${playerContainer} #caption${j}`);
                    if (caption > -1) {
                        document.querySelector(`#${playerContainer} #caption${caption}`).className = '';
                    }
                    c.className = 'current';
                    if (query == '') {
                        transcriptWrapper.scrollTop = c.offsetTop - transcriptWrapper.offsetTop - 40;
                    }
                    caption = j;
                }
                break;
            }
        }
    });

    /**
     * React to user click event on a transcript line.
     * Seek JWPlayer to beginning of clicked transcript line.
     *
     * @todo refactor DOM selectors after loadCaptions refactor
     */
    transcriptWrapper.addEventListener('click', function (e) {
        if (e.target.id.indexOf('caption') === 0) {
            const i = Number(e.target.id.replace('caption', ''));
            player.seek(captions[i].startTime).play();
        }
        if (e.target.id.indexOf('chapter') === 0) {
            const i = Number(e.target.id.replace('chapter', ''));
            player.seek(i).play();
        }
    });

    /**
     * React to user focus.
     * Note: Note fully sure what this step does, besides select search input after 100ms.
     *
     * @todo determine if necessary.
     */
    search.addEventListener('focus', () => setTimeout(() => search.select(), 100));

    /**
     * React to user keyboard events on search input.
     * Switch:
     *  Case:
     *    * Escape, Esc - Clear Search.
     *    * Delete, Backspace - If no value in in search input, hide match results span.
     *    * Enter - Perform search, continuing the press enter cycles through search results.
     * Note: Good for MVP, but need buttons for mouse and mobile tap events.
     *
     * @todo refactor 'enter' cycle search to also be used with buttons
     */
    search.addEventListener('keydown', function (e) {
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
                            thisCycle = cycle <= 0 ? (matches.length - 1) : (cycle - 1);
                        } else {
                            thisCycle = (cycle >= matches.length - 1) ? 0 : (cycle + 1);
                        }
                        cycleSearch(match, thisCycle);
                        return;
                    }
                    resetSearch();
                    searchTranscript(captions, match, q);
                    return;
                }
                resetSearch();
                break;
            default:

        }
    });

    /**
     * Parse HTML from Chapter and Caption WebVTT Files.
     *
     * @todo refactor DOM selectors
     * @todo remove chapters from transcripts
     */
    function loadCaptions(captions, chapters) {
        let h = '<p>';
        let section = 0;
        captions.forEach((caption, i) => {
            if (section < chapters.length && caption.startTime > chapters[section].begin) {
                h += `</p><h4 id="chapter${chapters[section].begin}">${chapters[section].text}</h4><p>`;
                section++;
            }
            h += `<span id="caption${i}">${caption.text}</span>`;
        });
        return `${h  }</p>`;
    }

    /**
     * Search functionality for transcript.
     * @param {string} q - Accepts transcript search (q)uery
     *
     * @todo refactor DOM selectors after loadCaptions refactor
     */
    function searchTranscript(captions, match, q) {
        matches = [];
        query = q;
        captions.forEach(( {text}, loc) => {
            if (text) {
                const matchSpot = text.toLowerCase().indexOf(q);
                if (matchSpot > -1) {
                    const replacer = sanitizeRegex(q);
                    document.querySelector(`#${playerContainer} #caption${loc}`).innerHTML = text
                        .replace(new RegExp(`(${replacer})`, 'gi'), '<em>$1</em>');
                    matches.push(loc);
                }
            }
        });
        if (matches.length) {
            cycleSearch(match, 0);
        } else {
            match.classList.add('hidden');
            resetSearch();
        }
    }

    function sanitizeRegex(q) {
        return q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Allows user to press 'Enter' to jump to the next matched search result.
     * @param {number} i - Accepts (i)ndex of matched search item.
     *
     * @todo refactor DOM selectors after loadCaptions refactor
     */
    function cycleSearch(match, i) {
        if (cycle > -1) {
            const o = document.querySelector(`#${playerContainer} #caption${matches[cycle]}`);
            o.querySelector(`#${playerContainer} em`).classList.remove('current');
        }
        const c = document.querySelector(`#${playerContainer} #caption${~~matches[i]}`);
        c.querySelector(`#${playerContainer} em`).classList.add('current');
        match.textContent = `${i + 1} of ${matches.length}`;
        transcriptWrapper.scrollTop = c.offsetTop - transcriptWrapper.offsetTop - 40;
        cycle = i;
    }

    /**
     * Utility function to reset for another search query.
     *
     * @todo refactor DOM selectors after loadCaptions refactor
     */
    function resetSearch() {
        if (matches.length) {
            captions.forEach((caption, i) => {
                document.querySelector(`#${playerContainer} #caption${~~i}`).textContent = caption.text;
            });
        }
        query = '';
        matches = [];
        match.textContent = '0 of 0';
        cycle = -1;
        transcript.scrollTop = 0;
    }

    /**
     * Convert SRT Cue to VTT Format.
     *
     * @todo refactor this to PHP and remove.
     *
     * @param caption
     * @returns {string}
     */
    function convertSrtCue(caption) {
        let cue = "";
        const s = caption.split(/\n/);

        // concatenate muilt-line string separated in array into one
        while (s.length > 3) {
            for (let i = 3; i < s.length; i++) {
                s[2] += `\n${  s[i]}`
            }
            s.splice(3, s.length - 3);
        }

        let line = 0;

        // detect identifier
        if (!s[0].match(/\d+:\d+:\d+/) && s[1].match(/\d+:\d+:\d+/)) {
            cue += `${s[0].match(/\w+/)  }\n`;
            line += 1;
        }

        // get time strings
        if (s[line].match(/\d+:\d+:\d+/)) {
            // convert time string
            const m = s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);
            if (m) {
                cue += `${m[1]  }:${  m[2]  }:${  m[3]  }.${  m[4]  } --> ${
                    m[5]  }:${  m[6]  }:${  m[7]  }.${  m[8]  }\n`;
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
            cue += `${s[line]  }\n\n`;
        }

        return cue;
    }

    /**
     * Utility function to convert .SRT caption files to WEBVTT format.
     * Via Github @silviapfeiffer
     *
     * @todo refactor this to PHP and remove.
     */
    function srt2webvtt(data) {
        // remove dos newlines
        let srt = data.replace(/\r+/g, '');
        // trim white space start and end
        srt = srt.replace(/^\s+|\s+$/g, '');

        // get cues
        const cuelist = srt.split('\n\n');
        let result = "";

        if (cuelist.length > 0) {
            result += "WEBVTT\n\n";
            for (let i = 0; i < cuelist.length; i += 1) {
                result += convertSrtCue(cuelist[i]);
            }
        }

        return result;
    }
  }
}

// export default JWTranscriptPlugin;
