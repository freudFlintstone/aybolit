import { html } from 'lit-element';
import { render } from 'lit-html';
import '@vaadin/vaadin-dialog';
import { CXLBaseCard } from './cxl-base-card.js';
import trainingCardStyles from '../../styles/cxl-training-card-css.js';

export class CXLTrainingCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, trainingCardStyles];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean
      },
      video: {
        type: String
      }
    };
  }

  constructor() {
    super();

    this.addEventListener('click', () => {
      this.open();
    });

    this._boundDialogRenderer = this.dialogRenderer.bind(this);
  }

  render() {
    // TODO: get HTML from cxl-base-card
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

      <vaadin-dialog
        id="video"
        theme="video"
        ?opened="${this.opened}"
        @opened-changed="${this._onOpenedChanged}"
        .renderer="${this._boundDialogRenderer}"
      >
      </vaadin-dialog>
    `;
  }

  _onOpenedChanged(e) {
    this.opened = e.detail.value;
  }

  open() {
    this.opened = true;
  }

  dialogRenderer(root) {
    render(
      html`
        <iframe
          src="${this.video}"
          width="800"
          height="440"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      `,
      root
    );
  }
}

customElements.define('cxl-training-card', CXLTrainingCard);
