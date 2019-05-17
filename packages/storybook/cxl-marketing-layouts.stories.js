import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing';

storiesOf('CXL Marketing Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-marketing-layout', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-navbar id="topnav" navtype="topnav" theme="topnav">
          <vaadin-button theme="cxl-button small contrast" tabindex="0" role="button"
            >Get free trial</vaadin-button
          >
        </cxl-navbar>
        <div class="wrap" style="height: 1500px">
          <h1>h1: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h1>
          <h2>h2: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h2>
          <h3>h3: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h3>
          <h4>h4: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h4>
        </div>
        <cxl-navbar id="bottomnav" navtype="bottomnav" theme="bottomnav">
          <vaadin-button theme="primary cxl-button margin-right" onclick="window.location.href='#'"
            >Get free trial</vaadin-button
          >
          <vaadin-button
            theme="primary cxl-button cxl-transparent"
            onclick="window.location.href='#'"
            >Download syllabus</vaadin-button
          >
        </cxl-navbar>
      </cxl-marketing-layout>
    `;
  });
