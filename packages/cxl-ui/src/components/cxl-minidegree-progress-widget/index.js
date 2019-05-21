import { LitElement, html } from 'lit-element';
import './theme.js';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-tabs';
import './cxl-vaadin-accordion.js';

export class CXLMinidegreeProgressWidgetElement extends LitElement {
  render() {
    return html`
      <cxl-vaadin-accordion>
        <slot></slot>
      </cxl-vaadin-accordion>
    `;
  }
}

customElements.define('cxl-minidegree-progress-widget', CXLMinidegreeProgressWidgetElement);
