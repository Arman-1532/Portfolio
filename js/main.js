/**
 * Navbar, smooth scroll, scroll-spy, animations.
 */
(function () {
  const NAV_OFFSET = 80;
  let scrollSpyLocked = false;   // true while a programmatic scroll is in flight
  let scrollSpyLockTimer = null; // debounce timer for scroll-end detection

  function getNavHeight() {
    const nav = document.getElementById('site-nav');
    if (!nav) return NAV_OFFSET;
    return nav.offsetHeight || NAV_OFFSET;
  }

  function scrollToSection(target) {
    if (!target) return;
    // For top nav we subtract its height; for left sidebar getNavHeight() will return 0.
    const offset = getNavHeight();
    const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function closeMobileNav() {
    const nav = document.getElementById('site-nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.site-nav__overlay');

    nav?.classList.remove('open');
    overlay?.classList.remove('active');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }
  }

  function toggleMobileNav() {
    const nav = document.getElementById('site-nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.site-nav__overlay');

    if (!nav || !overlay) return;

    const isOpen = nav.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    if (toggle) {
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }
  }

  function lockScrollSpy() {
    scrollSpyLocked = true;
    clearTimeout(scrollSpyLockTimer);

    // Primary: use native scrollend event (Chrome 111+, Firefox 109+)
    // Secondary: debounced scroll listener as a fallback (Safari / older browsers)
    function onScrollEnd() {
      scrollSpyLocked = false;
      window.removeEventListener('scrollend', onScrollEnd);
      clearTimeout(scrollSpyLockTimer);
    }

    function onScrollFallback() {
      clearTimeout(scrollSpyLockTimer);
      scrollSpyLockTimer = setTimeout(() => {
        scrollSpyLocked = false;
        window.removeEventListener('scroll', onScrollFallback);
      }, 150); // 150ms of no scroll activity = scroll has stopped
    }

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', onScrollEnd, { once: true });
      // Safety net in case scrollend never fires (e.g. instant jump with no animation)
      scrollSpyLockTimer = setTimeout(() => {
        scrollSpyLocked = false;
        window.removeEventListener('scrollend', onScrollEnd);
      }, 2000);
    } else {
      window.addEventListener('scroll', onScrollFallback, { passive: true });
      // Safety net for browsers that don't scroll at all (already at position)
      scrollSpyLockTimer = setTimeout(() => {
        scrollSpyLocked = false;
        window.removeEventListener('scroll', onScrollFallback);
      }, 2000);
    }
  }

  function bindNavScroll() {
    document.querySelectorAll('.site-nav__menu .nav-link, .site-nav__brand, a.nav-scroll[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();

        // Set active state immediately on click
        if (link.classList.contains('nav-link')) {
          setActiveNavLink(link);
        } else if (link.classList.contains('site-nav__brand')) {
          setActiveNavLink(null);
        }

        // Lock scroll-spy until scrolling fully stops (distance-independent)
        lockScrollSpy();

        scrollToSection(target);
        closeMobileNav();
      });
    });
  }

  function setActiveNavLink(activeLink) {
    document.querySelectorAll('.site-nav__menu .nav-link').forEach((a) => {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    });
    if (activeLink) {
      activeLink.classList.add('active');
      activeLink.setAttribute('aria-current', 'true');
    }
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('.page-section[id]');
    const navLinks = document.querySelectorAll('.site-nav__menu .nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't let the observer override active state during a programmatic scroll
        if (scrollSpyLocked) return;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          if (id === 'about') return;

          const activeLink = document.querySelector(`.site-nav__menu .nav-link[href="#${id}"]`);
          if (activeLink) setActiveNavLink(activeLink);
        });
      },
      {
        rootMargin: `-${getNavHeight()}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function handleInitialHash() {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    requestAnimationFrame(() => {
      scrollToSection(target);
    });
  }

  function bindMobileNav() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.site-nav__overlay');

    toggle?.addEventListener('click', toggleMobileNav);
    overlay?.addEventListener('click', closeMobileNav);
  }

  function initCardAnimations() {
    // Disable slow intersection-based reveal animations so content appears instantly.
    document.querySelectorAll('.card').forEach((card) => {
      card.style.opacity = '1';
      card.style.transform = 'none';
      card.style.transition = 'none';
    });
  }

  function initRippleEffect() {
    if (document.getElementById('ripple-styles')) return;

    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
    document.head.appendChild(style);

    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  function initNavScrollEffect() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindMobileNav();
    bindNavScroll();
    initScrollSpy();
    initCardAnimations();
    initRippleEffect();
    handleInitialHash();
    initNavScrollEffect();
  });
})();
