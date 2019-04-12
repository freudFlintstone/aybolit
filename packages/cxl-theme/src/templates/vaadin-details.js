import scss from '../styles/vaadin-details-css.js';

const $template = document.createElement('template');

let styles = scss;

// Webpack is adding :export {meta: '{"e":":host","f":[]}'; } to the end of the file
// Need to remove it
styles = styles.replace(':export {', '');
styles = styles.replace('meta: \'{"e":":host","f":[]}\'; }', '');

$template.innerHTML = `
<dom-module id="lumo-details-edit" theme-for="vaadin-details">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
