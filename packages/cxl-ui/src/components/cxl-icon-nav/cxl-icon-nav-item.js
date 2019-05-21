// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@vaadin/vaadin-item';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlIconNavItemStyles from '../../styles/cxl-icon-nav-item-css.js';

class CXLIconNavItemElement extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      title: {
        type: String
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlIconNavItemStyles];
  }

  render() {
    return html`
      <a href=${ifDefined(this.href)}>
        ${this.navItemContent}
        ${this.title
          ? html`
              <span>${this.title}</span>
            `
          : ''}
      </a>
    `;
  }

  get navItemContent() {
    const vaadinTab = this.parentNode;
    const icon = `<iron-icon class="icon size-l" icon="${this.innerHTML}"></iron-icon>`;

    switch (true) {
      case vaadinTab.className.indexOf('--type-html') > 0:
        return unsafeHTML(this.innerHTML);
      case vaadinTab.className.indexOf('--search') > 0:
        {
          const searchDialog = document.querySelector('vaadin-dialog[theme="cxl-search-overlay"]');

          vaadinTab.addEventListener('click', function() {
            searchDialog.opened = true;

            const searchDialogOverlay = document.querySelector(
              'vaadin-dialog-overlay[theme="cxl-search-overlay"]'
            );
            const closeButton = searchDialogOverlay.querySelector('iron-icon[icon="lumo:cross"]');

            closeButton.addEventListener('click', function() {
              searchDialog.opened = false;
            });
          });
        }
        return unsafeHTML(icon);
      default:
        return unsafeHTML(icon);
    }
  }
}

customElements.define('cxl-icon-nav-item', CXLIconNavItemElement);
