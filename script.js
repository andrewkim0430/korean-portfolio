// 🌙 Dark mode toggle + scroll reveal + parallax + smooth scroll + contact form handler
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');

  // --- Theme toggle ---
  if (saved === 'light') root.classList.add('light');
  const updateIcon = () => {
    if (toggle)
      toggle.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  };
  updateIcon();
  toggle &&
    toggle.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem(
        'theme',
        root.classList.contains('light') ? 'light' : 'dark'
      );
      updateIcon();
    });

  // --- Auto year in footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- 3D tilt effect on hero card ---
  const tilt = document.querySelector('.tilt');
  if (tilt) {
    tilt.addEventListener('mousemove', (e) => {
      const r = tilt.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      tilt.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
    });
    tilt.addEventListener(
      'mouseleave',
      () => (tilt.style.transform = 'rotateY(0) rotateX(0)')
    );
  }

  // --- Parallax effect on background blobs ---
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', (e) => {
    blobs.forEach((b, i) => {
      const offsetX = (e.clientX / window.innerWidth - 0.5) * (10 + i * 5);
      const offsetY = (e.clientY / window.innerHeight - 0.5) * (10 + i * 5);
      b.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // --- Smooth scrolling for internal links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Animated fade-in on load ---
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
})();

// --- Lightbox ---
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="닫기">✕</button>
    <button class="lightbox-btn prev" aria-label="이전">&#8592;</button>
    <img src="" alt="스크린샷">
    <button class="lightbox-btn next" aria-label="다음">&#8594;</button>
    <span class="lightbox-counter"></span>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('img');
  const counter = overlay.querySelector('.lightbox-counter');
  let images = [];
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;
    img.src = images[current].src;
    img.alt = images[current].alt;
    counter.textContent = (current + 1) + ' / ' + images.length;
  }

  function open(index) {
    images = Array.from(document.querySelectorAll('.screenshot-gallery img'));
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(index);
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    const thumb = e.target.closest('.screenshot-gallery img');
    if (thumb) {
      const all = Array.from(document.querySelectorAll('.screenshot-gallery img'));
      open(all.indexOf(thumb));
    }
  });

  overlay.querySelector('.prev').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current - 1);
  });

  overlay.querySelector('.next').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current + 1);
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'Escape') close();
  });
})();

// --- Contact form handler ---
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending…';
  status.style.color = 'var(--muted)';

  // Fake async submit simulation
  setTimeout(() => {
    status.textContent = '✅ Thanks, your message has been sent!';
    status.style.color = 'var(--primary)';
    form.reset();
  }, 800);

  return false;
}

