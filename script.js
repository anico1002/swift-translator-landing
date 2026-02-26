/* ─────────────────────────────────────────────────────────────
   SwifT Landing — script.js
   i18n + scroll animations + navbar state.
   ───────────────────────────────────────────────────────────── */

/* ── Translations ── */
const TRANSLATIONS = {
  en: {
    title:            'SwifT — Translate anything. One shortcut.',
    meta_description: 'SwifT lives in your menu bar and translates any selected text with ⌥⌘T. No copy-paste. No browser tabs. No interruptions.',

    nav_features:  'Features',
    nav_how:       'How it works',
    nav_engines:   'Engines',
    nav_languages: 'Languages',
    nav_download:  'Download — Free',

    hero_h1:    'Translate anything.<br>One shortcut.',
    hero_sub:   'SwifT lives in your menu bar and translates any selected text with <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span>. No copy-paste. No browser tabs. No interruptions.',
    hero_btn:   'Download for Mac — Free',
    hero_badge: 'macOS 13 Ventura or later · No account required · Free forever',

    trust_1: '✦ Powered by Apple Translation',
    trust_2: '✦ No account required',
    trust_3: '✦ No API key needed',
    trust_5: '✦ Free forever',

    features_label: 'Features',
    features_title: 'Everything you need.<br>Nothing you don\'t.',
    f1_h3: 'Select &amp; translate',
    f1_p:  'Select text in any app — Xcode, Safari, Slack, PDFs — press <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span> and you\'re done. Works everywhere, system-wide. Not your thing? Remap it to any combo in Settings.',
    f2_h3: 'Auto-flip',
    f2_p:  'Writing in Spanish but need it in English? SwifT detects the language direction automatically and flips when needed. Bidirectional, always.',
    f3_h3: 'Powered by Apple',
    f3_p:  'Uses Apple\'s on-device Translation framework on macOS 26+. Falls back to Google Translate gracefully — no API key, no setup, no account.',
    f4_h3: 'Stays out of your way',
    f4_p:  'Lives quietly in the menu bar. No Dock icon, no onboarding screens, no subscriptions. Set it up once, forget about it. Launches at login.',

    how_label: 'How it works',
    how_title: 'Three steps.<br>That\'s it.',
    step1_h3: 'Select any text',
    step1_p:  'In any app — Safari, Xcode, Slack, Notes, Terminal — select the text you want to translate.',
    step2_h3: 'Press <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span>',
    step2_p:  'Your global shortcut. Works even when SwifT is not the focused app. Fully customizable.',
    step3_h3: 'Done',
    step3_p:  'Translation appears as a macOS notification. Optionally replaces the selected text in-place.',

    engines_label: 'Translation engines',
    engines_title: 'Three engines.<br>Zero setup.',
    engines_sub:   'SwifT picks the best available engine and falls back automatically. You can always choose manually in Settings.',
    e1_h3:   'Apple Translation',
    e1_label: 'On-device · Private · macOS 26+',
    e1_p:    'Runs entirely on your Mac using Apple\'s Translation framework. No data leaves your device.',
    e1_badge: 'Preferred',
    e2_h3:   'Google Translate',
    e2_label: 'Fast · Reliable · No key needed',
    e2_p:    'The world\'s most used translation service. No API key, no account, works out of the box.',
    e2_badge: 'Fallback #1',
    e3_h3:   'MyMemory',
    e3_label: 'Open · Always available',
    e3_p:    'Open translation API with 5,000 characters/day on the free tier. Ultimate fallback.',
    e3_badge: 'Fallback #2',

    lang_label: 'Languages',
    lang_title: '14 languages.<br>More coming.',
    lang_en: 'English',
    lang_es: 'Spanish',
    lang_ca: 'Catalan',
    lang_gl: 'Galician',
    lang_eu: 'Basque',
    lang_fr: 'French',
    lang_de: 'German',
    lang_it: 'Italian',
    lang_pt: 'Portuguese',
    lang_ru: 'Russian',
    lang_zh: 'Chinese',
    lang_ja: 'Japanese',
    lang_ko: 'Korean',
    lang_ar: 'Arabic',

    dl_h2:   'Start translating<br>in 30 seconds.',
    dl_btn:  'Download SwifT — Free',
    dl_badge: 'macOS 13 Ventura or later · ~4 MB · No account required',

    footer_tagline: 'Made with ♥ by anico',
    footer_copy:    '© 2026 All rights reserved · SwifT v1.0',
  },

  es: {
    title:            'SwifT — Traduce cualquier texto. Un atajo.',
    meta_description: 'SwifT vive en tu barra de menú y traduce cualquier texto seleccionado con ⌥⌘T. Sin copiar y pegar. Sin pestañas. Sin interrupciones.',

    nav_features:  'Funciones',
    nav_how:       'Cómo funciona',
    nav_engines:   'Motores',
    nav_languages: 'Idiomas',
    nav_download:  'Descargar — Gratis',

    hero_h1:    'Traduce cualquier texto.<br>Un atajo.',
    hero_sub:   'SwifT vive en tu barra de menú y traduce cualquier texto seleccionado con <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span>. Sin copiar y pegar. Sin pestañas. Sin interrupciones.',
    hero_btn:   'Descargar para Mac — Gratis',
    hero_badge: 'macOS 13 Ventura o superior · Sin cuenta · Gratis para siempre',

    trust_1: '✦ Impulsado por Apple Translation',
    trust_2: '✦ Sin cuenta necesaria',
    trust_3: '✦ Sin API key',
    trust_5: '✦ Gratis para siempre',

    features_label: 'Funciones',
    features_title: 'Todo lo que necesitas.<br>Nada más.',
    f1_h3: 'Selecciona y traduce',
    f1_p:  'Selecciona texto en cualquier app — Xcode, Safari, Slack, PDFs — pulsa <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span> y listo. Funciona en todo el sistema. ¿No te convence? Cámbialo en Ajustes.',
    f2_h3: 'Auto-flip',
    f2_p:  '¿Escribiendo en español y lo necesitas en inglés? SwifT detecta el idioma automáticamente y cambia la dirección cuando es necesario. Siempre bidireccional.',
    f3_h3: 'Impulsado por Apple',
    f3_p:  'Usa el framework de Translation de Apple en macOS 26+. Cambia a Google Translate si es necesario — sin API key, sin configuración, sin cuenta.',
    f4_h3: 'No te molesta',
    f4_p:  'Vive discretamente en la barra de menú. Sin icono en el Dock, sin pantallas de bienvenida, sin suscripciones. Configúralo una vez y olvídate. Se inicia al arrancar.',

    how_label: 'Cómo funciona',
    how_title: 'Tres pasos.<br>Nada más.',
    step1_h3: 'Selecciona cualquier texto',
    step1_p:  'En cualquier app — Safari, Xcode, Slack, Notes, Terminal — selecciona el texto que quieres traducir.',
    step2_h3: 'Pulsa <span class="kbd-group"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></span>',
    step2_p:  'Tu atajo global. Funciona aunque SwifT no sea la app activa. Totalmente personalizable.',
    step3_h3: 'Listo',
    step3_p:  'La traducción aparece como notificación de macOS. Opcionalmente reemplaza el texto seleccionado en su lugar.',

    engines_label: 'Motores de traducción',
    engines_title: 'Tres motores.<br>Cero configuración.',
    engines_sub:   'SwifT elige el mejor motor disponible y hace el fallback automáticamente. Siempre puedes elegir manualmente en Ajustes.',
    e1_h3:   'Apple Translation',
    e1_label: 'En dispositivo · Privado · macOS 26+',
    e1_p:    'Se ejecuta completamente en tu Mac usando el framework de Translation de Apple. Ningún dato sale de tu dispositivo.',
    e1_badge: 'Preferido',
    e2_h3:   'Google Translate',
    e2_label: 'Rápido · Fiable · Sin API key',
    e2_p:    'El servicio de traducción más usado del mundo. Sin API key, sin cuenta, funciona desde el primer momento.',
    e2_badge: 'Alternativa #1',
    e3_h3:   'MyMemory',
    e3_label: 'Abierto · Siempre disponible',
    e3_p:    'API de traducción abierta con 5.000 caracteres/día en el nivel gratuito. Última alternativa.',
    e3_badge: 'Alternativa #2',

    lang_label: 'Idiomas',
    lang_title: '14 idiomas.<br>Más próximamente.',
    lang_en: 'Inglés',
    lang_es: 'Español',
    lang_ca: 'Catalán',
    lang_gl: 'Gallego',
    lang_eu: 'Vasco',
    lang_fr: 'Francés',
    lang_de: 'Alemán',
    lang_it: 'Italiano',
    lang_pt: 'Portugués',
    lang_ru: 'Ruso',
    lang_zh: 'Chino',
    lang_ja: 'Japonés',
    lang_ko: 'Coreano',
    lang_ar: 'Árabe',

    dl_h2:   'Empieza a traducir<br>en 30 segundos.',
    dl_btn:  'Descargar SwifT — Gratis',
    dl_badge: 'macOS 13 Ventura o superior · ~4 MB · Sin cuenta necesaria',

    footer_tagline: 'Hecho con ♥ por anico',
    footer_copy:    '© 2026 Todos los derechos reservados · SwifT v1.0',
  },
};

