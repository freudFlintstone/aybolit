import styles from '../styles/vaadin-ordered-layout-css.js';

const $template = document.createElement('template');
const $template2 = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-horizontal-layout-edit" theme-for="vaadin-horizontal-layout">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

$template2.innerHTML = `
<dom-module id="lumo-vertical-layout-edit" theme-for="vaadin-vertical-layout">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
document.head.appendChild($template2.content);
