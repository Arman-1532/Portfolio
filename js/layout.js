/**
 * Injects footer for the single-page portfolio (navbar is in index.html).
 */
const Layout = {
  init() {
    document.body.classList.add('single-page');
    document.title = SITE.siteTitle;

    const footerRoot = document.getElementById('app-footer');
    if (footerRoot) {
      footerRoot.innerHTML = Components.footer();
    }
  },
};

Layout.init();
