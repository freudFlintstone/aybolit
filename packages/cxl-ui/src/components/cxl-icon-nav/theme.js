import cxlVaadinTabsThemeStyles from '../../styles/cxl-icon-nav/theme/vaadin-tabs-css.js';

[
  `<dom-module id="cxl-icon-nav-tabs" theme-for="vaadin-tabs">
     <template>
       <style>${cxlVaadinTabsThemeStyles}</style>
     </template>
   </dom-module>`,
]
.forEach( function ( el ) {

  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);

} );
