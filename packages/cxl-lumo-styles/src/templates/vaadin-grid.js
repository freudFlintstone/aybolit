import lumoVaadinGrid from '../styles/vaadin-grid-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>${lumoVaadinGrid}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
