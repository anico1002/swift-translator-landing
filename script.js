/* ─────────────────────────────────────────────────────────────
   SwifT Landing — script.js
   Scroll animations + navbar state. Nothing more.
   ───────────────────────────────────────────────────────────── */

/* ── Navbar: add .scrolled class when page scrolls ── */
const navbar = document.getElementById('navbar');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

/* ── Intersection Observer: trigger .animate elements ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

/* ── Stagger children within grids ── */
const staggerParents = ['.features-grid', '.lang-grid'];

staggerParents.forEach((selector) => {
  const parent = document.querySelector(selector);
  if (!parent) return;
  Array.from(parent.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 60}ms`;
  });
});
