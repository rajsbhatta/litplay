// ================================================================
//  LitPlay — Game Implementations
//  WordCraft · Unscramble · Fill the Blank · Word Wise
// ================================================================
'use strict';

// ── Shared helpers ─────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getDayIndex(arr) {
  const s = new Date(2024, 0, 1);
  const t = new Date();
  const d = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.abs(Math.floor((d - s) / 86400000)) % arr.length;
}

// Main dispatcher (called from app.js)
function startGame(name) {
  if (name === 'wordle')     WordleGame.start();
  if (name === 'anagram')    AnagramGame.start();
  if (name === 'fillblank')  FillBlankGame.start();
  if (name === 'definition') DefinitionGame.start();
}

// ================================================================
//  GAME 1 — WORDCRAFT (Wordle-style)
// ================================================================
const WordleGame = {
  answer: '',
  guesses: [],
  current: '',
  maxGuesses: 6,
  W: 5,
  over: false,

  start() {
    this.answer = WORDLE_WORDS[getDayIndex(WORDLE_WORDS)];
    this.guesses = [];
    this.current = '';
    this.over    = false;

    // Restore today's progress if it exists
    const today = new Date().toDateString();
    if (localStorage.getItem('litplay_wday') === today) {
      const saved = JSON.parse(localStorage.getItem('litplay_wstate') || 'null');
      if (saved) { this.guesses = saved.guesses; this.over = saved.over; }
    } else {
      localStorage.setItem('litplay_wday', today);
      localStorage.removeItem('litplay_wstate');
    }

    const idx = getDayIndex(WORDLE_WORDS);
    document.getElementById('wordle-day').textContent = 'Day ' + (idx + 1);
    this.renderBoard();
    this.renderKeyboard();
    if (this.over) this.showEndMessage();
    this.bindKeys();
  },

  renderBoard() {
    const board = document.getElementById('wordle-board');
    board.innerHTML = '';
    for (let r = 0; r < this.maxGuesses; r++) {
      const row = document.createElement('div');
      row.className = 'w-row';
      row.id = 'wrow-' + r;
      for (let c = 0; c < this.W; c++) {
        const t = document.createElement('div');
        t.className = 'w-tile';
        t.id = 'wt-' + r + '-' + c;
        if (r < this.guesses.length) {
          t.textContent = this.guesses[r].word[c];
          t.dataset.s   = this.guesses[r].result[c];
        }
        row.appendChild(t);
      }
      board.appendChild(row);
    }
  },

  renderKeyboard() {
    const rows = [
      ['Q','W','E','R','T','Y','U','I','O','P'],
      ['A','S','D','F','G','H','J','K','L'],
      ['ENTER','Z','X','C','V','B','N','M','⌫']
    ];
    const ks = {};
    this.guesses.forEach(({ word, result }) => {
      word.split('').forEach((l, i) => {
        const prev = ks[l], cur = result[i];
        if (!prev || (prev === 'absent' && cur !== 'absent') || (prev === 'present' && cur === 'correct')) {
          ks[l] = cur;
        }
      });
    });
    const kb = document.getElementById('wordle-keyboard');
    kb.innerHTML = '';
    rows.forEach(row => {
      const div = document.createElement('div');
      div.className = 'k-row';
      row.forEach(k => {
        const btn = document.createElement('button');
        btn.className = 'k-key' + (['ENTER','⌫'].includes(k) ? ' k-wide' : '');
        btn.textContent = k;
        btn.dataset.k = k;
        if (ks[k]) btn.dataset.s = ks[k];
        btn.addEventListener('click', () => this.handleKey(k));
        div.appendChild(btn);
      });
      kb.appendChild(div);
    });
  },

  bindKeys() {
    if (this._kh) document.removeEventListener('keydown', this._kh);
    this._kh = e => {
      if (State.screen !== 'wordle') return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      if (e.key === 'Enter')     this.handleKey('ENTER');
      else if (e.key === 'Backspace') this.handleKey('⌫');
      else if (/^[a-zA-Z]$/.test(e.key)) this.handleKey(e.key.toUpperCase());
    };
    document.addEventListener('keydown', this._kh);
  },

  handleKey(k) {
    if (this.over) return;
    const row = this.guesses.length;
    if (row >= this.maxGuesses) return;
    if (k === '⌫') {
      this.current = this.current.slice(0, -1);
    } else if (k === 'ENTER') {
      if (this.current.length < this.W) { showToast('Not enough letters'); this.shake(row); return; }
      if (!WORDLE_WORDS.includes(this.current)) { showToast('Not in word list'); this.shake(row); return; }
      this.submit();
      return;
    } else {
      if (this.current.length < this.W) this.current += k;
    }
    this.updateRow();
  },

  updateRow() {
    const r = this.guesses.length;
    for (let c = 0; c < this.W; c++) {
      const t = document.getElementById('wt-' + r + '-' + c);
      if (!t) return;
      t.textContent = this.current[c] || '';
      t.dataset.s = this.current[c] ? 'tbd' : '';
      if (this.current[c]) t.classList.add('pop'); else t.classList.remove('pop');
    }
  },

  submit() {
    const r    = this.guesses.length;
    const word = this.current;
    const res  = this.evaluate(word);
    this.guesses.push({ word, result: res });
    this.current = '';

    // Reveal animation
    for (let c = 0; c < this.W; c++) {
      const t = document.getElementById('wt-' + r + '-' + c);
      if (!t) continue;
      t.classList.remove('pop');
      setTimeout(() => {
        t.classList.add('flip');
        setTimeout(() => { t.dataset.s = res[c]; t.classList.remove('flip'); }, 200);
      }, c * 280);
    }

    setTimeout(() => {
      this.renderKeyboard();
      const won  = res.every(x => x === 'correct');
      const lost = !won && this.guesses.length >= this.maxGuesses;
      if (won || lost) {
        this.over = true;
        this.updateScores(won);
        this.saveState();
        setTimeout(() => this.showEndModal(won), 800);
      } else {
        this.saveState();
      }
    }, this.W * 280 + 250);
  },

  evaluate(guess) {
    const res = Array(this.W).fill('absent');
    const ans = this.answer.split('');
    const g   = guess.split('');
    g.forEach((l, i) => { if (l === ans[i]) { res[i] = 'correct'; ans[i] = null; g[i] = null; } });
    g.forEach((l, i) => {
      if (!l) return;
      const idx = ans.indexOf(l);
      if (idx !== -1) { res[i] = 'present'; ans[idx] = null; }
    });
    return res;
  },

  shake(r) {
    const row = document.getElementById('wrow-' + r);
    if (row) { row.classList.add('shake'); setTimeout(() => row.classList.remove('shake'), 500); }
  },

  showEndMessage() {
    const won = this.guesses.length > 0 &&
                this.guesses[this.guesses.length - 1].result.every(x => x === 'correct');
    showToast(won ? '🌟 Already solved today!' : 'The word was ' + this.answer, 2500);
  },

  updateScores(won) {
    const s = State.scores.wordle;
    s.played++;
    if (won) { s.won++; s.streak++; s.maxStreak = Math.max(s.streak, s.maxStreak); }
    else     { s.streak = 0; }
    saveScores();
  },

  saveState() {
    localStorage.setItem('litplay_wstate', JSON.stringify({ guesses: this.guesses, over: this.over }));
  },

  showEndModal(won) {
    const s  = State.scores.wordle;
    const n  = this.guesses.length;
    const labels = ['Genius! 🌟', 'Magnificent!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'];
    showModal({
      icon:    won ? '🎉' : '📖',
      title:   won ? (labels[n - 1] || 'Well done!') : 'Better luck tomorrow!',
      message: won ? `Solved in ${n} ${n === 1 ? 'guess' : 'guesses'}!` : `The word was "${this.answer}".`,
      stats: `
        <div class="stat-row"><span>Played</span><strong>${s.played}</strong></div>
        <div class="stat-row"><span>Won</span><strong>${s.won}</strong></div>
        <div class="stat-row"><span>Streak</span><strong>${s.streak} 🔥</strong></div>
        <div class="stat-row"><span>Best Streak</span><strong>${s.maxStreak}</strong></div>`,
      onPlayAgain: () => showToast('Come back tomorrow for a new word! 📅', 2000),
      onHome: () => {}
    });
  }
};

