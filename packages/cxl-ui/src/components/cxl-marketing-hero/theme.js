import cxlVaadinItemThemeStyles from '../../styles/cxl-marketing-hero/theme/vaadin-item-css.js';
import cxlMarketingHeroGlobalStyles from '../../styles/cxl-marketing-hero/theme/global-css.js';

[
  `<dom-module id="cxl-marketing-hero-item" theme-for="vaadin-item">
     <template>
       <style>${cxlVaadinItemThemeStyles}</style>
     </template>
   </dom-module>`,
  `<custom-style id="cxl-marketing-hero-global">
     <style>${cxlMarketingHeroGlobalStyles}</style>
   </custom-style>`
].forEach(function(el) {
  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);
});
