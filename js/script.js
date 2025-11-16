// Enhanced Portfolio JavaScript with Animations and Interactions

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize animations
  initAnimations();

  // Smooth scroll only for hash links pointing to elements on the same page
  const samePageLinks = Array.from(document.querySelectorAll('a[href^="#"]'))
    .filter(a => a.getAttribute('href') !== '#');
  samePageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update active state for nav links in the same page
        document.querySelectorAll('nav.primary a').forEach(a => a.classList.remove('active'));
        if (this.closest('nav.primary')) this.classList.add('active');
      }
    });
  });

  // Stats counter animation
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(2);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate stats numbers
        if (entry.target.classList.contains('stat-number')) {
          const target = parseFloat(entry.target.dataset.target);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }

        // Animate cards
        if (entry.target.classList.contains('card')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }

        // Animate skill bars
        if (entry.target.classList.contains('skill-item')) {
          const skillProgress = entry.target.querySelector('.skill-progress');
          if (skillProgress) {
            const percentage = skillProgress.dataset.width || '0%';
            setTimeout(() => {
              skillProgress.style.width = percentage;
            }, 200);
          }
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
  document.querySelectorAll('.card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
  document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));

  // Header scroll effect
  let lastScrollY = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class based on scroll position
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide/show header on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  });

  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
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

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // highlight nav based on scroll position (only useful when the page has sections)
  const sections = document.querySelectorAll('section[id]');
  function onScroll() {
    if (!sections || sections.length === 0) return;
    const scrollPos = window.scrollY + 120;
    let currentId = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    if (currentId) {
      // Only update in-page (hash) links — don't clear/set active on full-page links
      document.querySelectorAll('nav.primary a[href^="#"]').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
      });
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // For multi-page sites: mark active nav link by pathname
  function setActiveNavByPath() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav.primary a').forEach(a => {
      const href = a.getAttribute('href') || '';
      // Keep hash-only links out of pathname matching
      if (href.startsWith('#')) {
        a.classList.remove('active');
        return;
      }
      try {
        const linkPath = new URL(a.href).pathname.split('/').pop() || 'index.html';
        a.classList.toggle('active', linkPath === path);
      } catch (e) {
        // Fallback: compare raw href strings
        a.classList.toggle('active', href === path || (href === 'index.html' && path === ''));
      }
    });
  }
  setActiveNavByPath();
});

// Initialize animations function
function initAnimations() {
  // Add CSS for ripple animation
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .slide-in-left {
        animation: slideInLeft 0.6s ease-out forwards;
      }
      
      .slide-in-right {
        animation: slideInRight 0.6s ease-out forwards;
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
}
