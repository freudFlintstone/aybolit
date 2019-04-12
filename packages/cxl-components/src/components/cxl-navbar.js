// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import navbarStyles from '../styles/cxl-navbar-css.js';

// Extend the LitElement base class
class CXLNavBar extends LitElement {
  static get properties() {
    return {
      navType: {
        type: String
      },
      fixed: {
        type: Boolean,
        value: false,
        reflect: true
      }
    };
  }

  static get styles() {
    return navbarStyles;
  }

  render() {
    return html`
      <nav part="${this.navType}" class="${this.getClass(this.fixed)}">
        <div class="wrap flex">
          <slot></slot>
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

  getClass(fixed) {
    const fixedClass = fixed ? 'fixed ' : '';

    return fixedClass;
  }
}

// Register the new element with the browser.
customElements.define('cxl-navbar', CXLNavBar);
