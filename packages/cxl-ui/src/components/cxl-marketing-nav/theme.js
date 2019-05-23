import cxlVaadinItemThemeStyles from '../../styles/cxl-marketing-nav/theme/vaadin-item-css.js';

[
  `<dom-module id="cxl-marketing-nav-item" theme-for="vaadin-item">
     <template>
       <style>${cxlVaadinItemThemeStyles}</style>
     </template>
   </dom-module>`
].forEach(function(el) {
  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);
});
