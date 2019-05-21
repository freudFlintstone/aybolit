import cxlVaadinAccordionPanelThemeStyles from '../../styles/cxl-minidegree-progress-widget/theme/vaadin-accordion-panel-css.js';
import cxlVaadinItemThemeStyles from '../../styles/cxl-minidegree-progress-widget/theme/vaadin-item-css.js';
import cxlVaadinTabsThemeStyles from '../../styles/cxl-minidegree-progress-widget/theme/vaadin-tabs-css.js';
import cxlMinidegreeProgressWidgetGlobalStyles from '../../styles/cxl-minidegree-progress-widget/global-css.js';

[
  `<dom-module id="cxl-minidegree-progress-widget-accordion-panel" theme-for="vaadin-accordion-panel">
     <template>
       <style>${cxlVaadinAccordionPanelThemeStyles}</style>
     </template>
   </dom-module>`,
  `<dom-module id="cxl-minidegree-progress-widget-item" theme-for="vaadin-item">
     <template>
       <style>${cxlVaadinItemThemeStyles}</style>
     </template>
   </dom-module>`,
  `<dom-module id="cxl-minidegree-progress-widget-tabs" theme-for="vaadin-tabs">
     <template>
       <style>${cxlVaadinTabsThemeStyles}</style>
     </template>
   </dom-module>`,
  `<custom-style id="cxl-minidegree-progress-widget-global">
     <style>${cxlMinidegreeProgressWidgetGlobalStyles}</style>
   </custom-style>`,
]
.forEach( function ( el ) {

  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);

} );
