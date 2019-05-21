import '@vaadin/vaadin-lumo-styles/color.js';
import lumoColor from '../styles/color-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style include="lumo-color">${lumoColor}</style>
</custom-style>`;

document.head.appendChild($template.content);
