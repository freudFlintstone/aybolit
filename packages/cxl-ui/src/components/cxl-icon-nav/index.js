// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './theme.js';
import './cxl-icon-nav-item.js';
import '@vaadin/vaadin-dialog';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';

class CXLIconNavElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles];
  }

  render() {
    return html`
      <vaadin-tabs theme="cxl-icon-nav" orientation="horizontal">
        <slot></slot>
      </vaadin-tabs>
    `;
  }

  firstUpdated() {
    const vaadinTabsElement = this.shadowRoot.querySelector('vaadin-tabs');

    let width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this._changeTabOrientation(vaadinTabsElement, width);

    const that = this;
    window.addEventListener('resize', () => {
      width = document.body.clientWidth;
      that._changeTabOrientation(vaadinTabsElement, width);
    });
  }

  _changeTabOrientation(tabsElement, width) {
    let orientation = 'vertical';

    if ( width < 720 ) {
      orientation = 'horizontal';
    }

    tabsElement.setAttribute( 'orientation', orientation );
  }
}

customElements.define('cxl-icon-nav', CXLIconNavElement);