/* ── Language detection & application ── */
function detectLang() {
  const preferred = (navigator.language || 'en').toLowerCase().slice(0, 2);
  return TRANSLATIONS[preferred] ? preferred : 'en';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];

  // Document-level
  document.title = t.title;
  document.documentElement.lang = lang;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

  // All tagged elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
}

applyTranslations(detectLang());

/* ── Navbar: add .scrolled class when page scrolls ── */
const navbar = document.getElementById('navbar');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Intersection Observer: trigger .animate elements ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

/* ── Hero translation demo ── */
const SDEMO = [
  { lang: 'ES', text: 'Hola Mundo',        dir: 'ltr' },
  { lang: 'EN', text: 'Hello World',        dir: 'ltr' },
  { lang: 'FR', text: 'Bonjour le Monde',   dir: 'ltr' },
  { lang: 'DE', text: 'Hallo Welt',         dir: 'ltr' },
  { lang: 'IT', text: 'Ciao Mondo',         dir: 'ltr' },
  { lang: 'ZH', text: '你好，世界',          dir: 'ltr' },
  { lang: 'AR', text: 'مرحبا بالعالم',      dir: 'rtl' },
];

(function () {
  const para        = document.getElementById('sdemo-text');   // <span> — content + selection
  const paraWrapper = para ? para.closest('.sdemo-para') : null; // <p>  — fade in/out
  const langEl = document.getElementById('sdemo-lang');
  const kbd    = document.querySelector('.sdemo-kbd');
  const wrap   = document.querySelector('.swift-demo');
  if (!para || !paraWrapper || !langEl || !kbd || !wrap) return;

  let idx = 0;
  let started = false;

  function tick() {
    // 1. Reset selection + kbd
    para.classList.remove('sdemo-selecting');
    kbd.classList.remove('sdemo-kbd-show');

    // 2. Fade out the <p> wrapper
    paraWrapper.classList.add('sdemo-out');

    setTimeout(() => {
      // 3. Swap content on the <span>
      idx = (idx + 1) % SDEMO.length;
      const item = SDEMO[idx];
      para.textContent = item.text;
      paraWrapper.dir = item.dir;
      langEl.textContent = item.lang;

      // 4. Fade the <p> back in
      paraWrapper.classList.remove('sdemo-out');
      paraWrapper.classList.add('sdemo-in');
      setTimeout(() => paraWrapper.classList.remove('sdemo-in'), 220);

      // 5. Selection sweeps right → left on the <span>
      setTimeout(() => para.classList.add('sdemo-selecting'), 180);

      // 6. Keyboard shortcut appears
      setTimeout(() => kbd.classList.add('sdemo-kbd-show'), 460);

      // 7. Fade both out before next tick
      setTimeout(() => {
        kbd.classList.remove('sdemo-kbd-show');
        para.classList.remove('sdemo-selecting');
      }, 1020);

    }, 190);
  }

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      // Trigger selection on first text immediately
      setTimeout(() => para.classList.add('sdemo-selecting'), 300);
      setTimeout(() => kbd.classList.add('sdemo-kbd-show'), 580);
      setTimeout(() => {
        kbd.classList.remove('sdemo-kbd-show');
        para.classList.remove('sdemo-selecting');
      }, 1000);
      setInterval(tick, 1800);
    }
  }, { threshold: 0.4 });
  obs.observe(wrap);
}());

/* ── Stagger children within grids ── */
const staggerParents = ['.features-grid', '.lang-grid'];

staggerParents.forEach((selector) => {
  const parent = document.querySelector(selector);
  if (!parent) return;
  Array.from(parent.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 60}ms`;
  });
});
