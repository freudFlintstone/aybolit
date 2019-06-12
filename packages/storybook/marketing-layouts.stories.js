import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { getHeroContent } from './templates/content/hero-content';
import { topnav } from './templates/cxl-marketing-nav';

import '@conversionxl/cxl-marketing';
/* eslint-disable */

storiesOf('Layouts (Marketing)', module)
  .addDecorator(withKnobs)
  .add('Marketing catalog', () => {
    const course_image = text(
      'Featured image',
      'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg'
    );
    const course_title = text('Title', 'Account based marketing');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text(
      'Description',
      'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.'
    );
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
          hero-style="catalog"
          theme="cxl-hero-style-catalog"
        >
          ${topnav} ${getHeroContent('catalog')}

          <form
            role="search"
            method="get"
            class="catalog-search-form"
            action="https://conversionxl.com/institute/"
            slot="catalog-search"
          >
            <input
              type="search"
              class="search-field"
              placeholder="Search for training"
              value=""
              name="s"
            />
            <input type="submit" class="search-submit" value="Search" />
          </form>
        </cxl-marketing-hero>

        <br /><br />

        <cxl-card-grid flow="horizontal">
          <cxl-testimonial-card>
            <div
              class="entry__header-user-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
            ></div>
            <img
              class="entry__header-company-thumbnail"
              slot="entry__header"
              src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
            />
            <p slot="entry__content">
              "Our flagship training program. Learn conversion research, start using a systematic
              way to get more wins and bigger wins through optimization and testing. Our flagship
              training program."
            </p>
            <strong slot="entry__footer">Chris Kershaw</strong>
            <span slot="entry__footer">Managing Director - Sweden, at Trollweb Solutions</span>
          </cxl-testimonial-card>

          <cxl-training-card video="https://player.vimeo.com/video/316968481">
            <p
              class="entry__header-training-thumbnail"
              slot="entry__header-thumbnail"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
            ></p>
            <h2 slot="entry__title">Google Tag Manager - Intermediate</h2>
            <p class="entry__content-training-content" slot="entry__content">
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing.
            </p>
          </cxl-training-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">
              ${course_title} ${course_title} ${course_title}
            </h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-minidegree-card>
            <p
              class="entry__header-minidegree-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');"
            ></p>
            <h2 class="entry__header-minidegree-title" slot="entry__header">
              Conversion Optimization Minidegree Program
            </h2>
            <p class="entry__content-minidegree-content" slot="entry__content">
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing.
            </p>
            <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="#"
              >Curriculum &amp; enrollment info</a
            >
          </cxl-minidegree-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>
        </cxl-card-grid>
        <br /><br />

        <cxl-card-grid>
          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-training-card video="https://player.vimeo.com/video/316968481">
            <p
              class="entry__header-training-thumbnail"
              slot="entry__header-thumbnail"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
            ></p>
            <h2 slot="entry__title">Google Tag Manager - Intermediate</h2>
            <p class="entry__content-training-content" slot="entry__content">
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing.
            </p>
          </cxl-training-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">
              ${course_title} ${course_title} ${course_title}
            </h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-minidegree-card>
            <p
              class="entry__header-minidegree-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');"
            ></p>
            <h2 class="entry__header-minidegree-title" slot="entry__header">
              Conversion Optimization Minidegree Program
            </h2>
            <p class="entry__content-minidegree-content" slot="entry__content">
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing.
            </p>
            <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="#"
              >Curriculum &amp; enrollment info</a
            >
          </cxl-minidegree-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>

          <cxl-course-card>
            <p
              class="entry__header-course-thumbnail"
              slot="entry__header"
              style="background-image: url('${course_image}');"
            ></p>
            <h2 class="entry__title" slot="entry__header">${course_title}</h2>
            <span class="entry__header-course-instructor" slot="entry__header"
              >${course_instructor}</span
            >
            <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
            <span class="entry__footer-course-specs" slot="entry__footer"
              >${course_duration} | ${course_type} | ${course_category}</span
            >
          </cxl-course-card>
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid</h3>
        </div>

        <cxl-card-grid columns="2">
          <cxl-lesson-card
            thumbnail="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg"
          >
            <h2 slot="entry-title"><strong>Class 1:</strong> Why websites fail?</h2>
            <span slot="lesson-specs">Lesson | 1 hour | Karl Gilis</span>
            <p>
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing. Our flagship
              training program. Learn conversion research, start using a systematic way to get more
              wins and bigger wins through optimization and testing.
            </p>
          </cxl-lesson-card>

          <cxl-lesson-card
            thumbnail="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg"
          >
            <h2 slot="entry-title"><strong>Class 1:</strong> Why websites fail?</h2>
            <span slot="lesson-specs">Lesson | 1 hour | Karl Gilis</span>
            <p>
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing. Our flagship
              training program. Learn conversion research, start using a systematic way to get more
              wins and bigger wins through optimization and testing.
            </p>
          </cxl-lesson-card>

          <cxl-testimonial-card>
            <div
              class="entry__header-user-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
            ></div>
            <img
              class="entry__header-company-thumbnail"
              slot="entry__header"
              src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
            />
            <p slot="entry__content">
              "Our flagship training program. Learn conversion research, start using a systematic
              way to get more wins and bigger wins through optimization and testing. Our flagship
              training program."
            </p>
            <strong slot="entry__footer">Chris Kershaw</strong>
            <span slot="entry__footer">Managing Director - Sweden, at Trollweb Solutions</span>
          </cxl-testimonial-card>

          <cxl-testimonial-card>
            <div
              class="entry__header-user-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
            ></div>
            <img
              class="entry__header-company-thumbnail"
              slot="entry__header"
              src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
            />
            <p slot="entry__content">
              "Our flagship training program. Learn conversion research, start using a systematic
              way to get more wins and bigger wins through optimization and testing. Our flagship
              training program."
            </p>
            <strong slot="entry__footer">Chris Kershaw</strong>
            <span slot="entry__footer">Managing Director - Sweden, at Trollweb Solutions</span>
          </cxl-testimonial-card>
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          <cxl-lesson-card
            thumbnail="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg"
          >
            <h2 slot="entry-title"><strong>Class 1:</strong> Why websites fail?</h2>
            <span slot="lesson-specs">Lesson | 1 hour | Karl Gilis</span>
            <p>
              Our flagship training program. Learn conversion research, start using a systematic way
              to get more wins and bigger wins through optimization and testing. Our flagship
              training program. Learn conversion research, start using a systematic way to get more
              wins and bigger wins through optimization and testing.
            </p>
          </cxl-lesson-card>
          <cxl-testimonial-card>
            <div
              class="entry__header-user-thumbnail"
              slot="entry__header"
              style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
            ></div>
            <img
              class="entry__header-company-thumbnail"
              slot="entry__header"
              src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
            />
            <p slot="entry__content">
              "Our flagship training program. Learn conversion research, start using a systematic
              way to get more wins and bigger wins through optimization and testing. Our flagship
              training program."
            </p>
            <strong slot="entry__footer">Chris Kershaw</strong>
            <span slot="entry__footer">Managing Director - Sweden, at Trollweb Solutions</span>
          </cxl-testimonial-card>
        </div>
      </cxl-marketing-layout>
    `;
  });
