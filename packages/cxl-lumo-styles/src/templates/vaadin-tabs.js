import lumoVaadinTabs from '../styles/vaadin-tabs-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>${lumoVaadinTabs}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
