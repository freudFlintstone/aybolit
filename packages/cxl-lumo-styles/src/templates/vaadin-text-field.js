import lumoVaadinTextField from '../styles/vaadin-text-field-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style>${lumoVaadinTextField}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
