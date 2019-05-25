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
        <div class="wrap">
          ${this.navType === 'topnav'
            ? html`
                <div class="logo">
                  <slot name="topnav-logo"></slot>
                </div>
                <div class="nav-items">
                  <slot></slot>
                </div>
                <div class="nav-items mobile">
                  <vaadin-item>
                    <a href="#">
                      <iron-icon class="icon size-l" icon="lumo:menu"></iron-icon>
                    </a>
                  </vaadin-item>
                </div>
              `
            : html`
                <div class="nav-items">
                  <slot></slot>
                </div>
              `}
        </div>
      </nav>
    `;
  }

  scroll() {
    if (!this.isScrolledIntoView(this)) {
      this.setAttribute('fixed', '');
    } else {
      this.removeAttribute('fixed');
    }
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const isVisible = elemTop >= 0;

    return isVisible;
  }
}

customElements.define('cxl-marketing-nav', CXLMarketingNavElement);
