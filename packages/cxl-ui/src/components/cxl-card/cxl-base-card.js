import { LitElement, html } from 'lit-element';
import baseCardStyles from '../../styles/cxl-base-card-css.js';

export class CXLBaseCard extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [baseCardStyles];
  }

  render() {
    return html`
      <header>
        <slot name="thumbnail"></slot>
        <div part="header-right">
          <slot name="header-right"></slot>
        </div>
      </header>
      <slot name="title"></slot>
      <slot name="content"></slot>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}
