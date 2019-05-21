import '../cxl-icon-nav/theme.js';

import cxlVaadinTabsThemeStyles from '../../styles/cxl-institute-layout/theme/vaadin-tabs-css.js';

[
  `<dom-module id="cxl-institute-layout-tabs" theme-for="vaadin-tabs">
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
