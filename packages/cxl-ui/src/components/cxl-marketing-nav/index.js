// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './theme.js';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlMarketingNavStyles from '../../styles/cxl-marketing-nav-css.js';

class CXLMarketingNavElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlMarketingNavStyles];
  }

  render() {
    return html`
      <nav part="topnav">
        <div class="wrap">
          <div class="logo">
            <slot name="topnav-logo"></slot>
          </div>
          <div class="nav-items">
            <slot></slot>
          </div>
        </div>
      </nav>
    `;
  }

  firstUpdated() {}
}

customElements.define('cxl-marketing-nav', CXLMarketingNavElement);
