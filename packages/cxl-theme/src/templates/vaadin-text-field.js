import styles from '../styles/vaadin-text-field-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-text-field-edit" theme-for="vaadin-text-field">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
