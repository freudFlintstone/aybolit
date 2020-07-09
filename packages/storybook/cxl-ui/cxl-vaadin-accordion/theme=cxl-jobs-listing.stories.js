import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export default {
  title: 'CXL UI|cxl-vaadin-accordion'
};

export const CxlVaadinAccordionThemeJobsListing = () => {
  return html`
    <cxl-vaadin-accordion
      id="cxl-vaadin-accordion-26107"
      class="plural"
      theme="reverse cxl-jobs-listing"
    >
      <vaadin-accordion-panel id="1" class="entry" theme="reverse cxl-jobs-listing">
        <header class="entry-header" slot="summary">
          <h3 class="entry-title">
            <a>Wordpress Developer extralong title for sure</a>
          </h3>
          <div class="location">
            <span class="highlighted">CXL</span>
            <span>Any office</span>
            <span>Remote</span>
          </div>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>Job description details</p>
          <p>Job description details</p>
        </div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel id="1" class="entry" theme="reverse cxl-jobs-listing">
        <header class="entry-header" slot="summary">
          <h3 class="entry-title">
            <a>Content Marketer</a>
          </h3>
          <div class="location">
            <span class="highlighted">HubSpot</span>
            <span>Any office</span>
            <span>Remote</span>
          </div>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>Job description details</p>
          <p>Job description details</p>
        </div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel id="1" class="entry" theme="reverse cxl-jobs-listing">
        <header class="entry-header" slot="summary">
          <h3 class="entry-title">
            <a>Quality Assurance tester</a>
          </h3>
          <div class="location">
            <span class="highlighted">Taxify</span>
            <span>Estonia</span>
            <span>Tallinn</span>
          </div>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>Job description details</p>
          <p>Job description details</p>
        </div>
      </vaadin-accordion-panel>
    </cxl-vaadin-accordion>
  `;
};

CxlVaadinAccordionThemeJobsListing.story = {
  name: '[theme=cxl-jobs-listing]'
};
