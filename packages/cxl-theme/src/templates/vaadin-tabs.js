import styles from '../styles/vaadin-tabs-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-tabs-edit" theme-for="vaadin-tabs">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
