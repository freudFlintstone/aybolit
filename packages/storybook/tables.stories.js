import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-institute';

storiesOf('Tables (vaadin-grid)', module)
  .addDecorator(withKnobs)
  .add('cxl-grid (Orders)', () => {
    return html`
      <p>https://conversionxli.warmpress.com/my-account/orders/</p>
      <cxl-grid
        grid-data='[{"order-number":"<a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1031988\/\\">#25<\/a>","order-date":"May 6, 2019","order-status":"Completed","order-total":"<span class=\\"woocommerce-Price-amount amount\\"><span class=\\"woocommerce-Price-currencySymbol\\">$<\/span>3745<\/span> for 6 items","order-actions":{"view":{"url":"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1031988\/","name":"View"},"invoice":{"url":"https:\/\/conversionxli.warmpress.com\/wp-admin\/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=1031988&my-account&_wpnonce=c6ca952c94","name":"Download invoice (PDF)"}}}]'
      >
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
  })
  .add('cxl-grid (Memberships)', () => {
    return html`
      <p>https://conversionxli.warmpress.com/my-account/members-area/</p>
      <cxl-grid
        grid-data='[{"membership-plan":"<a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/780784\/my-membership-details\/\\">All-Access - 60 days<\/a>","membership-start-date":"May 6, 2019","membership-end-date":"July 5, 2019","membership-status":"Active"},{"membership-plan":"<a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/46208\/my-membership-details\/\\">Subscriber - Annual add-on<\/a>","membership-start-date":"May 6, 2019","membership-end-date":"-","membership-status":"Active"},{"membership-plan":"<a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/62886\/my-membership-details\/\\">Subscriber - All-Access<\/a>","membership-start-date":"March 13, 2019","membership-end-date":"-","membership-status":"Complimentary"}]'
      >
        <vaadin-grid theme="cxl-grid no-border" style="margin: 30px;">
          <vaadin-grid-column
            path="membership-plan"
            header="Plan"
            class="membership-plan"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="membership-start-date"
            header="Start"
            class="membership-start-date"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="membership-end-date"
            header="Expires"
            class="membership-end-date"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="membership-status"
            header="Status"
            class="membership-status"
          ></vaadin-grid-column>
        </vaadin-grid>
      </cxl-grid>
    `;
  });
