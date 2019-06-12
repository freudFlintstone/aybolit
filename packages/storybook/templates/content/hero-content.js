import { html } from 'lit-html';

const getHeroContent = contentType => {
  switch (contentType) {
    case 'sales':
      return html`
        <vaadin-item theme="cxl-hero-content">
          <h1>Learn to optimize your design using <strong>data.</strong></h1>
          <h2><span>Online course:</span> <strong>Data-driven UX masterclass</strong></h2>
          <h5>by Karl Gilis, world-renowned CRO Expert &amp; Information Architect.</h5>
          <p>
            Get a proven and hand-on UX framework to make more money with your website &amp; landing
            pages. Use user research tools and techniques to uncover usability and UX problems on
            any site.
          </p>
        </vaadin-item>
      `;
    case 'catalog':
      return html`
        <vaadin-item theme="cxl-hero-content cxl-hero-style-catalog-content">
          <h1>Join the <strong>top 1%</strong> of digital marketing</h1>
          <p>
            We find the absolute best practitioners in the world, and get the to teach their craft.
            Learn from the top performers to become the one.
          </p>
        </vaadin-item>
      `;
    default:
    // code block
  }

  return '';
};

export { getHeroContent };
