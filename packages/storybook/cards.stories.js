import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { cards } from './templates/cxl-x-card';

import '@conversionxl/cxl-marketing';
import '@conversionxl/cxl-ui';
/* eslint-disable */

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('All cards', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <cxl-card-grid flow="horizontal">
          ${cards.testimonial} ${cards.training} ${cards.course} ${cards.minidegree}
          ${cards.testimonial} ${cards.testimonial} ${cards.training} ${cards.course}
          ${cards.minidegree} ${cards.testimonial} ${cards.testimonial} ${cards.training}
          ${cards.course} ${cards.minidegree} ${cards.testimonial}
        </cxl-card-grid>

        <br /><br />

        <cxl-card-grid>
          ${cards.testimonial} ${cards.training} ${cards.course} ${cards.minidegree}
          ${cards.testimonial} ${cards.testimonial} ${cards.training} ${cards.course}
          ${cards.minidegree} ${cards.testimonial} ${cards.testimonial} ${cards.training}
          ${cards.course} ${cards.minidegree} ${cards.testimonial}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.lesson} ${cards.lesson} ${cards.testimonial} ${cards.testimonial}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.lesson} ${cards.testimonial}
        </div>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-course-card', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <div class="wrap">
          <h3>Horizontal scrolled cxl-card-grid</h3>
        </div>

        <cxl-card-grid flow="horizontal">
          ${cards.course} ${cards.course} ${cards.course} ${cards.course} ${cards.course}
          ${cards.course} ${cards.course}
        </cxl-card-grid>

        <br /><br />

        <div class="wrap">
          <h3>Default cxl-card-grid</h3>
        </div>

        <cxl-card-grid>
          ${cards.course} ${cards.course} ${cards.course} ${cards.course} ${cards.course}
          ${cards.course}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid (2 colums)</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.course} ${cards.course} ${cards.course}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.course}
        </div>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-training-card', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <div class="wrap">
          <h3>Horizontal scrolled cxl-card-grid</h3>
        </div>

        <cxl-card-grid flow="horizontal">
          ${cards.training} ${cards.training} ${cards.training} ${cards.training} ${cards.training}
          ${cards.training} ${cards.training}
        </cxl-card-grid>

        <br /><br />

        <div class="wrap">
          <h3>Default cxl-card-grid</h3>
        </div>

        <cxl-card-grid>
          ${cards.training} ${cards.training} ${cards.training} ${cards.training} ${cards.training}
          ${cards.training}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid (2 colums)</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.training} ${cards.training} ${cards.training}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.training}
        </div>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-minidegree-card', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <div class="wrap">
          <h3>Horizontal scrolled cxl-card-grid</h3>
        </div>

        <cxl-card-grid flow="horizontal">
          ${cards.minidegree} ${cards.minidegree} ${cards.minidegree} ${cards.minidegree}
          ${cards.minidegree} ${cards.minidegree} ${cards.minidegree}
        </cxl-card-grid>

        <br /><br />

        <div class="wrap">
          <h3>Default cxl-card-grid</h3>
        </div>

        <cxl-card-grid>
          ${cards.minidegree} ${cards.minidegree} ${cards.minidegree} ${cards.minidegree}
          ${cards.minidegree} ${cards.minidegree}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid (2 colums)</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.minidegree} ${cards.minidegree} ${cards.minidegree}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.minidegree}
        </div>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-testimonial-card', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <div class="wrap">
          <h3>Horizontal scrolled cxl-card-grid</h3>
        </div>

        <cxl-card-grid flow="horizontal">
          ${cards.testimonial} ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
          ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
        </cxl-card-grid>

        <br /><br />

        <div class="wrap">
          <h3>Default cxl-card-grid</h3>
        </div>

        <cxl-card-grid>
          ${cards.testimonial} ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
          ${cards.testimonial} ${cards.testimonial}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid (2 colums)</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.testimonial}
        </div>
      </cxl-marketing-layout>
    `;
  })
  .add('cxl-lesson-card', () => {
    return html`
      <cxl-marketing-layout>
        <br /><br />

        <div class="wrap">
          <h3>Horizontal scrolled cxl-card-grid</h3>
        </div>

        <cxl-card-grid flow="horizontal">
          ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson}
          ${cards.lesson} ${cards.lesson}
        </cxl-card-grid>

        <br /><br />

        <div class="wrap">
          <h3>Default cxl-card-grid</h3>
        </div>

        <cxl-card-grid columns="3">
          ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson}
          ${cards.lesson}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Inside cxl-card-grid (2 colums)</h3>
        </div>

        <cxl-card-grid columns="2">
          ${cards.lesson} ${cards.lesson} ${cards.lesson}
        </cxl-card-grid>

        <div class="wrap">
          <h3>Outside cxl-card-grid</h3>
          ${cards.lesson}
        </div>
      </cxl-marketing-layout>
    `;
  });
