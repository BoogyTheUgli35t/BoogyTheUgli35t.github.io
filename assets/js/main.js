const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!expanded).toString());
    navLinks.style.display = expanded ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
    navLinks.style.padding = '1.5rem';
    navLinks.style.borderRadius = '1rem';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '1.5rem';
    navLinks.style.boxShadow = '0 20px 40px rgba(15,23,42,0.35)';
  });
}

document.querySelectorAll('[data-tab-group]').forEach((group) => {
  const buttons = group.querySelectorAll('[data-tab]');
  const panels = group.querySelectorAll('[data-tab-panel]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      panels.forEach((panel) => {
        panel.style.display = panel.getAttribute('data-tab-panel') === target ? 'block' : 'none';
      });
    });
  });
});

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if ((currentPath === 'index.html' && href === 'index.html') || href === currentPath) {
    link.classList.add('active');
  }
  if (currentPath === '' && href === 'index.html') {
    link.classList.add('active');
  }
});
