import { customElement, LitElement, html } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlJobsFeaturedBannerStyles from '../styles/cxl-jobs-featured-banner-css.js';
import cxlJobsFeaturedBannerGlobalStyles from '../styles/global/cxl-jobs-featured-banner-css.js';

@customElement('cxl-jobs-featured-banner')
export class CXLJobsFeaturedBanner extends LitElement {
  static get styles() {
    return [cxlJobsFeaturedBannerStyles];
  }

  constructor() {
    super();
    registerGlobalStyles(cxlJobsFeaturedBannerGlobalStyles, {
      moduleId: 'cxl-jobs-featured-banner-global'
    });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
