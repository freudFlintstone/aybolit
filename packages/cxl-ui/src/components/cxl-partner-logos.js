import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlPartnerLogosStyles from '../styles/cxl-partner-logos-css.js';

export class CXLPartnerLogosElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlPartnerLogosStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cxl-partner-logos', CXLPartnerLogosElement);
