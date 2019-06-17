import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing';
/* eslint-disable */

storiesOf('Templates', module)
  .addDecorator(withKnobs)
  .add('Agency - Success stories', () => {
    return html`
      <cxl-marketing-layout>
        <vaadin-dialog theme="cxl-optin" id="caseStudies">
          <template>
            <cxl-iron-form
              id="optin"
              form-method="POST"
              form-action="https://hooks.zapier.com/hooks/catch/2235798/9hgfl4/"
            >
              <h2>
                Got 5+ people in your team? <br />Request a C<strong>XL</strong> Institute demo
              </h2>
              <p>Fill this form and you’ll be able to book time on our calendars.</p>
              <input type="hidden" name="campaign" value="agency" />
              <vaadin-form-layout>
                <vaadin-text-field
                  colspan="2"
                  label="Work email"
                  placeholder="Type here"
                  name="email"
                  required
                  error-message="Please enter a valid e-mail"
                ></vaadin-text-field>
                <vaadin-text-field
                  colspan="2"
                  label="Name"
                  placeholder="Type here"
                  name="name"
                  required
                  error-message="Please fill your name"
                ></vaadin-text-field>
                <hr />
                <vaadin-button theme="primary cxl-button large" onclick="optin.submit()"
                  >Schedule demo</vaadin-button
                >
              </vaadin-form-layout>
              <div slot="confirmation">
                <h2 class="text-success">
                  Thank you for signing up! Here's your link to download case studies.
                </h2>
                <br />
                <p>Any more text here?</p>
                <h4>
                  <a href=""><strong>Link to download case studies</strong></a>
                </h4>
              </div>
            </cxl-iron-form>
          </template>
        </vaadin-dialog>

        <cxl-marketing-hero
          background-color="#F5F5F5"
          hero-style="video"
          theme="cxl-hero-style-video"
          video="https://player.vimeo.com/video/333244516"
        >
          <cxl-marketing-nav nav-type="topnav" slot="topnav">
            <a href="" slot="cxl-logo">
              <iron-icon class="icon size-xl" icon="cxl:logo"></iron-icon>
            </a>
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Pricing
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet cxl-nav-dropdown">
                <vaadin-context-menu open-on="click" theme="cxl-nav-dropdown">
                  <a href="" style="display: flex; align-items: center;">Blog</a>
                  <template>
                    <vaadin-list-box theme="cxl-nav-dropdown">
                      <a href="">Blog 1</a>
                      <a href="">Blog 2</a>
                      <a href="">Blog 3</a>
                      <a href="">Blog 4</a>
                    </vaadin-list-box>
                  </template>
                </vaadin-context-menu>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  About
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet cxl-nav-dropdown">
                <vaadin-context-menu open-on="click" theme="cxl-nav-dropdown">
                  <a href="" style="display: flex; align-items: center;">Agency</a>
                  <template>
                    <vaadin-list-box theme="cxl-nav-dropdown">
                      <a href="">Agency 1</a>
                      <a href="">Agency 2</a>
                      <a href="">Agency 3</a>
                      <a href="">Agency 4</a>
                    </vaadin-list-box>
                  </template>
                </vaadin-context-menu>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Login
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <vaadin-button theme="cxl-button small contrast" role="button">
                  <a href="">Sign up now</a>
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

          <vaadin-item theme="cxl-hero-content">
            <h1>Optimization <strong>success</strong> stories</h1>
            <p>
              Get a proven and hand-on UX framework to make more money with your website &amp;
              landing pages.
            </p>
          </vaadin-item>

          <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav">
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button open-download-dialog theme="primary cxl-button margin-right"
                  ><a href="">Download case studies</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button theme="primary cxl-button cxl-transparent"
                  ><a href="">Get in touch</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Video testimonials
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Case studies
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Services
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="">
                  Pricing
                </a>
              </vaadin-tab>
            </vaadin-tabs>
          </cxl-marketing-nav>

          <img slot="video" src="https://picsum.photos/516/290" />
        </cxl-marketing-hero>

        <section class="padding">
          <div class="wrap text-center shrunk">
            <h3>We work with some of the best companies in the world</h3>
            <cxl-partner-logos>
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/google-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/cisco-1.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/hpe-2.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/homedepot-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/quicken-1.png"
              />
            </cxl-partner-logos>
          </div>
        </section>

        <section>
          <div class="wrap text-center shrunk">
            <ul>
              <li>
                <p>
                  User research tools and techniques to uncover usability and UX problems on any
                  site
                </p>
              </li>
              <li>
                <p>
                  Implement a proven, repeatable process that will result in more revenue per
                  visitor.
                </p>
              </li>
              <li>
                <p>
                  Extract the highest value insights from Google Analytics, heat maps, user
                  recordings and form analytics.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section class="padding">
          <div class="text-center">
            <h3>Making clients happy since 2012</h3>
            <br />
            <cxl-card-grid columns="2">
              <cxl-testimonial-card theme="no-shadow">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
                ></div>
                <img
                  slot="header-right"
                  src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
                />
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
              <cxl-testimonial-card theme="no-shadow">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
                ></div>
                <img
                  slot="header-right"
                  src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
                />
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </cxl-card-grid>
          </div>
        </section>

        <section class="padding">
          <div class="wrap flex">
            <div class="column">
              <h2>
                <img
                  height="50"
                  src="https://conversionxl.com/institute/wp-content/uploads/2018/10/cisco-1.png"
                />
                Introducing high-focus cross-sells into the buyer path provided
                <strong>$1.5 million</strong> in annualized revenue.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-download-dialog theme="primary cxl-button"
                >Download all case studies</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </div>
            <div class="column text-center">
              <img src="https://picsum.photos/600" />
            </div>
          </div>
        </section>

        <section class="padding">
          <div class="wrap flex">
            <div class="column text-center">
              <img src="https://picsum.photos/450" />
            </div>
            <div class="column">
              <h2>
                Introducing high-focus cross-sells into the buyer path provided
                <strong>$1.5 million</strong> in annualized revenue.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-download-dialog theme="primary cxl-button"
                >Download all case studies</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </div>
          </div>
        </section>

        <section class="padding">
          <div class="wrap flex">
            <div class="column">
              <h2>
                Introducing high-focus cross-sells into the buyer path provided
                <strong>$1.5 million</strong> in annualized revenue.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-download-dialog theme="primary cxl-button"
                >Download all case studies</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </div>
            <div class="column text-center">
              <img src="https://picsum.photos/450" />
            </div>
          </div>
        </section>

        <footer id="footer">
          <div class="wrap">
            <nav class="menu menu--footer">
              <h3 class="menu__title screen-reader-text">cxl-2019/footer</h3>

              <ul class="menu__items">
                <li id="menu-item-1029889" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/2019/" class="menu__link"
                    >© <strong><em>C</em>XL</strong>, 2019</a
                  >
                </li>
                <li id="menu-item-1029890" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
                </li>
                <li id="menu-item-1029891" class="menu__item ">
                  <a
                    href="https://conversionxli.warmpress.com/affiliates/become-an-affiliate/"
                    class="menu__link"
                    >Become an Affiliate</a
                  >
                </li>
                <li id="menu-item-1029892" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/referral-program/" class="menu__link"
                    >Referral Program</a
                  >
                </li>
                <li id="menu-item-1029893" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/privacy-options/" class="menu__link"
                    >Privacy Options</a
                  >
                </li>
                <li id="menu-item-1029894" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/privacy-policy/" class="menu__link"
                    >Privacy Policy</a
                  >
                </li>
                <li id="menu-item-1029895" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/terms-conditions/" class="menu__link"
                    >Terms and Conditions (“Terms”)</a
                  >
                </li>
              </ul>
            </nav>

            <div>
              <a href="support@conversionxl.com">support@conversionxl.com</a>&nbsp;&nbsp;&nbsp;
              <a href="tel:+18005386216">(+1) (800) 538-6216</a>
            </div>
          </div>
        </footer>
      </cxl-marketing-layout>
    `;
  });
