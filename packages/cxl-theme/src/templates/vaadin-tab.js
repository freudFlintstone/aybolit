import styles from '../styles/vaadin-tab-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-tab-edit" theme-for="vaadin-tab">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
