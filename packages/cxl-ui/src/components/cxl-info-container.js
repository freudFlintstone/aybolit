import { customElement, LitElement, html } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlInfoContainerStyles from '../styles/cxl-info-container-css.js';

@customElement('cxl-info-container')
export class CXLInfoContainer extends LitElement {
  static get styles() {
    return [cxlInfoContainerStyles];
  }

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}
