// Theme toggle
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function setTheme(next) {
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.setAttribute('aria-pressed', String(next === 'light'));
  }

  btn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();

// Mobile nav
(function(){
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

// Tabs logic
(function(){
  const tabs = [
    { btn: 'tabBtnPower', panel: 'tab-power' },
    { btn: 'tabBtnEconomy', panel: 'tab-economy' },
    { btn: 'tabBtnDimensions', panel: 'tab-dimensions' }
  ];
  tabs.forEach(({btn, panel}) => {
    const b = document.getElementById(btn);
    const p = document.getElementById(panel);
    b?.addEventListener('click', () => {
      tabs.forEach(({btn: bb, panel: pp}) => {
        const b2 = document.getElementById(bb);
        const p2 = document.getElementById(pp);
        b2?.setAttribute('aria-selected', String(bb === btn));
        p2?.classList.toggle('visible', pp === panel);
      });
    });
  });
})();

// Smooth scroll for internal links
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
