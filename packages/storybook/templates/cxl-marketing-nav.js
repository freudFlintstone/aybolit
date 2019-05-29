import { html } from 'lit-html';

const topnav = html`
  <cxl-marketing-nav nav-type="topnav" slot="topnav">
    <a href="" slot="cxl-logo">
      <iron-icon class="icon size-l" icon="cxl:logo"></iron-icon>
    </a>
    <vaadin-tabs>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          For teams
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Blog
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          About
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          CRO Services
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Login
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <vaadin-button theme="cxl-button small contrast" role="button">
          <a href="">Get free trial</a>
        </vaadin-button>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-icon">
        <a href="#">
          <iron-icon class="icon size-m" icon="lumo:menu"></iron-icon>
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-nav-icon">
        <a href="#">
          <iron-icon class="icon size-l" icon="lumo:cross"></iron-icon>
        </a>
      </vaadin-tab>
    </vaadin-tabs>
  </cxl-marketing-nav>
`;

const bottomnav = html`
  <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav">
    <vaadin-tabs>
      <vaadin-tab theme="cxl-marketing-nav-tab">
        <vaadin-button theme="primary cxl-button margin-right"
          ><a href="">Start free trial</a></vaadin-button
        >
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab">
        <vaadin-button theme="primary cxl-button cxl-transparent"
          ><a href="">Get syllabus</a></vaadin-button
        >
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Testimonials
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Instructor
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Curriculum
        </a>
      </vaadin-tab>
    </vaadin-tabs>
  </cxl-marketing-nav>
`;

export { topnav, bottomnav };
