import cxlVaadinAccordionPanelThemeStyles from '../../styles/cxl-course-progress-widget/theme/vaadin-accordion-panel-css.js';
import cxlVaadinTabsThemeStyles from '../../styles/cxl-course-progress-widget/theme/vaadin-tabs-css.js';
import cxlCourseProgressWidgetGlobalStyles from '../../styles/cxl-course-progress-widget/global-css.js';

[
  `<dom-module id="cxl-course-progress-widget-accordion-panel" theme-for="vaadin-accordion-panel">
     <template>
       <style>${cxlVaadinAccordionPanelThemeStyles}</style>
     </template>
   </dom-module>`,
  `<dom-module id="cxl-course-progress-widget-tabs" theme-for="vaadin-tabs">
     <template>
       <style>${cxlVaadinTabsThemeStyles}</style>
     </template>
   </dom-module>`,
  `<custom-style id="cxl-course-progress-widget-global">
     <style>${cxlCourseProgressWidgetGlobalStyles}</style>
   </custom-style>`,
]
.forEach( function ( el ) {

  const $template = document.createElement('template');

  $template.innerHTML = el;
  document.head.appendChild($template.content);

} );
