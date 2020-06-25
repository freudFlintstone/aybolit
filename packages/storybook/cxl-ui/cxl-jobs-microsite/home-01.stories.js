import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

export default {
  title: 'CXL UI|cxl-jobs-microsite'
};

export const CxlJobsMicrositeHomOne = () => {
  return html`
    <style></style>
    <body
      class="wordpress ltr en en-us child-theme multisite blog-4 y2020 m01 d24 h13 friday logged-in admin-bar home singular singular-page singular-page-26 page-template-default layout-2c-l theme-hybrid-base-dynamic-conversionxl-institute woocommerce-js slug-home cxl-institute customize-support"
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

            <cxl-marketing-nav
              class="menu menu-primary"
              role="navigation"
              id="menu-primary"
              aria-label="Primary Menu"
              itemscope="itemscope"
              itemtype="http://schema.org/SiteNavigationElement"
              slot="header"
            >
              <template id="cxl-marketing-nav-search-form-template">
                <vaadin-context-menu-item class="menu-item-search">
                  <form
                    id="search-form"
                    role="search"
                    method="get"
                    class="search-form"
                    action="https://jobs.uprecords.org/"
                  >
                    <label for="search-input">Search CXL Jobs app:</label>
                    <input
                      id="search-input"
                      type="search"
                      class="search-field"
                      placeholder="Search …"
                      value=""
                      name="s"
                    />
                    <vaadin-button
                      type="submit"
                      class="search-submit"
                      aria-label="Search"
                      theme="icon"
                      onclick="document.getElementById('search-form').submit();"
                    >
                      <iron-icon icon="lumo:angle-right"></iron-icon>
                    </vaadin-button>
                  </form>
                </vaadin-context-menu-item>
              </template>

              <vaadin-tabs
                id="menu-global-items"
                class="menu-items"
                theme="cxl-marketing-nav"
                selected="-1"
              >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-459"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-459 menu-item- menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/#home" aria-current="page"
                    ><span data-post-status="publish"></span>
                    <iron-icon
                      icon="cxl:logo"
                      style="width: var(--lumo-icon-size-xl, 48px);"
                    ></iron-icon> </a
                ></vaadin-tab>
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-461"
                  class="menu-item-split-nav menu-item menu-item-type-post_type menu-item-object-page menu-item-461 menu-item-parent-archive menu-item-internships menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/internships/"
                    ><span data-post-status="publish"></span
                    ><span data-post-status="publish"></span>Internships</a
                  ></vaadin-tab
                >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-382"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-382 menu-item-parent-archive menu-item-job-apply menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/job-apply/"
                    ><span data-post-status="publish"></span
                    ><span data-post-status="publish"></span>Job Apply</a
                  ></vaadin-tab
                >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-383"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-383 menu-item-parent-archive menu-item-home-02 menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/home-02/"
                    ><span data-post-status="publish"></span
                    ><span data-post-status="publish"></span>Home 02</a
                  ></vaadin-tab
                >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-384"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-384 menu-item-parent-archive menu-item-jobs menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/jobs/"
                    ><span data-post-status="publish"></span
                    ><span data-post-status="publish"></span>Jobs</a
                  ></vaadin-tab
                >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-385"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-385 menu-item-parent-archive menu-item-post-a-job menu-item-depth-0"
                >
                  <a href="https://jobs.uprecords.org/post-a-job/"
                    ><span data-post-status="publish"></span
                    ><span data-post-status="publish"></span>Post a Job</a
                  ></vaadin-tab
                >
                <vaadin-tab
                  theme="cxl-marketing-nav"
                  id="menu-item-386"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-386 menu-item-parent-archive menu-item-see-current-openings menu-item-depth-0"
                >
                  <a title="Current openings" href="https://jobs.uprecords.org/all-jobs/"
                    ><span data-post-status="publish"></span>
                    <vaadin-button theme="primary" tabindex="0" role="button"
                      >See current openings
                    </vaadin-button>
                  </a></vaadin-tab
                >
              </vaadin-tabs>
              <script>
                window.CXL = window.CXL || {};
                window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
                window.CXL.contextMenuItems['global'] = [
                  {
                    depth: 0,
                    text: '',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/#home',
                    id: 459,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'Internships',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/internships\\/',
                    id: 461,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'Job Apply',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/job-apply\\/',
                    id: 382,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'Home 02',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/home-02\\/',
                    id: 383,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'Jobs',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/jobs\\/',
                    id: 384,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'Post a Job',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/post-a-job\\/',
                    id: 385,
                    parent: 0
                  },
                  {
                    depth: 0,
                    text: 'See current openings',
                    component: 'a',
                    href: 'https:\\/\\/jobs.uprecords.org\\/all-jobs\\/',
                    id: 386,
                    parent: 0
                  }
                ];
              </script> </cxl-marketing-nav
            ><!-- #menu-primary -->

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
                  class="entry author-jobs post-26 page type-page status-publish"
                  itemscope="itemscope"
                  itemtype="http://schema.org/CreativeWork"
                  id="post-26"
                >
                  <header class="entry-header">
                    <h1 class="entry-title" itemprop="headline">
                      <span data-post-status="publish"></span>Home
                    </h1>

                    <div class="entry-byline">
                      <a
                        class="post-edit-link button"
                        href="https://jobs.uprecords.org/wp-admin/post.php?post=26&amp;action=edit&amp;classic-editor"
                        >Edit page</a
                      >
                    </div>
                    <!-- .entry-byline -->
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content" itemprop="text">
                    <figure class="wp-block-image alignwide size-large">
                      <img
                        src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/featured-img-1024x429.jpg"
                        alt=""
                        class="wp-image-104"
                      />
                    </figure>

                    <h2 class="has-text-align-center" id="do-your-best-work-at-cxl">
                      Do your best work at C<strong>XL</strong
                      ><a
                        class="anchorjs-link "
                        aria-label="Anchor"
                        data-anchorjs-icon=""
                        href="#do-your-best-work-at-cxl"
                        style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
                      ></a>
                    </h2>

                    <p>
                      CXL is a leading source for optimization, growth and digital analytics
                      expertise.
                    </p>

                    <p>
                      We’re look A+ players to join us on our journey to build the world’s greatest
                      marketing education platform.
                    </p>

                    <div class="wp-block-button">
                      <a
                        class="wp-block-button__link has-text-color has-background has-vivid-red-background-color"
                        href="#all-jobs"
                        style="color:#ffffff;border-radius:4px"
                        >See all openings</a
                      >
                    </div>

                    <hr class="wp-block-separator is-style-wide" />

                    <p>
                      If you’re one of those people who always gives 100% of yourself, and aim for
                      100%, we’re waiting for you. We value proactivity and passion, and we strive
                      for excellence above all.
                    </p>

                    <p>
                      CXL has always been with a flat hierarchy – minimal power distance, little
                      supervision with an expectation of proactivity while promoting employee’s
                      increased involvement in the decision making process.
                    </p>

                    <div class="wp-block-columns alignwide">
                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>

                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>

                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>

                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>

                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>

                      <div class="wp-block-column">
                        <div class="wp-block-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                              alt=""
                              class="wp-image-117"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>

                    <p>
                      Someone that needs a lot of hand-holding and micromanagement will not succeed
                      here. If you like to get shit done, exercise your creative instincts and run
                      experiments while chipping away at dream – this is where you can do your best
                      work.
                    </p>

                    <p>
                      We also make sure there is plenty of fun and recharging opportunities at the
                      office. From in-office gym to foosball matches and great coffee, we got you.
                    </p>

                    <div class="wp-block-media-text alignwide has-media-on-the-right">
                      <figure class="wp-block-media-text__media">
                        <img
                          src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/why-work-large-img-1.jpg"
                          alt=""
                          class="wp-image-120"
                        />
                      </figure>
                      <div class="wp-block-media-text__content">
                        <h2 id="why-work-at-cxl">
                          Why work at C<strong>XL</strong
                          ><a
                            class="anchorjs-link "
                            aria-label="Anchor"
                            data-anchorjs-icon=""
                            href="#why-work-at-cxl"
                            style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
                          ></a>
                        </h2>

                        <p>
                          Crunchbase is the leading destination where you can discover innovative
                          companies, connecd with the people behind them, and uncover new
                          opportunities.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Learn from people who know their shit</h4>

                        <p>We have some real badasses in CXL.</p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Work on exciting stuff</h4>

                        <p>
                          The world is your playground. We have exciting clients and interesting
                          projects. It’s amazing how much you can lean seeing the kitchen side of so
                          many companies.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Personal Development</h4>

                        <p>
                          We support your growth with mentor-ship, necessary books, courses and so
                          on. All-you-can learn access to CXL institute. You get to work with people
                          who push you to become better.
                        </p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Freedom</h4>

                        <p>
                          No one will micromanage you. You have the freedom to take on and lead new
                          projects within the company as long as they support our overall goals.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Flexible schedules</h4>

                        <p>Need remote days? Cool, have to stay home with a sick kid? Of course.</p>
                      </div>

                      <div class="wp-block-column">
                        <h4>28 paid vacation days per year</h4>

                        <p>CXL is the leading destination for leading-edge marketing knowledge.</p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Health insurance reimbursement</h4>

                        <p>CXL is the leading destination for leading-edge marketing knowledge.</p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Be part of something big</h4>

                        <p>
                          Who thinks small, remains small. Be surrounded by people going places.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Competitive salary</h4>

                        <p>
                          No one will micromanage you. You have the freedom to take on and lead new
                          projects within the company as long as they support our overall goals.
                        </p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Your role and responsibilities grow with you</h4>

                        <p>
                          Danial Pink wrote this in his seminal book “Drive”. People are most
                          motivated by having autonomy, mastery and purpose. We make sure you get a
                          ton of all three.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <figure class="wp-block-gallery columns-3 is-cropped">
                          <ul class="blocks-gallery-grid">
                            <li class="blocks-gallery-item">
                              <figure>
                                <img
                                  src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                                  alt=""
                                  data-id="118"
                                  data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                                  data-link="http://jobs.uprecords.org/sample-page/small-img-2/"
                                  class="wp-image-118"
                                />
                              </figure>
                            </li>
                            <li class="blocks-gallery-item">
                              <figure>
                                <img
                                  src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                                  alt=""
                                  data-id="117"
                                  data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-1.jpg"
                                  data-link="http://jobs.uprecords.org/sample-page/small-img-1/"
                                  class="wp-image-117"
                                />
                              </figure>
                            </li>
                            <li class="blocks-gallery-item">
                              <figure>
                                <img
                                  src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-3.jpg"
                                  alt=""
                                  data-id="119"
                                  data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-3.jpg"
                                  data-link="http://jobs.uprecords.org/sample-page/small-img-3/"
                                  class="wp-image-119"
                                />
                              </figure>
                            </li>
                          </ul>
                        </figure>
                      </div>

                      <div class="wp-block-column">
                        <h3>Values</h3>

                        <p>
                          Our values determine how we operate on a daily basis and what we value
                          about our colleagues.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Excellence</h4>

                        <p>
                          Everything we do is high quality. Anything worth doing will take time,
                          attention and planning. If we are gonna do something, it’s either all-in
                          or we don’t do it. We don’t half ass it, we always full ass everything.
                        </p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Learning</h4>

                        <p>
                          We’re eve-evolving, always striving to become better versions of
                          ourselves. We invest in our growth, we put in work, we show up. We don’t
                          have dogmas, we’re willing to change our minds and change course in light
                          of new evidence.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Speed</h4>

                        <p>
                          Actions speaks louder then words, action now matters even more.W don’t
                          dilly-daily, we decide. Instead of talking about something 10 times, we
                          get into it. Do now rather than later. When you do something, al least
                          then we have something to talk about. We always ask, what’s the best use
                          of my time right now?
                        </p>
                      </div>

                      <div class="wp-block-column">
                        <h4>Proactivity</h4>

                        <p>
                          We take responsibility. We’re change-oriented. Initiative and anticipatory
                          action are king. If we see that something is broken, we fix it. We own it.
                          We have integrity, we do what we say.
                        </p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <h4>Fun</h4>

                        <p>
                          Fun is a serious business at CXL. We make sure we’re enjoying the process
                          while chipping away at dream. We take breaks to recharge and enjoy the
                          moment.
                        </p>
                      </div>

                      <div class="wp-block-column">
                        <blockquote class="wp-block-quote">
                          <p>
                            One piece of the fun is organizing our 2 conferences per year –
                            <a href="#cxl-live-conference">CXL Live</a> in Austin and
                            <a href="#elite-camp-conference">Elite Camp</a> in Estonia. It’s when
                            the whole CXL team comes together. We don’t use any event management
                            companies, it’s all done by our people.<br /><br />It also gets bloody
                            hot in Austin in the summer, so the whole teams ships over to Estonia
                            for a month or so (or at least has in the last 2 years). Fun times!
                          </p>
                        </blockquote>
                      </div>
                    </div>

                    <div class="wp-block-group alignfull">
                      <div class="wp-block-group__inner-container">
                        <h3 class="has-text-align-center">
                          Offices on two continents. Remote works too.
                        </h3>

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

                    <h3 class="has-text-align-center">Current openings:</h3>

                    <div
                      class="job_listings"
                      data-location=""
                      data-keywords=""
                      data-show_filters="false"
                      data-show_pagination="false"
                      data-per_page="3"
                      data-orderby="featured"
                      data-order="DESC"
                      data-categories=""
                      data-disable-form-state-storage=""
                      data-post_id="26"
                    >
                      <cxl-vaadin-accordion class="plural" theme="cxl-jobs-listing" opened="0">
                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-something post-435 job_listing type-job_listing status-publish job_listing_tag-jokes job-type-full-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              Enternaining people on a beach
                              <span class="location"> Sunny Beach </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="NoName"
                            />
                            <div class="position">
                              <h3>Enternaining people on a beach</h3>
                              <div class="company">
                                <strong>NoName</strong>
                              </div>
                            </div>
                            <div class="location">
                              Sunny Beach
                            </div>
                            <ul class="meta">
                              <li class="job-type full-time">Full Time</li>

                              <li class="date">
                                <time datetime="2020-05-26">Posted 4 weeks ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/sunny-beach-2-enternaining-people-on-a-beach/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-postingajob post-431 job_listing type-job_listing status-expired job_listing_tag-management job_listing_tag-projects job-type-part-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              Wizard of Light Bulb Moments
                              <span class="location"> Klaipeda, Lithuania </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="CompanyName"
                            />
                            <div class="position">
                              <h3>Wizard of Light Bulb Moments</h3>
                              <div class="company">
                                <strong>CompanyName</strong>
                              </div>
                            </div>
                            <div class="location">
                              Klaipeda, Lithuania
                            </div>
                            <ul class="meta">
                              <li class="job-type part-time">Part Time</li>

                              <li class="date">
                                <time datetime="2020-05-22">Posted 1 month ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/klaipeda-lithuania-3-wizard-of-light-bulb-moments/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-newuser post-426 job_listing type-job_listing status-expired job_listing_tag-tags job-type-full-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              job title <span class="location"> london </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="company name"
                            />
                            <div class="position">
                              <h3>job title</h3>
                              <div class="company">
                                <strong>company name</strong>
                              </div>
                            </div>
                            <div class="location">
                              london
                            </div>
                            <ul class="meta">
                              <li class="job-type full-time">Full Time</li>

                              <li class="date">
                                <time datetime="2020-05-21">Posted 1 month ago</time>
                              </li>
                            </ul>
                            <a href="https://jobs.uprecords.org/job/london-2-job-title-3/">
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <a class="load_more_jobs" href="#"
                          ><strong>Load more listings</strong></a
                        ></cxl-vaadin-accordion
                      >
                    </div>

                    <h3 class="has-text-align-center">We work hard &amp; play hard</h3>

                    <figure class="wp-block-gallery columns-3 is-cropped">
                      <ul class="blocks-gallery-grid">
                        <li class="blocks-gallery-item">
                          <figure>
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-1.jpg"
                              alt=""
                              data-id="220"
                              data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-1.jpg"
                              data-link="http://jobs.uprecords.org/sample-page/slide-img-1-2/"
                              class="wp-image-220"
                            />
                          </figure>
                        </li>
                        <li class="blocks-gallery-item">
                          <figure>
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-2.jpg"
                              alt=""
                              data-id="221"
                              data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-2.jpg"
                              data-link="http://jobs.uprecords.org/sample-page/slide-img-2/"
                              class="wp-image-221"
                            />
                          </figure>
                        </li>
                        <li class="blocks-gallery-item">
                          <figure>
                            <img
                              src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-3.jpg"
                              alt=""
                              data-id="222"
                              data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-3.jpg"
                              data-link="http://jobs.uprecords.org/sample-page/slide-img-3-2/"
                              class="wp-image-222"
                            />
                          </figure>
                        </li>
                      </ul>
                    </figure>

                    <h2 class="has-text-align-center" id="hear-from-your-future-teammates">
                      Hear from your future teammates<a
                        class="anchorjs-link "
                        aria-label="Anchor"
                        data-anchorjs-icon=""
                        href="#hear-from-your-future-teammates"
                        style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
                      ></a>
                    </h2>

                    <div class="wp-block-columns">
                      <div class="wp-block-column">
                        <figure class="wp-block-image size-full is-resized is-style-circle-mask">
                          <img
                            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                            alt=""
                            class="wp-image-118"
                            width="60"
                          />
                        </figure>

                        <p>
                          “Working at CXL has given me the chance to develop my skills in the
                          direction I choose.”
                        </p>

                        <p><strong>Diago</strong></p>

                        <p>UX – Austin, TX</p>
                      </div>

                      <div class="wp-block-column">
                        <figure class="wp-block-image size-full is-resized is-style-circle-mask">
                          <img
                            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                            alt=""
                            class="wp-image-118"
                            width="60"
                          />
                        </figure>

                        <p>
                          “At CXL, you will be empowered to work on things that you’re passionate
                          about. You will be given autonomy. You ideas will matter.”
                        </p>

                        <p><strong>Pawel</strong></p>

                        <p>Engineering – Remote</p>
                      </div>
                    </div>

                    <div class="wp-block-columns">
                      <div class="wp-block-column aligncenter" style="flex-basis:50%">
                        <figure class="wp-block-image size-full is-resized is-style-circle-mask">
                          <img
                            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/small-img-2.jpg"
                            alt=""
                            class="wp-image-118"
                            width="60"
                          />
                        </figure>

                        <p class="has-text-align-left">
                          “CXL has a thorough process they take customers through. Once they
                          understand their customer’s challenges and needs, they dive into their
                          comprehensive process”
                        </p>

                        <p class="has-text-align-left"><strong>Meghan Gouveia</strong></p>

                        <p class="has-text-align-left">
                          Managing Director – Sweden, at Trollweb Solutions
                        </p>
                      </div>
                    </div>

                    <div
                      class="job_listings"
                      data-location=""
                      data-keywords=""
                      data-show_filters="false"
                      data-show_pagination="false"
                      data-per_page="3"
                      data-orderby="featured"
                      data-order="DESC"
                      data-categories=""
                      data-disable-form-state-storage=""
                      data-post_id="26"
                    >
                      <cxl-vaadin-accordion class="plural" theme="cxl-jobs-listing" opened="0">
                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-something post-435 job_listing type-job_listing status-publish job_listing_tag-jokes job-type-full-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              Enternaining people on a beach
                              <span class="location"> Sunny Beach </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="NoName"
                            />
                            <div class="position">
                              <h3>Enternaining people on a beach</h3>
                              <div class="company">
                                <strong>NoName</strong>
                              </div>
                            </div>
                            <div class="location">
                              Sunny Beach
                            </div>
                            <ul class="meta">
                              <li class="job-type full-time">Full Time</li>

                              <li class="date">
                                <time datetime="2020-05-26">Posted 4 weeks ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/sunny-beach-2-enternaining-people-on-a-beach/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-postingajob post-431 job_listing type-job_listing status-expired job_listing_tag-management job_listing_tag-projects job-type-part-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              Wizard of Light Bulb Moments
                              <span class="location"> Klaipeda, Lithuania </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="CompanyName"
                            />
                            <div class="position">
                              <h3>Wizard of Light Bulb Moments</h3>
                              <div class="company">
                                <strong>CompanyName</strong>
                              </div>
                            </div>
                            <div class="location">
                              Klaipeda, Lithuania
                            </div>
                            <ul class="meta">
                              <li class="job-type part-time">Part Time</li>

                              <li class="date">
                                <time datetime="2020-05-22">Posted 1 month ago</time>
                              </li>
                            </ul>
                            <a
                              href="https://jobs.uprecords.org/job/klaipeda-lithuania-3-wizard-of-light-bulb-moments/"
                            >
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel
                          theme="cxl-jobs-listing reverse"
                          class="entry author-newuser post-426 job_listing type-job_listing status-expired job_listing_tag-tags job-type-full-time"
                          data-longitude=""
                          data-latitude=""
                          tabindex="0"
                        >
                          <div class="entry-header" slot="summary">
                            <h3 class="entry-title">
                              job title <span class="location"> london </span>
                            </h3>
                          </div>
                          <div class="entry-summary" itemprop="description">
                            <img
                              class="company_logo"
                              src="https://jobs.uprecords.org/wp-content/plugins/wp-job-manager/assets/images/company.png"
                              alt="company name"
                            />
                            <div class="position">
                              <h3>job title</h3>
                              <div class="company">
                                <strong>company name</strong>
                              </div>
                            </div>
                            <div class="location">
                              london
                            </div>
                            <ul class="meta">
                              <li class="job-type full-time">Full Time</li>

                              <li class="date">
                                <time datetime="2020-05-21">Posted 1 month ago</time>
                              </li>
                            </ul>
                            <a href="https://jobs.uprecords.org/job/london-2-job-title-3/">
                              View Job
                            </a>
                          </div>
                        </vaadin-accordion-panel>

                        <a class="load_more_jobs" href="#"
                          ><strong>Load more listings</strong></a
                        ></cxl-vaadin-accordion
                      >
                    </div>
                  </div>
                  <!-- .entry-content -->

                  <footer class="entry-footer"></footer>
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
CxlJobsMicrositeHomOne.story = {
  name: 'home-01'
};
