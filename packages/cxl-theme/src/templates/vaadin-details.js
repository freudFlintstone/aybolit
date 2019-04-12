import styles from '../styles/vaadin-details-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-details-edit" theme-for="vaadin-details">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
