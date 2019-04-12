import styles from '../styles/vaadin-button-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-button-edit" theme-for="vaadin-button">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
