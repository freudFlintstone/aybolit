import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';

export default {
  title: 'CXL UI|Jobs'
};

export const CxlAppLayout = () => {
  return html`
    <cxl-app-layout id="container" theme="cxl-jobs-home">
      <cxl-marketing-nav class="menu menu-primary" slot="header" theme="cxl-jobs-nav">
        <vaadin-tabs
          id="menu-global-items"
          class="menu-items"
          orientation="horizontal"
          selected="-1"
          theme="cxl-jobs-nav"
        >
          <vaadin-tab class="menu-item menu-item-logo menu-item-wide">
            <a href="https://conversionxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
            ></a>
          </vaadin-tab>

          <vaadin-tab class="menu-item-split-nav menu-item"><a>Current Openings </a></vaadin-tab>

          <vaadin-tab class="menu-item"><a>Internship</a></vaadin-tab>

          <vaadin-tab class="menu-item"><a>Offices</a></vaadin-tab>

          <vaadin-tab class="menu-item"><a>About</a></vaadin-tab>

          <vaadin-tab class="menu-item"
            ><a><vaadin-button theme="primary">See current openings</vaadin-button></a></vaadin-tab
          >
        </vaadin-tabs></cxl-marketing-nav
      >

      <article class="entry">
        <header class="entry-header">
          <h1 class="entry-title">
            <em>C</em><span style="color: var(--lumo-primary-color)">XL</span> jobs
          </h1>
          <div class="entry-byline">
            <p class="statement">
              CXL Jobs is the world's largest data-based marketers' community on the web to find
              marketing jobs and people who value a data-bsed approach.
            </p>
          </div>
        </header>

        <div class="entry-content" itemprop="text">
          <vaadin-tabs>
            <vaadin-tab>Job offers</vaadin-tab>
            <vaadin-tab>Find Employees</vaadin-tab>
          </vaadin-tabs>
        </div>
      </article>
    </cxl-app-layout>
  `;
};

CxlAppLayout.story = {
  name: 'cxl-jobs-home'
};
