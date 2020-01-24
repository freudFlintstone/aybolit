import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

export default {
  title: 'CXL UI|cxl-jobs-microsite'
};

export const CxlJobsMicrositeJobApply = () => {
  return html`
    <style></style>
    <body
      class="wordpress ltr en en-us child-theme multisite blog-4 y2020 m01 d24 h14 friday logged-in admin-bar singular singular-page singular-page-33 page-template-default layout-2c-l theme-hybrid-base-dynamic-conversionxl-institute woocommerce-js slug-job-apply cxl-institute customize-support"
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
                  class="entry author-jobs post-33 page type-page status-publish"
                  itemscope="itemscope"
                  itemtype="http://schema.org/CreativeWork"
                  id="post-33"
                >
                  <a href="https://jobs.uprecords.org/all-jobs/">← All Jobs</a>
                  <header class="entry-header o-content-width">
                    <h1 class="entry-title" itemprop="headline">
                      Front-End UI Engineer on WordPress projects
                    </h1>
                    <p>
                      Tallinn, Estonia
                    </p>
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content o-content-width" itemprop="text">
                    <div class="job-manager-application-wrapper">
                      <form
                        class="job-manager-application-form job-manager-form"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <!--<form class="job-manager-application-form job-manager-form" method="post" enctype="multipart/form-data" action="https://jobs.uprecords.org/job/front-end-ui-engineer-on-wordpress-projects/">-->

                        <fieldset class="fieldset-">
                          <label for="">Full name</label>
                          <div class="field required-field">
                            <input
                              type="text"
                              class="input-text"
                              name="full-name"
                              id="full-name"
                              placeholder=""
                              value=" "
                              maxlength=""
                              required=""
                            />
                          </div>
                        </fieldset>
                        <fieldset class="fieldset-">
                          <label for="">Email address</label>
                          <div class="field required-field">
                            <input
                              type="text"
                              class="input-text"
                              name="email-address"
                              id="email-address"
                              placeholder=""
                              value="syed.sayal.shah@gmail.com"
                              maxlength=""
                              required=""
                            />
                          </div>
                        </fieldset>
                        <fieldset class="fieldset-">
                          <label for="">Phone <small>(optional)</small></label>
                          <div class="field ">
                            <input
                              type="text"
                              class="input-text"
                              name="phone"
                              id="phone"
                              placeholder=""
                              value=""
                              maxlength=""
                            />
                          </div>
                        </fieldset>
                        <fieldset class="fieldset-">
                          <label for="">Resume/CV <small>(optional)</small></label>
                          <div class="field ">
                            <div class="job-manager-uploaded-files"></div>

                            <input
                              type="file"
                              class="input-text"
                              data-file_types="jpg|jpeg|jpe|png|gif|mov|qt|avi|mpeg|mpg|mpe|3gp|3gpp|3g2|3gp2|mid|midi|pdf|doc|docx|docm|pot|pps|ppt|pptx|pptm|odt|ppsx|ppsm|xla|xls|xlt|xlw|xlsx|xlsm|xlsb|key|mp3|m4a|m4b|ogg|oga|wma|wav|mp4|m4v|webm|ogv|wmv|flv"
                              name="resume-cv"
                              id="resume-cv"
                              placeholder=""
                            />
                            <small class="description">
                              Upload your CV/resume or any other relevant file. Max. file size: 1
                              MB.
                            </small>
                          </div>
                        </fieldset>
                        <fieldset class="fieldset-">
                          <label for="">Cover Letter <small>(optional)</small></label>
                          <div class="field ">
                            <div class="job-manager-uploaded-files"></div>

                            <input
                              type="file"
                              class="input-text"
                              data-file_types="jpg|jpeg|jpe|png|gif|mov|qt|avi|mpeg|mpg|mpe|3gp|3gpp|3g2|3gp2|mid|midi|pdf|doc|docx|docm|pot|pps|ppt|pptx|pptm|odt|ppsx|ppsm|xla|xls|xlt|xlw|xlsx|xlsm|xlsb|key|mp3|m4a|m4b|ogg|oga|wma|wav|mp4|m4v|webm|ogv|wmv|flv"
                              name="cover-letter"
                              id="cover-letter"
                              placeholder=""
                            />
                            <small class="description"> Maximum file size: 1 MB. </small>
                          </div>
                        </fieldset>
                        <div class="form-content">
                          <h3></h3>
                        </div>
                        <fieldset class="fieldset-">
                          <label for="">Message</label>
                          <div class="field required-field">
                            <textarea
                              cols="20"
                              rows="3"
                              class="input-text"
                              name="message"
                              id="message"
                              placeholder="Your cover letter/message sent to the employer"
                              maxlength=""
                              required=""
                            ></textarea>
                          </div>
                        </fieldset>

                        <p>
                          <input
                            type="submit"
                            class="button wp_job_manager_send_application_button"
                            value="Send application"
                          />
                          <input type="hidden" name="wp_job_manager_send_application" value="1" />
                          <input type="hidden" name="job_id" value="324" />
                        </p>
                      </form>
                    </div>
                  </div>
                  <!-- .entry-content -->

                  <footer class="entry-footer o-content-width">
                    <a
                      class="post-edit-link"
                      href="https://jobs.uprecords.org/wp-admin/post.php?post=33&amp;action=edit"
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
CxlJobsMicrositeJobApply.story = {
  name: 'job-apply'
};
