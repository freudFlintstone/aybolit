import { CXLBaseCard } from './cxl-base-card.js';

export class CXLTestimonialCard extends CXLBaseCard {
  static get styles() {
    return [super.styles];
  }
}

customElements.define('cxl-testimonial-card', CXLTestimonialCard);