// ================================================================
//  GAME 2 — UNSCRAMBLE (Anagram)
// ================================================================
const AnagramGame = {
  queue: [], current: null, lives: 3, score: 0,

  start() {
    this.queue   = shuffle([...ANAGRAM_WORDS]);
    this.lives   = 3;
    this.score   = 0;
    this.current = null;
    this.updateLives();
    this.updateScore();
    this.nextWord();
    this.bindInput();
  },

  nextWord() {
    if (this.queue.length === 0 || this.lives <= 0) { this.endGame(); return; }
    this.current = this.queue.shift();
    document.getElementById('ana-category').textContent  = this.current.category;
    document.getElementById('ana-scrambled').textContent = this.current.scrambled;
    document.getElementById('ana-hint').textContent      = this.current.hint;
    document.getElementById('ana-input').value = '';
    document.getElementById('ana-input').focus();
    document.getElementById('ana-scrambled').className = 'scrambled-word';
  },

  bindInput() {
    const inp = document.getElementById('ana-input');
    const sub = document.getElementById('ana-submit');
    const skp = document.getElementById('ana-skip');
    if (!inp) return;

    // Clone nodes to remove old listeners
    const newSub = sub.cloneNode(true);
    const newSkp = skp.cloneNode(true);
    sub.parentNode.replaceChild(newSub, sub);
    skp.parentNode.replaceChild(newSkp, skp);

    newSub.addEventListener('click', () => this.check());
    newSkp.addEventListener('click', () => this.skip());

    if (this._kh) document.removeEventListener('keydown', this._kh);
    this._kh = e => {
      if (State.screen !== 'anagram') return;
      if (e.key === 'Enter') this.check();
    };
    document.addEventListener('keydown', this._kh);
  },

  check() {
    if (!this.current) return;
    const inp = document.getElementById('ana-input');
    const val = (inp.value || '').trim().toUpperCase();
    const ans = this.current.word.toUpperCase();

    if (val === ans) {
      this.score += 10;
      this.updateScore();
      document.getElementById('ana-scrambled').className = 'scrambled-word correct-flash';
      showToast('Correct! +10 ⭐', 1000);
      setTimeout(() => this.nextWord(), 900);
    } else {
      this.lives--;
      this.updateLives();
      document.getElementById('ana-scrambled').className = 'scrambled-word wrong-flash';
      showToast('The word was ' + this.current.word, 1400);
      if (this.lives <= 0) { setTimeout(() => this.endGame(), 1200); }
      else { setTimeout(() => { if (this.current) this.nextWord(); }, 1200); }
    }
  },

  skip() {
    this.lives--;
    this.updateLives();
    showToast('Skipped — ' + (this.current ? this.current.word : ''), 1200);
    if (this.lives <= 0) { setTimeout(() => this.endGame(), 600); }
    else { this.nextWord(); }
  },

  updateLives() {
    const el = document.getElementById('ana-lives');
    if (!el) return;
    el.innerHTML = [0,1,2].map(i =>
      `<span class="${i < this.lives ? 'heart-on' : 'heart-off'}">♥</span>`
    ).join('');
  },

  updateScore() {
    const el = document.getElementById('ana-score');
    if (el) el.textContent = '⭐ ' + this.score;
  },

  endGame() {
    const s = State.scores.anagram;
    s.played++;
    s.totalScore += this.score;
    saveScores();
    showModal({
      icon:    this.score >= 100 ? '🏆' : this.score >= 50 ? '⭐' : '📖',
      title:   'Session Over!',
      message: `You scored ${this.score} points this round!`,
      stats: `
        <div class="stat-row"><span>This Round</span><strong>${this.score} pts</strong></div>
        <div class="stat-row"><span>All-Time Total</span><strong>${s.totalScore} pts</strong></div>
        <div class="stat-row"><span>Sessions Played</span><strong>${s.played}</strong></div>`,
      onPlayAgain: () => this.start(),
      onHome: () => {}
    });
  }
};

