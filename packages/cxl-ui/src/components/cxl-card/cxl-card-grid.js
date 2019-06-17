import { LitElement, html } from 'lit-element';
import SimpleBar from 'simplebar/dist/simplebar';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlCardGridStyles from '../../styles/cxl-card-grid-css.js';

export class CXLCardGridElement extends LitElement {
  static get properties() {
    return {
      flow: {
        type: String,
        reflect: true
      },
      columns: {
        type: Number
      },
      simplebarObject: {
        type: Object
      },
      originalGridContent: {
        type: String
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlCardGridStyles];
  }

  render() {
    return html`
      <div class="grid-container">
        <div class="wrap">
          <div class="grid">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');

    let gridContainer = this.shadowRoot.querySelector('.grid-container');
    this.originalGridContent = gridContainer.innerHTML;

    if (this.flow === 'horizontal') {
      this._initSimplebar();
    }

    const that = this;

    if (!this.flow || this.flow === 'auto') {
      const mq = window.matchMedia('(max-width: 45em)');

      if (mq.matches) {
        this.flow = 'auto';
        this._initSimplebar(gridContainer);
      }

      mq.addListener(function(changed) {
        gridContainer = that.shadowRoot.querySelector('.grid-container');
        if (changed.matches) {
          that.flow = 'auto';
          that._initSimplebar(gridContainer);
        } else {
          that._destroySimplebar(gridContainer);
        }
      });
    }

    this._setGridColumns();
  }

  _setGridColumns() {
    if (!this.columns) return;

    const gridElement = this.shadowRoot.querySelector('.grid');
    gridElement.style.gridTemplateColumns = `repeat(${this.columns}, minmax(260px, 1fr))`;
  }

  _destroySimplebar(gridContainer) {
    this.flow = null;

    if (!this.simplebarObject) {
      return;
    }

    this.simplebarObject = null;

    if (gridContainer.parentNode) {
      gridContainer.parentNode.removeChild(gridContainer);
    }

    const gridContainerElement = document.createElement('div');
    gridContainerElement.classList.add('grid-container');
    gridContainerElement.innerHTML = this.originalGridContent;
    this.shadowRoot.appendChild(gridContainerElement);

    this._setGridColumns();
  }

  _initSimplebar() {
    const gridContainer = this.shadowRoot.querySelector('.grid-container');

    this.simplebarObject = new SimpleBar(gridContainer, {
      forceVisible: 'x',
      autoHide: false
    });

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrap');

    const scrollElement = this.shadowRoot.querySelector('.simplebar-track.simplebar-horizontal');

    scrollElement.parentNode.insertBefore(wrapper, scrollElement);

    wrapper.appendChild(scrollElement);
  }
}

customElements.define('cxl-card-grid', CXLCardGridElement);
