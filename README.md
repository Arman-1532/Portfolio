# Portfolio

Single-page portfolio for Md Abdullah Arman — scroll through sections or use the top nav to jump to each one.

## Structure

```
├── index.html              # Single-page site (all sections)
├── css/
│   ├── style.css           # Main styles
│   ├── navbar.css          # Top navigation & section layout
│   └── components-info.css # Info card components
└── js/
    ├── config.js           # Site name, nav sections, social links
    ├── components.js       # Navbar & footer HTML
    ├── layout.js           # Injects navbar and footer
    ├── render-pages.js     # Renders all sections from data
    ├── main.js             # Smooth scroll, scroll-spy, animations
    └── data/
        └── content.js      # Portfolio copy, projects, skills, etc.
```

Legacy URLs (`projects.html`, etc.) redirect to `index.html#section`.

## Local preview

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Updating content

- **Nav labels & social links:** `js/config.js`
- **Section content:** `js/data/content.js`
- **Styles:** `css/style.css`, `css/navbar.css`
