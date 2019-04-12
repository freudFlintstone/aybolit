import '@vaadin/vaadin-lumo-styles/color.js';
import styles from '../styles/lumo-colors-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${styles}</style>
</custom-style>

<dom-module id="lumo-colors-edit">
  <template>
    <style>
      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }
      a {
        color: var(--lumo-primary-text-color);
      }
      blockquote {
        color: var(--lumo-secondary-text-color);
      }
      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
