import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import cxlIconNav from './templates/cxl-icon-nav';
import cxlMinidegreeProgressWidget from './templates/cxl-minidegree-progress-widget';
import cxlInstituteContentHeader from './templates/cxl-institute-content-header';
import trainingVideoContent from './templates/content/training-video';

import '@conversionxl/cxl-institute';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-institute-layout (cxl-minidegree-progress-widget)', () => {
    return html`
      <cxl-institute-layout>
        <vaadin-dialog theme="cxl-search-overlay">
          <template>
            <iron-icon class="icon size-l" icon="lumo:cross"></iron-icon>
            <form
              role="search"
              method="get"
              class="search-form"
              action="https://conversionxl.com/institute/"
            >
              <label>
                <span class="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  class="search-field"
                  placeholder="Search …"
                  value=""
                  name="s"
                />
              </label>
              <input type="submit" class="search-submit" value="Search" />
            </form>
          </template>
        </vaadin-dialog>
        <!-- <cxl-icon-nav> -->
        ${cxlIconNav}
        <div slot="sidebar-content">
          ${cxlMinidegreeProgressWidget}
        </div>

        <cxl-institute-content>
          ${cxlInstituteContentHeader}
          ${trainingVideoContent}
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  });
