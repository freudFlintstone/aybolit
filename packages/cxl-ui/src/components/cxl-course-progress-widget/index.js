import { LitElement, html } from 'lit-element';
import './theme.js';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-progress-bar';
import '@vaadin/vaadin-tabs';

export class CXLCourseProgressWidgetElement extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cxl-course-progress-widget', CXLCourseProgressWidgetElement);
