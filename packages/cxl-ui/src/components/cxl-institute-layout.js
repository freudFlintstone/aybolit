// / <reference path="../types/declarations.d.ts"/>
/**
 * @todo implement primary action button.
 */
import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';
import cxlInstituteLayoutGlobalStyles from '../styles/global/cxl-institute-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-progress-bar';

const __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    const c = arguments.length; let r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc; let d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const ASIDE_LOCAL_STORAGE_KEY = 'cxl-institute-layout-aside-opened';
const CXLInstituteLayout = /** @class */ (() => {
    let CXLInstituteLayout = class CXLInstituteLayout extends LitElement {
        constructor() {
            super(...arguments);
            this._asideOpened = true;
        }

        get asideOpened() {
            this._asideOpened = JSON.parse(localStorage.getItem(ASIDE_LOCAL_STORAGE_KEY));
            return this._asideOpened === null || this._asideOpened;
        }

        set asideOpened(value) {
            localStorage.setItem(ASIDE_LOCAL_STORAGE_KEY, JSON.stringify(value));
            this.requestUpdate('asideOpened', this._asideOpened);
        }

        static get styles() {
            return [cxlInstituteLayoutStyles];
        }

        render() {
            const asideElement = html `
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
            const mainElement = html `
      <main role="main" itemprop="mainContentOfPage">
        <slot></slot>
      </main>
    `;
            return html `
      <header role="banner" itemscope itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        ${this.getAttribute('theme') === '2c-l'
                ? html `
              ${mainElement} ${asideElement}
            `
                : html `
              ${asideElement} ${mainElement}
            `}
      </div>

      <footer role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>

      <vaadin-device-detector
        @wide-changed="${(e) => {
                const { wide } = e.target;
                Promise.resolve().then(() => {
                    debugger;
                    this.wide = wide;
                });
            }}"
      ></vaadin-device-detector>
    `;
        }

        firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            // Global styles.
            registerGlobalStyles(cxlInstituteLayoutGlobalStyles, {
                moduleId: 'cxl-institute-layout-global'
            });
        }
    };
    __decorate([
        query('aside')
    ], CXLInstituteLayout.prototype, "asideElement", void 0);
    __decorate([
        property({ type: Boolean })
    ], CXLInstituteLayout.prototype, "asideOpened", null);
    __decorate([
        property({ type: Boolean, reflect: true })
    ], CXLInstituteLayout.prototype, "wide", void 0);
    CXLInstituteLayout = __decorate([
        customElement('cxl-institute-layout')
    ], CXLInstituteLayout);
    return CXLInstituteLayout;
})();
export { CXLInstituteLayout };
