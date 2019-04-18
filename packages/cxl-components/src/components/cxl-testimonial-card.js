// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardTestimonialStyles from '../styles/cxl-testimonial-card-css.js';

// Extend the LitElement base class
class CXLTestimonialCard extends LitElement {
  static get properties() {
    return {
      customer_image: {
        type: String
      },
      company_image: {
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
    return cardTestimonialStyles;
  }

  render() {
    return html`
      <div class="entry" part="testimonial">
        <header class="entry__header">
          <p class="customer-image" style="background-image: url('${this.customer_image}');"></p>
          <img class="company-image" src="${this.company_image}"></img>
        </header>
        <div class="entry__content">
          <slot name="content"></slot>
        </div>
        <footer class="entry__footer">
          <slot name="customer-name"></slot>
          <slot name="customer-company"></slot>
        </footer>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-testimonial-card', CXLTestimonialCard);