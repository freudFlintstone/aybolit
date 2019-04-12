import styles from './styles/cxl-marketing-layout-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
  <style>
    ${styles}
  </style>
`;

document.head.appendChild($template.content);
