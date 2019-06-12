import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { getHeroContent } from './templates/content/hero-content';
import { topnav, bottomnav } from './templates/cxl-marketing-nav';

import '@conversionxl/cxl-marketing';
/* eslint-disable */

storiesOf('Templates', module)
  .addDecorator(withKnobs)
  .add('Agency - Success stories', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
          hero-style="video"
          theme="cxl-hero-style-video"
          video="https://player.vimeo.com/video/333244516"
        >
          ${topnav} ${getHeroContent('video')} ${bottomnav}

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
              <vaadin-button theme="primary cxl-button">Download all case studies</vaadin-button>
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
              <vaadin-button theme="primary cxl-button">Download all case studies</vaadin-button>
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
              <vaadin-button theme="primary cxl-button">Download all case studies</vaadin-button>
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
      </cxl-marketing-layout>
    `;
  });
