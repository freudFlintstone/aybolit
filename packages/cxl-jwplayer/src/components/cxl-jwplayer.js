import { LitElement, html, customElement, property } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import CXLJWPlayerGlobalStyles from '../styles/global/cxl-jwplayer-css.js';

@customElement('cxl-jwplayer')
export class CXLJWPlayer extends LitElement {
  @property({ type: Object })
  player = null;

  @property({ type: Object })
  config = {};

  @property({ type: String })
  mediaId = '';

  constructor() {
    super();
    this.jwplayer = window.jwplayer || null;
    // eslint-disable-next-line no-console
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
      <div id="jwplayer_container_${this.mediaId}" class="cxl-jwplayer-container">
        <div id="cxl_jwplayer_${this.mediaId}" class="cxl-jwplayer"></div>
        ${this.config.transcript
          ? html`
              <div id="cxl_transcript_container" class="transcript-container">
                <div id="searchbox" class="searchbox">
                  <iron-icon icon="lumo:search"></iron-icon>
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
                  <div id="transcript_${this.mediaId}" class="transcript"></div>
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

    registerGlobalStyles(CXLJWPlayerGlobalStyles, {
      moduleId: 'cxl-jwplayer-global',
    });
  }

  /**
   *
   * Configure and Setup the Player using config object assigned by parent
   *
   */
  setupPlayer() {
    if (!Object.keys(this.config).length || !this.config.media_config) {
      // eslint-disable-next-line no-console
      console.warn('No media config data for player setup.');
    }

    const playerDiv = this.querySelector(`#cxl_jwplayer_${this.mediaId}`);
    this.loadPlugins();
    this.player = this.jwplayer(playerDiv).setup(this.config.media_config);
  }

  /**
   *
   * Check config and load necessary plugins
   *
   */
  loadPlugins() {
    const setup = this.config;
    const config = setup.media_config;
    const plugins = Object.keys(setup.plugins);
    // Check all tracks against available plugins
    plugins.forEach(async (plugin) => {
      if (!config.plugins[plugin] || plugin.indexOf('-') !== -1) return;
      config.plugins[plugin] = true;
    });
    setup.media_config = config;
  }
}
