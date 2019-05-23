// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';

class CXLMarketingNavItemElement extends LitElement {
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

customElements.define('cxl-marketing-nav-item', CXLMarketingNavItemElement);
