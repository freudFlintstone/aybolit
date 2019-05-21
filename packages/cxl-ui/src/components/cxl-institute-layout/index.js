// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './theme.js';
import '@vaadin/vaadin-tabs';
import '../cxl-institute-content.js';
import '../cxl-institute-content-header.js';
import '../cxl-icon-nav';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlInstituteLayoutStyles from '../../styles/cxl-institute-layout-css.js';

export class CXLInstituteLayoutElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteLayoutStyles];
  }

  render() {
    return html`
      <!-- Visible on mobile -->
      <header part="mobile-header">
        <a href="/" class="logo">
          <span class="cxl">C<span>XL</span></span>
        </a>
        <h3>Something something</h3>
      </header>

      <!-- Visible on mobile -->
      <vaadin-tabs
        id="tabs"
        part="tabs"
        theme="equal-width-tabs cxl-institute-layout-tabs"
        selected="1"
      >
        <vaadin-tab @click="${() => this.changeTab('sidebar')}">Menu</vaadin-tab>
        <vaadin-tab @click="${() => this.changeTab('content')}">Something here</vaadin-tab>
      </vaadin-tabs>

      <nav part="icon-nav">
        <slot name="icon-nav"></slot>
      </nav>

      <div part="sidebar">
        <header>
          <slot name="sidebar-header"></slot>
        </header>

        <slot name="sidebar-content"></slot>
      </div>

      <main part="content" page-visible>
        <slot></slot>
      </main>
    `;
  }

  firstUpdated() {
    this.changeTab('content');
  }

  changeTab(tab) {
    this.shadowRoot.querySelector('[page-visible]').removeAttribute('page-visible');
    this.shadowRoot.querySelector(`[part=${tab}]`).setAttribute('page-visible', '');
  }
}

customElements.define('cxl-institute-layout', CXLInstituteLayoutElement);
