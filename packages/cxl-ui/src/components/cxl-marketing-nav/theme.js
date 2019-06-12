import cxlVaadinTabThemeStyles from '../../styles/cxl-marketing-nav/theme/vaadin-tab-css.js';
import cxlVaadinListBoxThemeStyles from '../../styles/cxl-marketing-nav/theme/vaadin-list-box-css.js';

[
  `<dom-module id="cxl-institute-layout-tab" theme-for="vaadin-tab">
    <template>
      <style>${cxlVaadinTabThemeStyles}</style>
    </template>
  </dom-module>`,
  `<dom-module id="cxl-list-box" theme-for="vaadin-list-box">
    <template>
      <style>${cxlVaadinListBoxThemeStyles}</style>
    </template>
  </dom-module>`
].forEach(function(el) {
  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);
});
