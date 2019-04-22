import '@conversionxl/cxl-components/src/components/cxl-banner-card';
import '@conversionxl/cxl-components/src/components/cxl-lesson-card';
import '@conversionxl/cxl-components/src/components/cxl-testimonial-card';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Cards', module)
    .addDecorator(withKnobs)
    .add('cxl-lesson-card', () => {
        const lesson_title = text('Title', 'Why websites fail?');
        const lesson_title_highlighted = text('Title highlighted part', 'Class 1');
        const lesson_image = text('Image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');
        //const lesson_type = text('Type', 'Lesson');
        const lesson_length = text('Length', '1 hour');
        const lesson_instructor = text('Instructor', 'Karl Gilis');
        const lesson_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');

        return `
          <cxl-lesson-card lesson_title_highlighted="${lesson_title_highlighted}" lesson_image="${lesson_image}">
            <span slot="highlighted-title">${lesson_title_highlighted}</span><p slot="lesson-title">${lesson_title}</p>
            <small slot="type">Lesson</small>
            <small slot="lesson-length">${lesson_length}</small>
            <small slot="lesson-instructor">${lesson_instructor}</small>
            <p slot="lesson-description">${lesson_description}</p>
          </cxl-lesson-card>
        `
    })
    .add('cxl-testimonial-card', () => {
        const customer_image = text  ('Customer image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');
        const company_image = text('Company image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png');
        const content = text('Content', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. ');
        const customer_name = text('Customer name', 'Chris Kershaw');
        const customer_company = text('Customer company', 'Managing Director - Sweden, at Trollweb Solutions');
        return `
          <cxl-testimonial-card customer_image="${customer_image}" company_image="${company_image}">
            <header class="entry__header" slot="header">
              <p class="customer-image" style="background-image: url('${customer_image}');"></p>
              <img class="company-image" src="${company_image}"></img>
            </header>
            <div class="entry__content" slot="content">
              <p class="content">"${content}"</p>
            </div>
            <footer class="entry__footer" slot="footer">
              <small class="customer-name">${customer_name}</small>
              <small class="customer-company">${customer_company}</small>
            </footer>
          </cxl-testimonial-card>
        `
    })
    .add('cxl-banner-card', () => {
        const banner_image = text('Banner image\n', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');
        const banner_title = text('Banner title', 'Conversion Optimization Minidegree Program');
        const banner_description = text('Banner description\n', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
        const banner_link_label = text('Banner link label\n', 'Curriculum & enrollment info >');
        const banner_link_url = text('Banner link url\n', '#');

        return `
          <cxl-banner-card banner_image="${banner_image}">
            <p slot="banner-title">${banner_title}</p>
            <small slot="banner-description">${banner_description}</small>
            <a slot="banner-link" href="${banner_link_url}">${banner_link_label}</a>
          </cxl-banner-card>
        `
    })

