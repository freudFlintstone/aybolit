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
      },
      mobileNav: {
        type: Boolean,
        value: false
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlMarketingNavStyles];
  }

  render() {
    return html`
      <slot name="cxl-logo"></slot>
      <nav part="${this.navType}" class="${this.fixed ? 'fixed' : ''}">
        ${this.navType === 'topnav'
          ? html`
              <div class="wrap">
                <slot></slot>
              </div>
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

    if (this.navType === 'topnav') {
      const mobileNavButtons = [
        document.querySelector(
          'cxl-marketing-nav vaadin-tabs vaadin-tab[theme="cxl-marketing-nav-tab cxl-mobile-icon"] a'
        ),
        document.querySelector(
          'cxl-marketing-nav vaadin-tabs vaadin-tab[theme="cxl-marketing-nav-tab cxl-mobile-nav-icon"] a'
        )
      ];

      mobileNavButtons.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
          e.preventDefault();
          that.toggleMobileNav();
        });
      });
    }
  }

  _isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const isVisible = elemTop >= 0;

    return isVisible;
  }

  toggleMobileNav() {
    this.mobileNav = !this.mobileNav;

    this.setAttribute('orientation', 'horizontal');
    this.querySelector('vaadin-tabs').setAttribute('orientation', 'horizontal');

    if (this.mobileNav) {
      this.setAttribute('orientation', 'vertical');
      this.querySelector('vaadin-tabs').setAttribute('orientation', 'vertical');
    }
  }
}

customElements.define('cxl-marketing-nav', CXLMarketingNavElement);
