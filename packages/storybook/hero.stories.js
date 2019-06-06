import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { getHeroContent } from './templates/content/hero-content';
import { topnav, bottomnav } from './templates/cxl-marketing-nav';

import '@conversionxl/cxl-marketing';

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .add('cxl-marketing-hero', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
        >
          ${topnav} ${getHeroContent('sales')} ${bottomnav}
        </cxl-marketing-hero>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-marketing-hero (waves)', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
          hero-style="waves"
        >
          ${topnav} ${getHeroContent('sales')} ${bottomnav}
        </cxl-marketing-hero>
      </cxl-marketing-layout>
    `;
  });
