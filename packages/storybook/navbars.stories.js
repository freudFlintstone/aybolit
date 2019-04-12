import '@conversionxl/cxl-marketing-layout'; // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/polymer';
import { withKnobs, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Navbars', module)
  .addDecorator(withKnobs)
  .add('cxl-navbar', () => {
    const options = {
      topnav: 'topnav',
      bottomnav: 'bottomnav'
    };
    const navtype = select('Navigation position', options, null);

    return html`
      <cxl-navbar id="${navtype}" navtype="${navtype}">
        <!-- <cxl-logo></cxl-logo>
        <cxl-trainings-button onclick="open()">Courses</cxl-trainings-button>
        <cxl-search-button onclick="open()"></cxl-search-button>
        <cxl-burger-button onclick="open()"></cxl-burger-button> -->
        <nav class="menu menu--marketing-header">
          <h3 class="menu__title screen-reader-text">cxl-2019/marketing-header</h3>
          <ul class="menu__items nav-links">
            <li id="menu-item-1029882" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                >For teams</a
              >
            </li>
            <li id="menu-item-1029883" class="menu__item has-children ">
              <a href="/blog/" class="menu__link">Blog</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1030279" class="menu__item ">
                  <a href="#" class="menu__link">Blog home</a>
                </li>
                <li id="menu-item-1030280" class="menu__item ">
                  <a href="#" class="menu__link">Acquisition</a>
                </li>
                <li id="menu-item-1030281" class="menu__item ">
                  <a href="#" class="menu__link">Activation</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1029884" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
            </li>
            <li id="menu-item-1029885" class="menu__item ">
              <a href="/agency/" class="menu__link">CRO Services</a>
            </li>
          </ul>
        </nav>

        <ul class="nav-links">
          <li><a href="/login">Login</a></li>
          <li>
            <vaadin-button theme="dark main-button transparent small" tabindex="0" role="button"
              >Get free trial</vaadin-button
            >
          </li>
        </ul>
      </cxl-navbar>
    `;
  });