// ================================================================
//  GAME 3 — FILL THE BLANK
// ================================================================
const FillBlankGame = {
  pool: [], idx: 0, score: 0, total: 10, answered: false,

  start() {
    this.pool     = shuffle([...QUOTES]).slice(0, this.total);
    this.idx      = 0;
    this.score    = 0;
    this.answered = false;
    this.render();
  },

  render() {
    if (this.idx >= this.pool.length) { this.endGame(); return; }
    const q = this.pool[this.idx];
    this.answered = false;

    document.getElementById('fb-progress').textContent = (this.idx + 1) + '/' + this.total;
    document.getElementById('fb-score').textContent    = '⭐ ' + this.score;

    const blank = '<span class="blank">_______</span>';
    const quoteText = q.before
      + (q.before.trim() ? ' ' : '')
      + blank
      + (q.after ? ' ' + q.after : '');
    document.getElementById('fb-quote').innerHTML = quoteText;
    document.getElementById('fb-source').textContent = '';

    const fb = document.getElementById('fb-feedback');
    fb.classList.add('hidden');

    const grid = document.getElementById('fb-options');
    grid.innerHTML = '';
    shuffle([...q.options]).forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => this.pick(opt, btn, q));
      grid.appendChild(btn);
    });
  },

  pick(choice, btn, q) {
    if (this.answered) return;
    this.answered = true;
    const correct = choice === q.answer;
    if (correct) { this.score += 10; btn.classList.add('opt-right'); }
    else {
      btn.classList.add('opt-wrong');
      document.querySelectorAll('.opt-btn').forEach(b => {
        if (b.textContent === q.answer) b.classList.add('opt-right');
      });
    }
    document.getElementById('fb-source').textContent = '— ' + q.source;
    const fb = document.getElementById('fb-feedback');
    document.getElementById('fb-full').textContent = '\u201C' + q.full + '\u201D';
    fb.classList.remove('hidden');
    document.getElementById('fb-next').onclick = () => { this.idx++; this.render(); };
  },

  endGame() {
    const s   = State.scores.fillblank;
    s.played++;
    s.totalScore += this.score;
    saveScores();
    const pct = Math.round((this.score / (this.total * 10)) * 100);
    showModal({
      icon:    pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📖',
      title:   'Quiz Complete!',
      message: `You scored ${this.score} out of ${this.total * 10}`,
      stats: `
        <div class="stat-row"><span>Correct</span><strong>${this.score / 10} / ${this.total}</strong></div>
        <div class="stat-row"><span>Accuracy</span><strong>${pct}%</strong></div>
        <div class="stat-row"><span>All-Time Score</span><strong>${s.totalScore} pts</strong></div>`,
      onPlayAgain: () => this.start(),
      onHome: () => {}
    });
  }
};

