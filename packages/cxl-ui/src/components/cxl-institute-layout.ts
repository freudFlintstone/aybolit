import { IDeviceDetectorElement } from 'DeviceDetectorElement'
/// <reference path="../types/declarations.d.ts"/>
/**
 * @todo implement primary action button.
 */
import { LitElement, html, customElement, property, query, PropertyValues } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';
import cxlInstituteLayoutGlobalStyles from '../styles/global/cxl-institute-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-progress-bar';

const ASIDE_LOCAL_STORAGE_KEY: string = 'cxl-institute-layout-aside-opened';

@customElement('cxl-institute-layout')
export class CXLInstituteLayout extends LitElement {
  @query('aside')
  asideElement?: HTMLElement;
  
  _asideOpened: boolean = true;
  @property({ type: Boolean })
  get asideOpened() {
    this._asideOpened = JSON.parse(localStorage.getItem(ASIDE_LOCAL_STORAGE_KEY) as string);

    return this._asideOpened === null || this._asideOpened;
  }

  set asideOpened(value) {
    localStorage.setItem(ASIDE_LOCAL_STORAGE_KEY, JSON.stringify(value));

    this.requestUpdate('asideOpened', this._asideOpened);
  }

  // vaadin-device-detector.
  @property({ type: Boolean, reflect: true })
  wide?: boolean;

  static get styles() {
    return [cxlInstituteLayoutStyles];
  }

  render() {
    const asideElement = html`
      <aside
        role="complementary"
        aria-label="Primary sidebar"
        itemscope
        itemtype="https://schema.org/WPSideBar"
        ?opened="${this.asideOpened}"
      >
        <vaadin-button
          aria-label="Toggle sidebar"
          theme="contrast icon"
          @click="${() => {
            this.asideOpened = !this.asideOpened;
          }}"
        >
          <iron-icon icon="lumo:angle-right"></iron-icon>
        </vaadin-button>
        <slot name="sidebar"></slot>
      </aside>
    `;

    const mainElement = html`
      <main role="main" itemprop="mainContentOfPage">
        <slot></slot>
      </main>
    `;

    return html`
      <header role="banner" itemscope itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        ${this.getAttribute('theme') === '2c-l'
          ? html`
              ${mainElement} ${asideElement}
            `
          : html`
              ${asideElement} ${mainElement}
            `}
      </div>

      <footer role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>

      <vaadin-device-detector
        @wide-changed="${(e: Event) => {
          const { wide } = e.target as IDeviceDetectorElement;
          Promise.resolve().then(() => {
            debugger
            this.wide = wide;
          });
        }}"
      ></vaadin-device-detector>
    `;
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlInstituteLayoutGlobalStyles, {
      moduleId: 'cxl-institute-layout-global'
    });
  }
}
