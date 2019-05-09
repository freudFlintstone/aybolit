import lumoVaadinItem from '../styles/vaadin-item-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-item" theme-for="vaadin-item">
  <template>
    <style>${lumoVaadinItem}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
