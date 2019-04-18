// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardLessonStyles from '../styles/cxl-lesson-card-css.js';

// Extend the LitElement base class
class CXLLessonCard extends LitElement {
  static get properties() {
    return {
      lesson_image: {
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
    return cardLessonStyles;
  }

  render() {
    return html`
      <div class="entry" part="lesson">
        <p class="lesson-image" style="background-image: url('${this.lesson_image}');"></p>
        <header class="entry__header" part="content-inside">
          <div class="title">
            <slot name="highlighted-title"></slot>
            <slot class="entry__title" name="lesson-title"></slot>
          </div>
          <slot name="type"></slot>
          <slot name="lesson-length"></slot>
          <slot name="lesson-instructor"></slot>
        </header>
        <div class="entry__content">
          <p class="separator"></p>
          <slot name="lesson-description"></slot>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-lesson-card', CXLLessonCard);
