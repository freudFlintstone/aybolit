// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './theme.js';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlMarketingNavStyles from '../../styles/cxl-marketing-nav-css.js';

class CXLMarketingNavElement extends LitElement {
  static get properties() {
    return {
      navType: {
        type: String,
        attribute: 'nav-type'
      },
      fixed: {
        type: Boolean,
        value: false,
        reflect: true
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlMarketingNavStyles];
  }

  render() {
    return html`
      <nav part="${this.navType}" class="${this.fixed ? 'fixed' : ''}">
        ${this.navType === 'topnav'
          ? html`
              <slot></slot>
            `
          : html`
              <div class="wrap">
                <slot></slot>
              </div>
            `}
      </nav>
    `;
  }

  firstUpdated() {
    const that = this;
    document.querySelector('body').addEventListener('scroll', function() {
      if (!that._isScrolledIntoView(that)) {
        that.setAttribute('fixed', '');
      } else {
        that.removeAttribute('fixed');
      }
    });
  }

  _isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const isVisible = elemTop >= 0;

    return isVisible;
  }
}

customElements.define('cxl-marketing-nav', CXLMarketingNavElement);
