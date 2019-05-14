import lumoVaadinContextMenu from '../styles/vaadin-context-menu-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>${lumoVaadinContextMenu}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
