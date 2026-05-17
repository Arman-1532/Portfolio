/**
 * Renders all portfolio sections into #page-content (single-page layout).
 */
const PageRenderer = {
  init() {
    const root = document.getElementById('page-content');
    if (!root || root.dataset.render !== 'all') return;
    root.innerHTML = this.renderAll();
  },

  renderAll() {
    return [
      this.renderAboutSection(),
      this.renderEducationSection(),
      this.renderSkillsSection(),
      this.renderProjectsSection(),
      this.renderActivitiesSection(),
      this.renderContactSection(),
    ].join('');
  },

  renderAboutSection() {
    const { headline, subtitle, description } = CONTENT.about;
    return `
      <section id="about" class="page-section hero">
        <div class="container">
          <div class="hero-content">
            <h1>${headline}</h1>
            <p class="subtitle">${subtitle}</p>
            <p class="description">${description}</p>
            <div class="cta-buttons">
              <a href="#projects" class="btn btn-primary nav-scroll">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
                </svg>
                View My Work
              </a>
              <a href="#contact" class="btn btn-primary nav-scroll">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>`;
  },

  renderEducationSection() {
    const cards = CONTENT.education
      .map(
        (entry) => `
        <article class="card info-card">
          <h3 class="info-card__title">${entry.degree}</h3>
          <p class="info-card__institution">${entry.institution}</p>
          <p class="info-card__detail">${entry.detail}</p>
          <p class="info-card__period">${entry.period}</p>
        </article>`
      )
      .join('');

    return `
      <section id="education" class="page-section">
        <div class="container section">
          <h2>Education</h2>
          ${cards}
        </div>
      </section>`;
  },

  renderProjectCard(project) {
    const features = project.features.map((f) => `<li>${f}</li>`).join('');
    const tech = project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('');

    return `
      <article class="project card">
        <div class="project-header">
          <h3>${project.title}</h3>
          <div class="project-links">
            <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="project-link">
              ${Components.iconGitHubSmall()}
              View Repository
            </a>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-features">
          <h4>Key Features:</h4>
          <ul>${features}</ul>
        </div>
        <div class="project-tech">
          <h4>Technologies Used:</h4>
          <div class="tech-stack">${tech}</div>
        </div>
      </article>`;
  },

  renderProjectsSection() {
    const cards = CONTENT.projects.map((p) => this.renderProjectCard(p)).join('');
    return `
      <section id="projects" class="page-section">
        <div class="container section">
          <h2>Projects</h2>
          ${cards}
        </div>
      </section>`;
  },

  renderSkillsSection() {
    const categories = CONTENT.skills
      .map((category) => {
        const items = category.items
          .map(
            (skill) =>
              `<li><img src="${skill.icon}" alt="${skill.name}" class="skill-icon" width="24" height="24" loading="lazy"><span>${skill.name}</span></li>`
          )
          .join('');

        return `
          <div class="skills-category">
            <h3 class="skills-category-title">${category.title}</h3>
            <ul class="skills-list">${items}</ul>
          </div>`;
      })
      .join('');

    return `
      <section id="skills" class="page-section">
        <div class="container section">
          <h2>Skills</h2>
          <div class="skills-container">${categories}</div>
        </div>
      </section>`;
  },

  renderActivitiesSection() {
    const cards = CONTENT.activities
      .map((group) => {
        const items = group.items.map((item) => `<li>${item}</li>`).join('');
        return `
          <article class="card info-card">
            <h3 class="info-card__title">${group.title}</h3>
            <ul class="info-card__list">${items}</ul>
          </article>`;
      })
      .join('');

    return `
      <section id="activities" class="page-section">
        <div class="container section">
          <h2>Activities &amp; Achievements</h2>
          ${cards}
        </div>
      </section>`;
  },

  renderContactSection() {
    return `
      <section id="contact" class="page-section">
        <div class="container section">
          <h2>Contact</h2>
          <div class="contact-simple">
            <div class="card text-center contact-card">
              <h3 class="accent-text info-card__title">Get In Touch</h3>
              <p class="muted contact-intro">Feel free to reach out for collaboration, questions, or just to say hello!</p>
              <div class="contact-email">
                <p class="email-text">
                  ${Components.iconEmail(16)}
                  ${SITE.email}
                </p>
                <a href="mailto:${SITE.email}" class="btn contact-btn">Send Email</a>
              </div>
              <div class="contact-social">
                <p class="muted contact-social-label">Or connect with me on:</p>
                <div class="social-links-wrapper">
                  <a href="${SITE.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
                    ${Components.iconLinkedIn()}
                    LinkedIn
                  </a>
                  <a href="${SITE.social.github}" target="_blank" rel="noopener noreferrer" class="social-link">
                    ${Components.iconGitHub()}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  },
};

PageRenderer.init();
