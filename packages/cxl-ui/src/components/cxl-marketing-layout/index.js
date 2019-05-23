// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '../cxl-marketing-nav';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';

export class CXLMarketingLayoutElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cxl-marketing-layout', CXLMarketingLayoutElement);
