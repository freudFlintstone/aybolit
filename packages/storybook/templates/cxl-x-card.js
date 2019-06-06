import { html } from 'lit-html';

const cards = {
  training: html`
    <cxl-training-card video="https://player.vimeo.com/video/316968481">
      <div
        slot="thumbnail"
        part="thumbnail"
        style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
      ></div>
      <h2 slot="title">Google Tag Manager - Intermediate</h2>
      <p slot="content">
        Our flagship training program. Learn conversion research, start using a systematic way to
        get more wins and bigger wins through optimization and testing.
      </p>
    </cxl-training-card>
  `,
  testimonial: html`
    <cxl-testimonial-card>
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
        "Our flagship training program. Learn conversion research, start using a systematic way to
        get more wins and bigger wins through optimization and testing. Our flagship training
        program."
      </p>
      <strong slot="footer">Chris Kershaw</strong>
      <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
    </cxl-testimonial-card>
  `,
  course: html`
    <cxl-course-card>
      <div
        slot="thumbnail"
        part="thumbnail"
        style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
      ></div>
      <h2 slot="title">Account based marketing</h2>
      <small slot="title">Ton Wesseling</small>
      <p slot="content">
        Our flagship training program. Learn conversion research, start using a systematic way to
        get more wins and bigger wins through optimization and testing.
      </p>
      <span slot="footer">2 hours | Course | Analytics</span>
    </cxl-course-card>
  `,
  minidegree: html`
    <cxl-minidegree-card>
      <div
        slot="thumbnail"
        part="thumbnail"
        style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');"
      ></div>
      <h2 slot="title">
        Conversion Optimization Minidegree Program
      </h2>
      <p slot="content">
        Our flagship training program. Learn conversion research, start using a systematic way to
        get more wins and bigger wins through optimization and testing.
      </p>
      <a slot="footer" href="#">Curriculum &amp; enrollment info</a>
    </cxl-minidegree-card>
  `,
  lesson: html`
    <cxl-lesson-card>
      <div
        slot="thumbnail"
        part="thumbnail"
        style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
      ></div>
      <h2 slot="header-right"><strong>Class 1:</strong> Why websites fail?</h2>
      <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
      <p slot="content">
        Our flagship training program. Learn conversion research, start using a systematic way to
        get more wins and bigger wins through optimization and testing. Our flagship training
        program. Learn conversion research, start using a systematic way to get more wins and bigger
        wins through optimization and testing.
      </p>
    </cxl-lesson-card>
  `
};

export { cards };
