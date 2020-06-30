import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-info-container.js';

export default {
  title: 'CXL UI|Jobs'
};

export const CxlJobsBlockquote = () => {
  return html`
    <cxl-app-layout id="container" theme="cxl-jobs-home flat-shadow">
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
          <div class="wp-block-columns">
            <div class="wp-block-column">
              <h4>Fun</h4>

              <p>
                Fun is a serious business at CXL. We make sure we’re enjoying the process while
                chipping away at dream. We take breaks to recharge and enjoy the moment.
              </p>
            </div>

            <div class="wp-block-column">
              <blockquote class="cxl-jobs-blockquote shadow-m">
                <p>
                  One piece of the fun is organizing our 2 conferences per year –
                  <a href="#cxl-live-conference">CXL Live</a> in Austin and
                  <a href="#elite-camp-conference">Elite Camp</a> in Estonia. It’s when the whole
                  CXL team comes together. We don’t use any event management companies, it’s all
                  done by our people.<br /><br />It also gets bloody hot in Austin in the summer, so
                  the whole teams ships over to Estonia for a month or so (or at least has in the
                  last 2 years). Fun times!
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </cxl-app-layout>
  `;
};

CxlJobsBlockquote.story = {
  name: 'blockquote'
};
