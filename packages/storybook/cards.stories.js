import '@conversionxl/cxl-marketing-layout'; // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('cxl-banner-card', () => {
    const banner_image = text(
      'Banner image',
      'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg'
    );
    const banner_title = text('Banner title', 'Conversion Optimization Minidegree Program');
    const banner_description = text(
      'Banner description',
      'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.'
    );
    const banner_link_label = text('Banner link label', 'Curriculum & enrollment info >');
    const banner_link_url = text('Banner link url', '#');
    return html`
      <cxl-banner-card
        banner_image="${banner_image}"
        banner_title="${banner_title}"
        banner_description="${banner_description}"
        banner_link_label="${banner_link_label}"
        banner_link_url="${banner_link_url}"
      >
      </cxl-banner-card>
    `;
  });
