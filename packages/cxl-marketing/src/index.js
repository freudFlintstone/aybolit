// Global styles.
import './templates/global.js';

// Lumo.
import '@conversionxl/cxl-lumo-styles';

// Custom components.
import '@conversionxl/cxl-ui/src/components/cxl-marketing-layout';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-hero';
import '@conversionxl/cxl-ui/src/components/cxl-card';
import '@conversionxl/cxl-ui/src/components/cxl-partner-logos';
import '@conversionxl/cxl-ui/src/components/cxl-iron-form';

// Third-party components.
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-list-box';
import '@vaadin/vaadin-context-menu';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field';

// Template JS

function _initDialogButtons() {
  const dialogButtons = document.querySelectorAll('[open-download-dialog]');
  const dialog = document.querySelector('vaadin-dialog#caseStudies');

  dialogButtons.forEach(button => {
    button.addEventListener('click', function() {
      dialog.opened = true;
    });
  });
}

window.addEventListener('WebComponentsReady', function() {
  _initDialogButtons();
});

window.addEventListener('DOMContentLoaded', function() {
  _initDialogButtons();
});
