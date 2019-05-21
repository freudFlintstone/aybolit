import '@vaadin/vaadin-lumo-styles/sizing.js';
import cxlLumoStylesSizing from '../styles/sizing-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style id="cxl-lumo-styles-sizing">
  <style include="lumo-sizing">${cxlLumoStylesSizing}</style>
</custom-style>`;

document.head.appendChild($template.content);
