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
        grid-data='[{"order-number":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1032086\/\\"&gt;#31&lt;\/a&gt;","order-date":"May 12, 2019","order-status":"Completed","order-total":"&lt;span class=\\"woocommerce-Price-amount amount\\"&gt;&lt;span class=\\"woocommerce-Price-currencySymbol\\"&gt;&#036;&lt;\/span&gt;2749&lt;\/span&gt; for 2 items","order-actions":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1032086\/\\" class=\\"woocommerce-button button view\\"&gt;View&lt;\/a&gt;&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/wp-admin\/admin-ajax.php?action=generate_wpo_wcpdf&#038;document_type=invoice&#038;order_ids=1032086&#038;my-account&#038;_wpnonce=d8f3a46eed\\" class=\\"woocommerce-button button invoice\\"&gt;Download invoice (PDF)&lt;\/a&gt;"},{"order-number":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1031988\/\\"&gt;#25&lt;\/a&gt;","order-date":"May 6, 2019","order-status":"Completed","order-total":"&lt;span class=\\"woocommerce-Price-amount amount\\"&gt;&lt;span class=\\"woocommerce-Price-currencySymbol\\"&gt;&#036;&lt;\/span&gt;3745&lt;\/span&gt; for 6 items","order-actions":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-order\/1031988\/\\" class=\\"woocommerce-button button view\\"&gt;View&lt;\/a&gt;&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/wp-admin\/admin-ajax.php?action=generate_wpo_wcpdf&#038;document_type=invoice&#038;order_ids=1031988&#038;my-account&#038;_wpnonce=d8f3a46eed\\" class=\\"woocommerce-button button invoice\\"&gt;Download invoice (PDF)&lt;\/a&gt;"}]'
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
        grid-data='[{"membership-plan":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/780784\/my-membership-details\/\\"&gt;All-Access - 60 days&lt;\/a&gt;","membership-start-date":"May 6, 2019","membership-end-date":"July 5, 2019","membership-status":"Active"},{"membership-plan":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/46208\/my-membership-details\/\\"&gt;Subscriber - Annual add-on&lt;\/a&gt;","membership-start-date":"May 6, 2019","membership-end-date":"-","membership-status":"Active"},{"membership-plan":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/members-area\/62886\/my-membership-details\/\\"&gt;Subscriber - All-Access&lt;\/a&gt;","membership-start-date":"March 13, 2019","membership-end-date":"-","membership-status":"Complimentary"}]'
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
  })
  .add('cxl-grid (My team members)', () => {
    return html`
      <p>https://conversionxli.warmpress.com/../</p>
      <cxl-grid
        grid-data='[{"member-name":"Pawel Kopocinski","member-email":"pawel@conversionready.com","member-role":"Owner","member-actions":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1032124\/members\/?action=remove_member&#038;user=3180&#038;_wpnonce=4f3e12762d\\" class=\\"button wc-memberships-for-teams-team-area-action remove_member\\"&gt;Remove&lt;\/a&gt; "},{"member-name":"Pawel Pulp","member-email":"pawel+pulp@conversionready.com","member-role":"Member","member-actions":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1032124\/members\/?action=remove_member&#038;user=7422&#038;_wpnonce=3b436bc087\\" class=\\"button wc-memberships-for-teams-team-area-action remove_member\\"&gt;Remove&lt;\/a&gt; &lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1032124\/members\/?action=set_as_manager&#038;user=7422&#038;_wpnonce=0758dbf804\\" class=\\"button wc-memberships-for-teams-team-area-action set_as_manager\\"&gt;Set as manager&lt;\/a&gt; "}]'
      >
        <vaadin-grid theme="cxl-grid no-border" style="margin: 30px;">
          <vaadin-grid-column
            path="member-name"
            header="Name"
            class="member-name"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="member-email"
            header="Email"
            class="member-email"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="member-role"
            header="Role"
            class="member-role"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="member-actions"
            header="&nbsp;"
            class="member-actions"
          ></vaadin-grid-column>
        </vaadin-grid>
      </cxl-grid>
    `;
  })
  .add('cxl-grid (My teams)', () => {
    return html`
      <p>https://conversionxli.warmpress.com/my-account/teams</p>
      <cxl-grid
        grid-data='[{"team-name":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1032124\/members\/\\"&gt;Pawe\u0142 testing team&lt;\/a&gt;","team-created-date":"May 13, 2019","team-next-bill-on":"August 13, 2019","team-member-count":"2 of 3 seats","team-actions":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/view-subscription\/1032114\/\\" class=\\"button wc-memberships-for-teams-team-area-action billing\\"&gt;Billing&lt;\/a&gt; &lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1032124\/members\/\\" class=\\"button wc-memberships-for-teams-team-area-action view\\"&gt;View&lt;\/a&gt; &lt;a href=\\"\/roadmap\/team\/\\" class=\\"button wc-memberships-for-teams-team-area-action roadmap\\"&gt;Manage roadmaps&lt;\/a&gt; &lt;a href=\\"\/dashboard\/team\/?team=1032124\\" class=\\"button wc-memberships-for-teams-team-area-action study_dashboard\\"&gt;Study dashboard&lt;\/a&gt; "},{"team-name":"&lt;a href=\\"https:\/\/conversionxli.warmpress.com\/my-account\/teams\/1029603\/members\/\\"&gt;CRDY&lt;\/a&gt;","team-created-date":"February 7, 2019","team-next-bill-on":"N\/A","team-member-count":"13 of unlimited seats","team-actions":""}]'
      >
        <vaadin-grid theme="cxl-grid no-border" style="margin: 30px;">
          <vaadin-grid-column
            path="team-name"
            header="Team name"
            class="team-name"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="team-created-date"
            header="Created On"
            class="team-created-date"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="team-member-count"
            header="Members"
            class="team-member-count"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="team-actions"
            header="&nbsp;"
            class="team-actions"
          ></vaadin-grid-column>
        </vaadin-grid>
      </cxl-grid>
    `;
  });
