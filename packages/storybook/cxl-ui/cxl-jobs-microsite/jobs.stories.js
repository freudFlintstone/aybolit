import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

export default {
  title: 'CXL UI|cxl-jobs-microsite'
};

export const CxlJobsMicrositeJobs = () => {
  return html`
    <style></style>
    <body
      class="wordpress ltr en en-us child-theme multisite blog-4 y2020 m01 d24 h14 friday logged-in admin-bar singular singular-page singular-page-6 page-template-default layout-2c-l theme-hybrid-base-dynamic-conversionxl-institute woocommerce-js slug-jobs cxl-institute customize-support"
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
                  class="entry author-leho post-6 page type-page status-publish"
                  itemscope="itemscope"
                  itemtype="http://schema.org/CreativeWork"
                  id="post-6"
                >
                  <header class="entry-header o-content-width">
                    <h1 class="entry-title" itemprop="headline">
                      <span data-post-status="publish"></span>Jobs
                    </h1>
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content o-content-width" itemprop="text">
                    <div
                      class="job_listings"
                      data-location=""
                      data-keywords=""
                      data-show_filters="true"
                      data-show_pagination="false"
                      data-per_page="10"
                      data-orderby="featured"
                      data-order="DESC"
                      data-categories=""
                      data-post_id="6"
                    >
                      <form class="job_filters">
                        <div class="search_jobs">
                          <div class="search_keywords">
                            <label for="search_keywords">Keywords</label>
                            <input
                              type="text"
                              name="search_keywords"
                              id="search_keywords"
                              placeholder="Keywords"
                              value=""
                            />
                          </div>

                          <div class="search_location">
                            <label for="search_location">Location</label>
                            <input
                              type="text"
                              name="search_location"
                              id="search_location"
                              placeholder="Location"
                              value=""
                            />
                          </div>

                          <div style="clear: both"></div>

                          <div class="search_submit">
                            <input type="submit" value="Search Jobs" />
                          </div>
                        </div>

                        <ul class="job_types">
                          <li>
                            <label for="job_type_cro" class="cro">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="cro"
                                checked="checked"
                                id="job_type_cro"
                              />
                              CRO</label
                            >
                          </li>
                          <li>
                            <label for="job_type_freelance" class="freelance">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="freelance"
                                checked="checked"
                                id="job_type_freelance"
                              />
                              Freelance</label
                            >
                          </li>
                          <li>
                            <label for="job_type_full-time" class="full-time">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="full-time"
                                checked="checked"
                                id="job_type_full-time"
                              />
                              Full Time</label
                            >
                          </li>
                          <li>
                            <label for="job_type_internship" class="internship">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="internship"
                                checked="checked"
                                id="job_type_internship"
                              />
                              Internship</label
                            >
                          </li>
                          <li>
                            <label for="job_type_part-time" class="part-time">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="part-time"
                                checked="checked"
                                id="job_type_part-time"
                              />
                              Part Time</label
                            >
                          </li>
                          <li>
                            <label for="job_type_temporary" class="temporary">
                              <input
                                type="checkbox"
                                name="filter_job_type[]"
                                value="temporary"
                                checked="checked"
                                id="job_type_temporary"
                              />
                              Temporary</label
                            >
                          </li>
                        </ul>
                        <input type="hidden" name="filter_job_type[]" value="" />
                        <div class="showing_jobs" style="display: none;"></div>
                      </form>

                      <noscript
                        >Your browser does not support JavaScript, or it is disabled. JavaScript
                        must be enabled in order to view listings.</noscript
                      >
                      <vaadin-accordion class="job_listings" opened="NaN">
                        <vaadin-accordion-panel
                          theme="reverse"
                          class="entry author-jobs post-324 job_listing type-job_listing status-publish has-post-thumbnail job-type-cro"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div slot="summary">
                            <h3>
                              Front-End UI Engineer on WordPress projects
                              <span class="location"> Tallinn, Estonia </span>
                            </h3>
                          </div>
                          <div>
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/koonus-50x32-1.png"
                              alt="XYZ"
                            />
                            <div class="position">
                              <h3>Front-End UI Engineer on WordPress projects</h3>
                              <div class="company">
                                <strong>XYZ</strong>
                              </div>
                            </div>
                            <div class="location">
                              Tallinn, Estonia
                            </div>
                            <ul class="meta">
                              <li class="job-type cro">CRO</li>

                              <li class="date">
                                <time datetime="2020-01-21">Posted 3 days ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/front-end-ui-engineer-on-wordpress-projects/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="reverse"
                          class="entry author-jobs post-217 job_listing type-job_listing status-publish has-post-thumbnail job-type-freelance"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div slot="summary">
                            <h3>Content Marketer <span class="location"> Any Location </span></h3>
                          </div>
                          <div>
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/koonus-50x32-1.png"
                              alt="XYZ"
                            />
                            <div class="position">
                              <h3>Content Marketer</h3>
                              <div class="company">
                                <strong>XYZ</strong>
                              </div>
                            </div>
                            <div class="location">
                              Any Location
                            </div>
                            <ul class="meta">
                              <li class="job-type freelance">Freelance</li>

                              <li class="date">
                                <time datetime="2020-01-20">Posted 4 days ago</time>
                              </li>
                            </ul>
                            <a href="https://jobs.uprecords.org/job/content-marketer/">
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="reverse"
                          class="entry author-jobs post-212 job_listing type-job_listing status-publish has-post-thumbnail job-type-full-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div slot="summary">
                            <h3>
                              WordPress developer extalong title for sure
                              <span class="location"> Tallinn, Estonia </span>
                            </h3>
                          </div>
                          <div>
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/koonus-50x32-1.png"
                              alt="XYZ"
                            />
                            <div class="position">
                              <h3>WordPress developer extalong title for sure</h3>
                              <div class="company">
                                <strong>XYZ</strong>
                              </div>
                            </div>
                            <div class="location">
                              Tallinn, Estonia
                            </div>
                            <ul class="meta">
                              <li class="job-type full-time">Full Time</li>

                              <li class="date">
                                <time datetime="2020-01-20">Posted 4 days ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/wordpress-developer-extalong-title-for-sure/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="reverse"
                          class="entry author-jobs post-207 job_listing type-job_listing status-publish has-post-thumbnail job-type-internship"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div slot="summary">
                            <h3>
                              Quality Assurance tester <span class="location"> Hungary </span>
                            </h3>
                          </div>
                          <div>
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/koonus-50x32-1.png"
                              alt="XYZ"
                            />
                            <div class="position">
                              <h3>Quality Assurance tester</h3>
                              <div class="company">
                                <strong>XYZ</strong>
                              </div>
                            </div>
                            <div class="location">
                              Hungary
                            </div>
                            <ul class="meta">
                              <li class="job-type internship">Internship</li>

                              <li class="date">
                                <time datetime="2017-05-04">Posted 3 years ago</time>
                              </li>
                            </ul>
                            <a href="https://jobs.uprecords.org/job/cro-analyst/"> View Job </a>
                          </div>
                        </vaadin-accordion-panel>
                      </vaadin-accordion>
                      <a class="load_more_jobs" href="#" style="display:none;"
                        ><strong>Load more listings</strong></a
                      >
                    </div>
                  </div>
                  <!-- .entry-content -->

                  <footer class="entry-footer o-content-width">
                    <a
                      class="post-edit-link"
                      href="https://jobs.uprecords.org/wp-admin/post.php?post=6&amp;action=edit"
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
CxlJobsMicrositeJobs.story = {
  name: 'jobs'
};
