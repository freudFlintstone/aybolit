import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-marketing-layout', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-nav>
          <vaadin-item theme="cxl-marketing-nav-item" slot="topnav-logo">
            <a href="">
              <iron-icon class="icon size-l" icon="cxl:logo"></iron-icon>
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              For teams
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              Blog
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              About
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              CRO Services
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              Login
            </a>
          </vaadin-item>
          <vaadin-item theme="cxl-marketing-nav-item">
            <a href="">
              <vaadin-button theme="cxl-button small contrast" role="button"
                >Get free trial</vaadin-button
              >
            </a>
          </vaadin-item>
        </cxl-marketing-nav>
      </cxl-marketing-layout>
    `;
  });
