import { LitElement, html, customElement, property } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
// import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlJwplayerStyles from '../styles/cxl-jwplayer-css.js';
// import cxlJwplayerGlobalStyles from '../styles/global/cxl-jwplayer-css.js';

@customElement('cxl-jwplayer')
export class CxlJwPlayer extends LitElement {
  static get styles() {
    return [cxlJwplayerStyles];
  }

  @property({ type: Object })
  player = null;

  @property({ type: Object })
  config = {};

  @property({ type: String })
  mediaId = '';

  constructor() {
    super();
    this.jwplayer = window.jwplayer || null;
    if (!this.jwplayer) console.error('JWPlayer library not found.');
  }

  /*
   * Implemented to avoid default, which attaches a shadowDOM tree byt default.
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h2>cxl-jwplayer</h2>
      <div id="cxl-jwplayer-container" class="cxl-jwplayer-container">
        <div id="cxl-jwplayer" class="cxl-jwplayer jwplayer"></div>
        ${this.config.transcript
          ? html`
              <div id="cxl-transcript-container" class="transcript-container">
                <div id="searchbox" class="searchbox">
                  <input
                    id="search"
                    type="search"
                    class="search"
                    autocomplete="off"
                    results="5"
                    placeholder="Type and press enter to search"
                  />
                  <span id="match" class="match hidden">0 of 0</span>
                </div>
                <div class="jw-aspect jw-reset"></div>
                <div class="transcript-wrapper">
                  <div id="transcript" class="transcript"></div>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  firstUpdated() {
    // Run player setup if minimal requirements are met
    // Bail if jwplayer is not loaded or mediaId is not set
    if (!this.jwplayer || !this.mediaId) return;

    this.setupPlayer();
  }

  setupPlayer() {
    /**
     *
     * Configure and Setup the Player
     *
     */
    // Fetched via GET request to JW Platform
    // One video is an object. Multiple videos is an array of objects.
    // Paths are hard coded for now, while developing this implementation.
    const data = {
      config: {
        playlist: [
          {
            file: `https://cdn.jwplayer.com/manifests/${this.mediaId}.m3u8`,
            image: `https://cdn.jwplayer.com/thumbs/${this.mediaId}-720.jpg`,
            tracks: [
              {
                file: `https://cdn.jwplayer.com/strips/${this.mediaId}-120.vtt`,
                kind: 'thumbnails'
              },
              {
                file: 'https://assets-jpcust.jwpsrv.com/tracks/HujCQO8E',
                kind: 'captions',
                label: 'English',
                language: 'en_US'
              },
              {
                file: 'https://content.jwplatform.com/tracks/qb36nsWb.vtt', // need to be able to set these dynamically...
                kind: 'chapters'
              }
            ]
          }
        ]
      }
    };

    const { config } = data;
    config.plugins = {};

    /**
     *
     * Conditionally load plugins
     *
     */
    // let hasChapters = false;
    // let hasCaptions = false;
    // const { tracks } = config.playlist[0];

    // tracks.forEach(track => {
    //   if (track.kind.startsWith('chapters')) {
    //     hasChapters = true;
    //   }
    //   if (track.kind.startsWith('captions')) {
    //     hasCaptions = true;
    //   }
    // });

    // How these are loaded in php is different. We do the plugin name = true
    // We use WP to enqueue the scripts, but here we have to init from the jw setup config.
    // EX: config.plugins['cxlJWChapters'] = true.
    // if (hasChapters) {
    //   config.plugins['../plugins/cxlJWChapters.js'] = 'cxlJWChapters';
    // }
    // if (hasCaptions) {
    //   config.plugins['../plugins/cxlJWTranscript.js'] = 'cxlJWTranscript';
    // }

    config.controls = true;
    config.playbackRateControls = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    config.displaydescription = false;

    config.skin = {
      name: 'cxl-institute'
    };

    const playerDiv = this.querySelector('#cxl-jwplayer');
    this.config = config;
    this.player = this.jwplayer(playerDiv).setup(config);
  }
}
