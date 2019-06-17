// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIronFormStyles from '../styles/cxl-iron-form-css.js';
import '@polymer/iron-form';

// Extend the LitElement base class
class CXLIronFormElement extends LitElement {
  static get properties() {
    return {
      formMethod: {
        type: String,
        attribute: 'form-method'
      },
      formAction: {
        type: String,
        attribute: 'form-action'
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlIronFormStyles];
  }

  render() {
    return html`
      <iron-form>
        <form method="${this.formMethod}" action="${this.formAction}">
          <slot></slot>
        </form>
      </iron-form>

      <div part="confirmation" hidden>
        <slot name="confirmation"></slot>
      </div>
    `;
  }

  firstUpdated() {}

  submit() {
    const ironForm = this.shadowRoot.querySelector('iron-form');
    const that = this;

    if (ironForm.validate()) {
      const formData = ironForm.serializeForm();
      formData.created_at = new Date().toISOString().slice(0, 10);
      formData.source_martech_id = 'custom';
      formData.source = location.host;

      fetch(this.formAction, {
        method: this.formMethod,
        crossDomain: true,
        headers: {
          'Content-type': 'multipart/form-data; charset=UTF-8'
        },
        data: formData,
        processData: false,
        contentType: false
      })
        .then(function(response) {
          if (response.ok) {
            const confirmationContent = that.shadowRoot.querySelector('[part="confirmation"]');
            confirmationContent.removeAttribute('hidden');
            ironForm.setAttribute('hidden', '');
          }
        })
        .catch(function(error) {
          console.log('Request failed', error);
        });
    }
  }
}

// Register the new element with the browser.
customElements.define('cxl-iron-form', CXLIronFormElement);
