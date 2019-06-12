import { CXLBaseCard } from './cxl-base-card.js';
import lessonCardStyles from '../../styles/cxl-lesson-card-css.js';

export class CXLLessonCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, lessonCardStyles];
  }
}

customElements.define('cxl-lesson-card', CXLLessonCard);
