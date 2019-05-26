import cxlVaadinTabThemeStyles from '../../styles/cxl-marketing-nav/theme/vaadin-tab-css.js';

[
  `<dom-module id="cxl-institute-layout-tab" theme-for="vaadin-tab">
     <template>
       <style>${cxlVaadinTabThemeStyles}</style>
     </template>
   </dom-module>`,
  `<dom-module id="cxl-institute-layout-tabs" theme-for="vaadin-tabs">
     <template>
       <style>
        :host, :host(:not([orientation="vertical"])) {
          box-shadow: none;
          width: 100%;
        }
       </style>
     </template>
   </dom-module>`
].forEach(function(el) {
  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);
});
