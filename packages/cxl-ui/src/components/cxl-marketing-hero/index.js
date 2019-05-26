// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './theme.js';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlMarketingHeroStyles from '../../styles/cxl-marketing-hero-css.js';

// Extend the LitElement base class
class CXLMarketingHeroElement extends LitElement {
  static get properties() {
    return {
      backgroundImage: {
        type: String,
        attribute: 'background-image'
      },
      backgroundColor: {
        type: String,
        attribute: 'background-color'
      },
      heroStyle: {
        type: String,
        attribute: 'hero-style'
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlMarketingHeroStyles];
  }

  render() {
    return html`
      <div class="wrap">
        <slot name="topnav"></slot>
        <div class="bgimage"></div>
        <div part="hero-content">
          <slot></slot>
        </div>
        <slot name="bottomnav"></slot>
      </div>
      ${this.heroStyle === 'waves'
        ? html`
            <svg class="waves" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2054 128.79c-106.66 2.043-211.23 3.9-317.46 12.811-138.06 11.581-273.38 4.22-407.8-23.61C1134.57 77.796 984.18 17.54 742.28 14.259 565.44 11.857 259.72 7.614 0 0v246.37h2560c-65.21-27.369-126.32-63.768-195.36-84.649-98.3-29.68-205.7-34.945-310.64-32.932z"
                fill="#fff"
              ></path>
            </svg>
          `
        : ''}
    `;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('.wrap .bgimage').style.backgroundImage = `url(${
      this.backgroundImage
    })`;
    this.style.backgroundColor = this.backgroundColor;

    if (this.heroStyle === 'waves') {
      document.querySelector('cxl-marketing-nav[nav-type="bottomnav"]').setAttribute('waves', '');
    }
  }
}

// Register the new element with the browser.
customElements.define('cxl-marketing-hero', CXLMarketingHeroElement);
