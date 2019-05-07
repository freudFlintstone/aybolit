import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-institute';

storiesOf('Tables (vaadin-grid)', module)
  .addDecorator(withKnobs)
  .add('cxl-grid', () => {
    return html`
      <cxl-grid>
        <vaadin-grid theme="cxl-grid no-border" style="margin: 30px;">
          <vaadin-grid-column
            path="order-number"
            header="Order"
            class="order-number"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="order-date"
            header="Date"
            class="order-date"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="order-status"
            header="Status"
            class="order-status"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="order-total"
            header="Total"
            class="order-total"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="order-actions"
            header="&nbsp;"
            class="order-actions"
          ></vaadin-grid-column>
        </vaadin-grid>
      </cxl-grid>
    `;
  });
