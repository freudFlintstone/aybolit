// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlGridStyles from '../styles/cxl-grid-css.js';

class CXLGridElement extends LitElement {
  static get properties() {
    return {
      gridData: {
        type: String,
        attribute: 'grid-data'
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlGridStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    this.gridData = JSON.parse(this.gridData);
    console.log('asd3');

    const that = this;

    window.addEventListener('WebComponentsReady', function() {
      const vaadinGrid = that.shadowRoot.querySelector('slot').assignedNodes()[1];
      const vaadinGridColumns = [];
      const vaadinGridChildrenElements = vaadinGrid.children;

      vaadinGrid.items = that.gridData;

      Object.keys(vaadinGridChildrenElements).forEach(function(key) {
        if (vaadinGridChildrenElements[key].tagName === 'VAADIN-GRID-COLUMN') {
          vaadinGridColumns.push(vaadinGridChildrenElements[key]);
        }
      });

      // Events
      const toggleSelection = function(item) {
        vaadinGrid.selectedItems = vaadinGrid.selectedItems[0] === item ? [] : [item];
      };

      vaadinGrid.addEventListener('click', function(e) {
        const { item } = vaadinGrid.getEventContext(e);
        toggleSelection(item);
      });

      setTimeout(function() {
        that._initColumnActions(vaadinGrid, vaadinGridColumns);
      });
    });
  }

  _initColumnActions(vaadinGrid, vaadinGridColumns) {
    const that = this;

    // Loop through columns and render content
    vaadinGridColumns.forEach(function(gridColumn) {
      const columnName = gridColumn.getAttribute('path');
      const isActions = columnName.indexOf('-actions') !== -1;

      const columnByName = vaadinGrid.querySelector(`vaadin-grid-column[path="${columnName}"]`);

      if (isActions) {
        columnByName.renderer = (root, column, rowData) =>
          that._actionsRenderer(root, column, rowData);
      } else {
        columnByName.renderer = (root, column, rowData) => {
          const columnRoot = root;

          if (columnRoot) {
            columnRoot.innerHTML = rowData.item[columnName];
          }
        };
      }
    });
  }

  _htmlToElements(html) {
    const template = document.createElement('template');
    const trimmedHtml = html.trim();
    template.innerHTML = trimmedHtml;

    return template.content.childNodes;
  }

  _actionsRenderer(root, column, rowData) {
    const columnRoot = root;

    if (columnRoot.firstElementChild) {
      return;
    }

    columnRoot.innerHTML = '';

    const actions = rowData.item['order-actions'];

    if (typeof actions !== 'undefined') {
      const icon = window.document.createElement('iron-icon');
      icon.setAttribute('icon', 'lumo:edit');

      const contextMenu = window.document.createElement('vaadin-context-menu');
      contextMenu.setAttribute('theme', 'cxl-actions-dropdown');
      contextMenu.openOn = 'click';
      contextMenu.appendChild(icon);
      contextMenu.renderer = columnRoot => {
        columnRoot.innerHTML = actions;
      };
      columnRoot.appendChild(contextMenu);
    }
  }
}

customElements.define('cxl-grid', CXLGridElement);
