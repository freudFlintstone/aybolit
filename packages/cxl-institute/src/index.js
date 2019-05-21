// Global styles.
import './templates/global.js';

// Lumo.
import '@conversionxl/cxl-lumo-styles';

/**
 * Themes first.
 *
 * @see https://github.com/vaadin/vaadin-themable-mixin#theme-modules
 * @todo Is there a better way? Individual component usage must duplicate theme imports?
 */
import '@conversionxl/cxl-ui/src/components/cxl-institute-layout/theme.js';
import '@conversionxl/cxl-ui/src/components/cxl-minidegree-progress-widget/theme.js';

// Custom components.
import '@conversionxl/cxl-ui/src/components/cxl-institute-layout';
import '@conversionxl/cxl-ui/src/components/cxl-minidegree-progress-widget';

// Third-party components.
import '@vaadin/vaadin-button';
