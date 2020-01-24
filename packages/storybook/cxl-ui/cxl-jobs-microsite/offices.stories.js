import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

export default {
  title: 'CXL UI|cxl-jobs-microsite'
};

export const CxlJobsMicrositeOffices = () => {
  return html`
    <style></style>
    <body
      class="wordpress ltr en en-us child-theme multisite blog-4 y2020 m01 d24 h14 friday logged-in admin-bar singular singular-page singular-page-31 page-template-default layout-2c-l theme-hybrid-base-dynamic-conversionxl-institute woocommerce-js slug-offices-on-two-continents cxl-institute customize-support"
      itemscope="itemscope"
      itemtype="http://schema.org/WebPage"
      dir="ltr"
    >
      <div id="container">
        <!-- hbd_before_header -->
        <!-- end hbd_before_header -->

        <header
          class="site-header"
          id="header"
          role="banner"
          itemscope="itemscope"
          itemtype="http://schema.org/WPHeader"
        >
          <div class="wrap-header wrap" id="wrap-header">
            <!-- hbd_header -->
            ../vendor/cxl/wp-theme-lib/templates/menu/primary.php
            <!-- end hbd_header -->
          </div>
          <!-- #wrap-header -->
        </header>
        <!-- #header -->

        <!-- hbd_after_header -->
        <!-- end hbd_after_header -->

        <div id="main" class="main">
          <div class="wrap-main wrap" id="wrap-main">
            <!-- hbd_before_main -->
            <!-- end hbd_before_main -->

            <main class="content" id="content" role="main" itemprop="mainContentOfPage">
              <div class="wrap-content wrap" id="wrap-content">
                <!-- hbd_before_loop -->
                <!-- end hbd_before_loop -->

                <article
                  class="entry author-jobs post-31 page type-page status-publish"
                  itemscope="itemscope"
                  itemtype="http://schema.org/CreativeWork"
                  id="post-31"
                >
                  <header class="entry-header o-content-width">
                    <h1 class="entry-title" itemprop="headline">
                      <span data-post-status="publish"></span>Offices on two continents
                    </h1>
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content o-content-width" itemprop="text">
                    <div class="wp-block-group alignfull">
                      <div class="wp-block-group__inner-container">
                        <figure class="wp-block-image size-large">
                          <img
                            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/offices-map-1024x248.jpg"
                            alt=""
                            class="wp-image-205"
                          />
                        </figure>

                        <div class="wp-block-columns">
                          <div class="wp-block-column">
                            <figure
                              class="wp-block-image size-full is-resized is-style-circle-mask"
                            >
                              <img
                                src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                                alt=""
                                class="wp-image-117"
                                width="80"
                                height="46"
                              />
                            </figure>

                            <h4>Austin, Texas</h4>

                            <p>USA</p>

                            <p>
                              Your bone’s don’t break, mine do. That’s clear. Your cells react to
                              bacteria and viruses differently than mine. You don’t get sick, I do.
                            </p>
                          </div>

                          <div class="wp-block-column">
                            <figure
                              class="wp-block-image size-full is-resized is-style-circle-mask"
                            >
                              <img
                                src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                                alt=""
                                class="wp-image-118"
                                width="80"
                              />
                            </figure>

                            <h4>London</h4>

                            <p>United Kingdom</p>

                            <p>
                              Your bone’s don’t break, mine do. That’s clear. Your cells react to
                              bacteria and viruses differently than mine. You don’t get sick, I do.
                            </p>
                          </div>

                          <div class="wp-block-column">
                            <figure
                              class="wp-block-image size-full is-resized is-style-circle-mask"
                            >
                              <img
                                src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-3.jpg"
                                alt=""
                                class="wp-image-119"
                                width="80"
                              />
                            </figure>

                            <h4>London</h4>

                            <p>United Kingdom</p>

                            <p>
                              Your bone’s don’t break, mine do. That’s clear. Your cells react to
                              bacteria and viruses differently than mine. You don’t get sick, I do.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- .entry-content -->

                  <footer class="entry-footer o-content-width">
                    <a
                      class="post-edit-link"
                      href="https://jobs.uprecords.org/wp-admin/post.php?post=31&amp;action=edit"
                      >Edit This</a
                    >
                  </footer>
                  <!-- .entry-footer -->
                </article>
                <!-- .entry -->

                <!-- hbd_after_loop -->
                <!-- end hbd_after_loop -->
              </div>
              <!-- #wrap-content -->
            </main>
            <!-- #content -->

            <!-- hbd_after_main -->
            <!-- end hbd_after_main -->
          </div>
          <!-- #wrap-main -->
        </div>
        <!-- #main -->

        <!-- hbd_before_footer -->
        <!-- end hbd_before_footer -->

        <footer
          class="site-footer"
          id="footer"
          role="contentinfo"
          itemscope="itemscope"
          itemtype="http://schema.org/WPFooter"
        >
          <div class="wrap-footer wrap" id="wrap-footer">
            <!-- hbd_footer -->
            <!-- end hbd_footer -->
          </div>
          <!-- #wrap-footer -->
        </footer>
        <!-- #footer -->

        <!-- hbd_after_footer -->
        <!-- end hbd_after_footer -->
      </div>
    </body>
  `;
};

// @todo localStorage data panel?
CxlJobsMicrositeOffices.story = {
  name: 'offices'
};
