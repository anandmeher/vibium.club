// Vibium.club — shared interactions

// Mobile nav toggle
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('[data-nav-toggle]');
  if (toggle) {
    document.querySelector('.nav-links')?.classList.toggle('open');
  }
});

// Tabbed code panels
document.querySelectorAll('[data-tabs]').forEach((group) => {
  const tabs = group.querySelectorAll('.tab');
  const panels = group.querySelectorAll('.tab-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      const target = group.querySelector(`#${tab.dataset.target}`);
      target?.classList.add('active');
    });
  });
});

// Copy-to-clipboard for code blocks
document.querySelectorAll('.code').forEach((block) => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.addEventListener('click', async () => {
    const text = block.querySelector('pre')?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 1500);
    } catch {
      btn.textContent = 'Failed';
      setTimeout(() => (btn.textContent = 'Copy'), 1500);
    }
  });
  block.appendChild(btn);
});

// Mark active nav link based on current path
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === path || (path === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
