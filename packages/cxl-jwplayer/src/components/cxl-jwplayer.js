import { LitElement, html, customElement } from 'lit-element';
import cxlJwplayerStyles from '../styles/cxl-jwplayer-css.js';

@customElement('cxl-jwplayer')
export class CxlJwPlayer extends LitElement {
  static get styles() {
    return [cxlJwplayerStyles];
  }

  static get properties() {
    return {};
  }

  render() {
    return html``;
  }
}