// ================================================================
//  GAME 4 — WORD WISE (Definitions)
// ================================================================
const DefinitionGame = {
  pool: [], idx: 0, score: 0, total: 15, answered: false,

  start() {
    this.pool     = shuffle([...DEFINITIONS]).slice(0, this.total);
    this.idx      = 0;
    this.score    = 0;
    this.answered = false;
    this.render();
  },

  render() {
    if (this.idx >= this.pool.length) { this.endGame(); return; }
    const q = this.pool[this.idx];
    this.answered = false;

    document.getElementById('def-progress').textContent = (this.idx + 1) + '/' + this.total;
    document.getElementById('def-score').textContent    = '⭐ ' + this.score;
    document.getElementById('def-word').textContent     = q.word;

    document.getElementById('def-feedback').classList.add('hidden');

    const grid = document.getElementById('def-options');
    grid.innerHTML = '';
    shuffle([...q.options]).forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn opt-def';
      btn.textContent = opt;
      btn.addEventListener('click', () => this.pick(opt, btn, q));
      grid.appendChild(btn);
    });
  },

  pick(choice, btn, q) {
    if (this.answered) return;
    this.answered = true;
    const correct = choice === q.definition;
    if (correct) { this.score += 10; btn.classList.add('opt-right'); }
    else {
      btn.classList.add('opt-wrong');
      document.querySelectorAll('.opt-def').forEach(b => {
        if (b.textContent === q.definition) b.classList.add('opt-right');
      });
    }
    document.getElementById('def-feedback').classList.remove('hidden');
    document.getElementById('def-next').onclick = () => { this.idx++; this.render(); };
  },

  endGame() {
    const s   = State.scores.definition;
    s.played++;
    s.totalScore += this.score;
    saveScores();
    const pct = Math.round((this.score / (this.total * 10)) * 100);
    showModal({
      icon:    pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📖',
      title:   'Word Wise Complete!',
      message: `You scored ${this.score} out of ${this.total * 10}`,
      stats: `
        <div class="stat-row"><span>Correct</span><strong>${this.score / 10} / ${this.total}</strong></div>
        <div class="stat-row"><span>Accuracy</span><strong>${pct}%</strong></div>
        <div class="stat-row"><span>All-Time Score</span><strong>${s.totalScore} pts</strong></div>`,
      onPlayAgain: () => this.start(),
      onHome: () => {}
    });
  }
};
