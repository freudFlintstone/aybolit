import { CXLBaseCard } from './cxl-base-card.js';

export class CXLCourseCard extends CXLBaseCard {
  static get styles() {
    return [super.styles];
  }
}

customElements.define('cxl-course-card', CXLCourseCard);
