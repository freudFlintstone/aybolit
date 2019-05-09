// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlGridStyles from '../styles/cxl-grid-css.js';

class CXLGridElement extends LitElement {
  static get properties() {
    return {
      gridData: {
        type: Array,
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

  // Dropdown items
  _contextMenuRenderer(root, contextMenu, context, actions) {
    let listBox = root.firstElementChild;

    if (!listBox) {
      listBox = document.createElement('div');
      root.appendChild(listBox);
    }

    const item = listBox.querySelector('vaadin-item');

    if (!item) {
      Object.keys(actions).forEach(function(key) {
        const item = window.document.createElement('vaadin-item');
        item.setAttribute('theme', 'cxl-dropdown-item');
        const hrefHTML = `<a href="${actions[key].url}">${actions[key].name}</a>`;

        item.innerHTML = hrefHTML;
        listBox.appendChild(item);
        console.log(listBox);
      });
    }
  }

  _actionsRenderer(root, column, rowData) {
    const columnRoot = root;

    if (columnRoot.firstElementChild) {
      return;
    }

    columnRoot.innerHTML = '';

    const actions = rowData.item['order-actions'];

    const icon = window.document.createElement('iron-icon');
    icon.setAttribute('icon', 'lumo:edit');

    const contextMenu = window.document.createElement('vaadin-context-menu');
    contextMenu.openOn = 'click';
    contextMenu.appendChild(icon);
    contextMenu.renderer = (columnRoot, contextMenu, context) =>
      this._contextMenuRenderer(columnRoot, contextMenu, context, actions);
    columnRoot.appendChild(contextMenu);
  }
}

customElements.define('cxl-grid', CXLGridElement);
