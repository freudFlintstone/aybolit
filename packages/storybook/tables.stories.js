import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-institute';

storiesOf('Tables (vaadin-grid)', module)
  .addDecorator(withKnobs)
  .add('vaadin-grid', () => {
    setTimeout(function() {
      const vaadinGrid = document.querySelector('vaadin-grid');
      const vaadinGridColumns = document.querySelectorAll('vaadin-grid vaadin-grid-column');

      const vaadinGridData = [
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

      vaadinGrid.items = vaadinGridData;

      // Helpers
      function htmlToElements(html) {
        const template = document.createElement('template');
        const trimmedHtml = html.trim();
        template.innerHTML = trimmedHtml;

        return template.content.childNodes;
      }

      // Dropdown items
      const contextMenuRenderer = function(root, contextMenu, context, actions) {
        let listBox = root.firstElementChild;

        if (!listBox) {
          listBox = document.createElement('vaadin-list-box');
          root.appendChild(listBox);
        }

        const item = listBox.querySelector('vaadin-item');
        const filteredActions = Array.from(htmlToElements(actions)).filter(
          node => node.nodeName === 'A'
        );

        if (!item) {
          Object.keys(filteredActions).forEach(function(key) {
            const item = window.document.createElement('vaadin-item');
            item.appendChild(filteredActions[key]);
            listBox.appendChild(item);
          });
        }
      };

      const actionsRenderer = function(root, column, rowData) {
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
          contextMenuRenderer(columnRoot, contextMenu, context, actions);
        columnRoot.appendChild(contextMenu);
      };

      // Loop through columns and render content
      vaadinGridColumns.forEach(function(gridColumn) {
        const columnName = gridColumn.getAttribute('path');
        const isActions = columnName.indexOf('-actions') !== -1;

        if (isActions) {
          vaadinGrid.querySelector(`vaadin-grid-column[path="${columnName}"]`).renderer = (
            root,
            column,
            rowData
          ) => actionsRenderer(root, column, rowData);
        } else {
          vaadinGrid.querySelector(`vaadin-grid-column[path="${columnName}"]`).renderer = (
            root,
            column,
            rowData
          ) => {
            const columnRoot = root;

            if (columnRoot) {
              columnRoot.innerHTML = rowData.item[columnName];
            }
          };
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
    }, 1000);

    return html`
      <vaadin-grid theme="cxl-grid no-border" style="margin: 30px;">
        <vaadin-grid-column
          path="order-number"
          header="Order"
          class="order-number"
        ></vaadin-grid-column>
        <vaadin-grid-column path="order-date" header="Date" class="order-date"></vaadin-grid-column>
        <vaadin-grid-column
          path="order-status"
          header="Status"
          class="order-status"
        ></vaadin-grid-column>
        <vaadin-grid-column
          path="order-total"
          header="Total"
          class="order-total"
        ></vaadin-grid-column>
        <vaadin-grid-column
          path="order-actions"
          header="&nbsp;"
          class="order-actions"
        ></vaadin-grid-column>
      </vaadin-grid>
    `;
  });
