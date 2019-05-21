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

    this._saveAccordionState(this.items, e.detail.value, idx);
  }

  _updateItems(items) {
    if (!items) {
      return;
    }

    if (!this.hasAppliedState) {
      const storageId = this.getAttribute('id');
      const stateItems = JSON.parse(localStorage.getItem(storageId)) || [];
      this._applyAccordionState(stateItems, items);
    }

    this.hasAppliedState = true;
  }

  _saveAccordionState(items) {
    const storageId = this.getAttribute('id');
    const stateItems = [];

    items.forEach(function(value, key) {
      stateItems[key] = items[key].opened;
    });

    localStorage.setItem(storageId, JSON.stringify(stateItems));
  }

  _applyAccordionState(stateItems, items) {
    items.forEach(function(item, key) {
      const currentItem = item;
      currentItem.opened = stateItems[key];
    });
  }
}

customElements.define('cxl-vaadin-accordion', CXLVaadinAccordion);
