// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardBannerStyles from '../styles/cxl-banner-card-css.js';

// Extend the LitElement base class
class CXLBannerCard extends LitElement {
  static get properties() {
    return {
      banner_image: {
        type: String
      },
      banner_title: {
        type: String
      },
      banner_description: {
        type: String
      },
      banner_link_label: {
        type: String
      },
      banner_link_url: {
        type: String
      }
    };
  }

  constructor() {
    super();

    // If clicked adds/removes "selected" attribute
    this.addEventListener('click', () => {
      if (this.selected === !this.selected) this.setAttribute('selected', 'selected');
      else this.removeAttribute('selected');
    });
  }

  static get styles() {
    return cardBannerStyles;
  }

  render() {
    return html`
      <div id="content" part="content">
        <p class="banner-image" style="background-image: url('${this.banner_image}');"></p>
        <p class="banner-title">${this.banner_title}</p>
        <small class="banner-description">${this.banner_description}</small>
        <a class="banner-link" href="${this.banner_link_url}">${this.banner_link_label}</a>
      </div>
    `;
  }
}

// Register the new element with the browser.
customElements.define('cxl-banner-card', CXLBannerCard);
