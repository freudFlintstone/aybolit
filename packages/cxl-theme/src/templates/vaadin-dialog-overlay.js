import styles from '../styles/vaadin-dialog-overlay-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-dialog-edit" theme-for="vaadin-dialog-overlay">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
