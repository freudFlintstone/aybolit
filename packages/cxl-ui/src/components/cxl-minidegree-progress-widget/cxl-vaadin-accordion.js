import '@vaadin/vaadin-accordion';
import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion';

class CXLVaadinAccordion extends AccordionElement {
  _updateOpened(e) {
    const target = this._filterItems(e.composedPath())[0];
    const idx = this.items.indexOf(target);
    if (e.detail.value) {
      if (target.disabled || idx === -1) {
        return;
      }

      this.opened = idx;
    } else if (!this.items.some(item => item.opened)) {
      this.opened = null;
    }
  }

  _updateItems() {}
}

customElements.define('cxl-vaadin-accordion', CXLVaadinAccordion);
