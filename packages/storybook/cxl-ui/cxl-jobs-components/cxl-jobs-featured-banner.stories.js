import { html } from 'lit-html';
import { Headroom } from '@conversionxl/cxl-ui';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import '@conversionxl/cxl-ui/src/components/cxl-jobs-featured-banner.js';
import { useEffect } from '@storybook/addons';

export default {
  title: 'CXL UI|cxl-jobs-components'
};

export const CXlJobsFeaturedBanner = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlBanner = document.querySelector('cxl-jobs-featured-banner');

    // headroom.js
    const headroom = new Headroom(cxlBanner, {
      offset: 100,
      tolerance: {
        up: 100,
        down: 0
      },
      classes: {
        // when scrolling up
        pinned: 'headroom--unpinned',
        // when scrolling down
        unpinned: 'headroom--pinned'
      }
    });

    headroom.init();
  }, []);

  return html`
    <style>
      html {
        --cxl-jobs-box-shadow-xs: -4px 4px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-s: -6px 6px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-m: -8px 8px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-l: -10px 10px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-xl: -12px 12px 0 0 var(--lumo-shade-10pct);
      }

      .wrap {
        position: relative;
        margin: var(--lumo-font-size-m) auto;
        margin-bottom: calc(var(--lumo-font-size-m) * 1.618);
        margin-top: calc(var(--lumo-font-size-m) * 1.618);
        padding: 0 var(--cxl-wrap-padding, var(--lumo-font-size-m));
        padding-left: calc(var(--cxl-wrap-padding, var(--lumo-font-size-m)) * 2);
        padding-right: calc(var(--cxl-wrap-padding, var(--lumo-font-size-m)) * 2);
        max-width: var(--cxl-wrap-width, 72rem);
      }

      .shadow-xs {
        box-shadow: var(--cxl-jobs-box-shadow-xs);
      }
    </style>

    <h1 class="entry-title" itemprop="headline">Treasurer</h1>

    <div class="wrap-main wrap">
      <cxl-jobs-featured-banner class="sticky-featured-banner shadow-xs">
        <h3 class="job-title">Treasurer</h3>
        <span class="job-location">Remote</span>
        <ul class="job-types">
          <li class="job-type full-time">Full Time</li>
        </ul>
        <vaadin-button
          class="jobs-apply-now"
          theme="primary large"
          style="cursor: pointer; font-weight: normal;"
          tabindex="0"
          role="button"
        >
          Apply Now
        </vaadin-button>
      </cxl-jobs-featured-banner>

      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>

      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>

      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>
    </div>
  `;
};

CXlJobsFeaturedBanner.story = {
  name: 'cxl-jobs-featured-banner'
};
