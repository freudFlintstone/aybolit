import scss from '../styles/vaadin-text-field-css.js';

const $template = document.createElement('template');

let styles = scss;

// Webpack is adding :export {meta: '{"e":":host","f":[]}'; } to the end of the file
// Need to remove it
styles = styles.replace(':export {', '');
styles = styles.replace('meta: \'{"e":":host","f":[]}\'; }', '');

$template.innerHTML = `
<dom-module id="lumo-text-field-edit" theme-for="vaadin-text-field">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
