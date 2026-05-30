// ================================================================
//  LitPlay — App Core
//  Routing, PWA install prompt, score management, modal
// ================================================================
'use strict';

// ── Global State ─────────────────────────────────────────────
const State = {
  screen: 'home',
  scores: JSON.parse(localStorage.getItem('litplay_scores') || 'null') || {
    wordle:     { played: 0, won: 0, streak: 0, maxStreak: 0 },
    anagram:    { played: 0, totalScore: 0 },
    fillblank:  { played: 0, totalScore: 0 },
    definition: { played: 0, totalScore: 0 }
  }
};

// ── Persist scores ────────────────────────────────────────────
function saveScores() {
  localStorage.setItem('litplay_scores', JSON.stringify(State.scores));
}

// ── Screen routing ─────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + name);
  if (el) el.classList.add('active');
  State.screen = name;
  window.scrollTo(0, 0);
}

// ── Home badges ────────────────────────────────────────────────
function updateHomeBadges() {
  const s = State.scores;
  function setBadge(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    if (text) { el.textContent = text; el.classList.remove('hidden'); }
    else       { el.textContent = ''; el.classList.add('hidden'); }
  }
  setBadge('badge-wordle',     s.wordle.streak > 0 ? '🔥 ' + s.wordle.streak : '');
  setBadge('badge-anagram',    s.anagram.totalScore    > 0 ? '⭐ ' + s.anagram.totalScore    : '');
  setBadge('badge-fillblank',  s.fillblank.totalScore  > 0 ? '⭐ ' + s.fillblank.totalScore  : '');
  setBadge('badge-definition', s.definition.totalScore > 0 ? '⭐ ' + s.definition.totalScore : '');

  const total = s.anagram.totalScore + s.fillblank.totalScore + s.definition.totalScore;
  const el = document.getElementById('total-score');
  if (el) el.textContent = total;
}

// ── Modal ──────────────────────────────────────────────────────
function showModal({ icon, title, message, stats, onPlayAgain, onHome }) {
  document.getElementById('modal-icon').textContent    = icon    || '🎉';
  document.getElementById('modal-title').textContent   = title   || 'Complete!';
  document.getElementById('modal-message').textContent = message || '';
  document.getElementById('modal-stats').innerHTML     = stats   || '';

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('hidden');

  document.getElementById('modal-play-again').onclick = () => {
    overlay.classList.add('hidden');
    if (onPlayAgain) onPlayAgain();
  };
  document.getElementById('modal-home').onclick = () => {
    overlay.classList.add('hidden');
    showScreen('home');
    updateHomeBadges();
    if (onHome) onHome();
  };
}

// ── Toast messages ─────────────────────────────────────────────
function showToast(msg, duration) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), duration || 1600);
}

// ── PWA install — works on all platforms ──────────────────────
let deferredInstall = null;

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
}
function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         navigator.standalone === true;
}

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstall = e;
});

window.addEventListener('appinstalled', () => {
  deferredInstall = null;
  const btn = document.getElementById('install-btn');
  if (btn) btn.classList.add('hidden');
});

function showInstallGuide(platform) {
  const overlay = document.getElementById('install-overlay');
  if (!overlay) return;
  const box = document.getElementById('install-steps');

  if (platform === 'ios') {
    box.innerHTML = `
      <p class="install-intro">Install LitPlay on your iPhone or iPad:</p>
      <div class="install-step"><span>1</span><span>Tap the <b>Share</b> button ⬆ at the bottom of Safari</span></div>
      <div class="install-step"><span>2</span><span>Scroll down and tap <b>"Add to Home Screen"</b></span></div>
      <div class="install-step"><span>3</span><span>Tap <b>"Add"</b> in the top-right corner</span></div>`;
  } else {
    box.innerHTML = `
      <p class="install-intro">Install LitPlay on your device:</p>
      <div class="install-step"><span>1</span><span>Look for the <b>install icon ⊕</b> in your browser's address bar</span></div>
      <div class="install-step"><span>2</span><span>Or open the <b>browser menu ⋮</b> and choose <b>"Install App"</b></span></div>
      <div class="install-step"><span>3</span><span>Click <b>"Install"</b> to confirm</span></div>`;
  }
  overlay.classList.remove('hidden');
}

// ── Service Worker registration ────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ── DOM ready ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateHomeBadges();

  // Game card buttons
  document.querySelectorAll('[data-game]').forEach(card => {
    card.addEventListener('click', () => {
      const game = card.dataset.game;
      showScreen(game);
      startGame(game);
    });
  });

  // Back buttons
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('home');
      updateHomeBadges();
    });
  });

  // Install button — universal: iOS instructions / native prompt / fallback guide
  const installBtn = document.getElementById('install-btn');
  if (installBtn) {
    if (isStandalone()) {
      installBtn.classList.add('hidden');
    } else {
      installBtn.classList.remove('hidden');
    }
    installBtn.addEventListener('click', async () => {
      if (deferredInstall) {
        installBtn.classList.add('hidden');
        deferredInstall.prompt();
        const { outcome } = await deferredInstall.userChoice;
        deferredInstall = null;
        if (outcome !== 'accepted') installBtn.classList.remove('hidden');
      } else if (isIOS()) {
        showInstallGuide('ios');
      } else {
        showInstallGuide('other');
      }
    });
  }
  const installClose = document.getElementById('install-close');
  if (installClose) {
    installClose.addEventListener('click', () => {
      document.getElementById('install-overlay').classList.add('hidden');
    });
  }
});
