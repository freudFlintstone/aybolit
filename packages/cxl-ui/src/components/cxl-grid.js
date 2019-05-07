// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlGridStyles from '../styles/cxl-grid-css.js';

class CXLGridElement extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlGridStyles];
  }

  constructor() {
    super();
    this.data = [
      {
        'order-number':
          '<a href="https://conversionxli.warmpress.com/my-account/view-order/1031988">#25<a>',
        'order-date': 'May 6, 2019',
        'order-status': 'Completed',
        'order-total':
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$<span>3745</span> for 6 items',
        'order-actions':
          '<a href="https://conversionxli.warmpress.com/my-account/view-order/1031988" class="button view">View</a><a href="https://conversionxli.warmpress.com/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=1031988&my-account&_wpnonce=1118f43534" class="button invoice">Download invoice (PDF)</a>'
      },
      {
        'order-number':
          '<a href="https://conversionxli.warmpress.com/my-account/view-order/1031988">#25<a>',
        'order-date': 'May 6, 2019',
        'order-status': 'Completed',
        'order-total':
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$<span>3745</span> for 6 items',
        'order-actions':
          '<a href="https://conversionxli.warmpress.com/my-account/view-order/1031988" class="button view">View</a><a href="https://conversionxli.warmpress.com/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=1031988&my-account&_wpnonce=1118f43534" class="button invoice">Download invoice (PDF)</a>'
      }
    ];
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

      vaadinGrid.items = that.data;

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

  // Dropdown items TODO: remove if possible
  _contextMenuRenderer(root, contextMenu, context, actions) {
    let listBox = root.firstElementChild;

    if (!listBox) {
      listBox = document.createElement('vaadin-list-box');
      root.appendChild(listBox);
    }

    const item = listBox.querySelector('vaadin-item');
    const filteredActions = Array.from(this._htmlToElements(actions)).filter(
      node => node.nodeName === 'A'
    );

    if (!item) {
      Object.keys(filteredActions).forEach(function(key) {
        const item = window.document.createElement('vaadin-item');
        item.appendChild(filteredActions[key]);
        listBox.appendChild(item);
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
