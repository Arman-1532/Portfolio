/**
 * Reusable HTML fragments for shared layout (navbar, footer).
 */
const Components = {
  iconMenu() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  },

  iconLinkedIn() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.6 4.09 5.5 2.99 5.5C1.89 5.5 1 4.6 1 3.5C1 2.4 1.89 1.5 2.99 1.5C4.09 1.5 4.98 2.4 4.98 3.5ZM1.5 8.5H4.5V22H1.5V8.5ZM8.5 8.5H11.2V10.2H11.3C11.8 9.2 13.1 8 15.3 8C19.2 8 20 10.6 20 14.2V22H17V15.2C17 13.6 16.9 11.6 14.4 11.6C11.9 11.6 11.6 13.8 11.6 15.1V22H8.5V8.5Z" fill="currentColor"/>
    </svg>`;
  },

  iconGitHub() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.7 3.1 8.7 7.4 10.1.5.1.7-.2.7-.5v-1.9c-3 0-3.6-1.4-3.8-2.7-.1-.3-.6-1.2-1-1.5-.3-.2-.8-.7 0-.7.7 0 1.2.6 1.4.8.8 1.3 2 1 2.6.8.1-.6.3-1 .6-1.3-2.7-.3-5.6-1.3-5.6-6 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3 .8.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.2-1.2 3-.8 3-.8.6 1.7.2 3 .1 3.3.7.9 1.1 1.9 1.1 3.2 0 4.7-2.9 5.7-5.6 6 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5 4.3-1.4 7.4-5.4 7.4-10.1C23.2 5.4 18.3.5 12 .5z" fill="currentColor"/>
    </svg>`;
  },

  iconEmail(size = 20) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="email-icon" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
    </svg>`;
  },

  iconGitHubSmall() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.7 3.1 8.7 7.4 10.1.5.1.7-.2.7-.5v-1.9c-3 0-3.6-1.4-3.8-2.7-.1-.3-.6-1.2-1-1.5-.3-.2-.8-.7 0-.7.7 0 1.2.6 1.4.8.8 1.3 2 1 2.6.8.1-.6.3-1 .6-1.3-2.7-.3-5.6-1.3-5.6-6 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3 .8.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.2-1.2 3-.8 3-.8.6 1.7.2 3 .1 3.3.7.9 1.1 1.9 1.1 3.2 0 4.7-2.9 5.7-5.6 6 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5 4.3-1.4 7.4-5.4 7.4-10.1C23.2 5.4 18.3.5 12 .5z" fill="currentColor"/>
    </svg>`;
  },

  navLinks(activeId = 'about') {
    return SITE.nav
      .map((item) => {
        const isActive = item.id === activeId;
        return `<a href="#${item.id}" class="nav-link${isActive ? ' active' : ''}"${isActive ? ' aria-current="true"' : ''}>${item.label}</a>`;
      })
      .join('');
  },

  navbar(activeId = 'about') {
    return `
      <header class="site-nav" id="site-nav">
        <div class="site-nav__inner container">
          <a href="#about" class="site-nav__brand">${SITE.name}</a>
          <button type="button" class="mobile-menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-nav-menu">
            ${this.iconMenu()}
          </button>
          <nav class="site-nav__menu" id="site-nav-menu" aria-label="Main navigation">
            ${this.navLinks(activeId)}
          </nav>
          <div class="site-nav__social">
            <a href="${SITE.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${this.iconLinkedIn()}</a>
            <a href="${SITE.social.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${this.iconGitHub()}</a>
            <a href="mailto:${SITE.email}" aria-label="Email">${this.iconEmail()}</a>
          </div>
        </div>
        <div class="site-nav__overlay" aria-hidden="true"></div>
      </header>`;
  },

  footer() {
    return `
      <footer>
        <div class="container">
          <p>"${SITE.name}" — © ${SITE.copyrightYear}.</p>
        </div>
      </footer>`;
  },
};
