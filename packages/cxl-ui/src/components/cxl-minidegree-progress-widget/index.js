import { LitElement, html } from 'lit-element';
import './theme.js';
import '@vaadin/vaadin-item';
import '../cxl-course-progress-widget/index.js';
import './cxl-vaadin-accordion.js';

export class CXLMinidegreeProgressWidgetElement extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cxl-minidegree-progress-widget', CXLMinidegreeProgressWidgetElement);
