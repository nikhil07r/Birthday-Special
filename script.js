/* ===================================================
   DEEPA'S BIRTHDAY EXPERIENCE - JAVASCRIPT
   Real Bollywood Vocals (Tum Hi Ho - Arijit Singh),
   Authentic Physical-Model Firecrackers, Stardust Particles & Logic
   =================================================== */

(function () {
  'use strict';

  // Deepa's birth date: November 14, 2005 00:00:00
  const BIRTH_DATE = new Date(2005, 10, 14, 0, 0, 0); // Month is 0-indexed (10 = Nov)

  // Relationship start date: 28 April 2021 00:00:00
  const TOGETHER_DATE = new Date(2021, 3, 28, 0, 0, 0); // Month is 0-indexed (3 = April)

  // Thoughtful, mature, and deeply respectful notes for the Wish Jar
  const MATURE_LOVE_NOTES = [
    "Your presence brings a quiet peace into my life that nothing in this world could ever replace.",
    "The grace, patience, and maturity with which you navigate life inspire me every single day.",
    "In a world that is always rushing and full of noise, being beside you feels like arriving home.",
    "Your kindness is genuine, gentle, and deeply touching. It makes everyone around you feel cherished.",
    "The mutual trust and respect we share are the most precious foundation of my life.",
    "Your smile carries an effortless serenity that can soften even the heaviest of days.",
    "I admire your quiet strength, your intellect, and the dignity with which you carry yourself.",
    "Walking this journey of life beside you as your humsafar is my greatest blessing and honor.",
    "You don't just make moments memorable—you give ordinary days purpose, warmth, and depth.",
    "No matter what life brings or where our paths lead, you will always have my loyalty and my whole heart.",
    "Your wisdom and gentle perspective ground me whenever life feels overwhelming.",
    "You are my sanctuary, my constant, and the most beautiful soul I have ever known.",
    "Thank you for being my favorite companion, my closest confidante, and my greatest source of calm.",
    "Your beauty is timeless because it originates from the purity and strength of your heart.",
    "Today and always, I celebrate the incredible, graceful woman you are. Happy Birthday, Deepa."
  ];

  let currentReasonIndex = 0;
  let isPlayingMusic = false;
  let audioCtx = null;

  // DOM Elements
  const introCurtain = document.getElementById('intro-curtain');
  const envelopeTrigger = document.getElementById('envelope-trigger');
  const mainContent = document.getElementById('main-content');
  const musicBtn = document.getElementById('music-btn');
  const musicBtnLabel = document.getElementById('music-btn-label');
  const songSelect = document.getElementById('song-select');
  const localAudio = document.getElementById('local-audio-player');
  const DEFAULT_SONG_VOLUME = 0.60; // 60% song playback volume
  if (localAudio) {
    localAudio.volume = DEFAULT_SONG_VOLUME;
  }
  const fireworksBtn = document.getElementById('fireworks-btn');
  const grandFireworksBtn = document.getElementById('grand-fireworks-btn');
  const floatingBalloonsBtn = document.getElementById('floating-balloons-btn');
  const blowCandlesBtn = document.getElementById('blow-candles-btn');
  const wishBanner = document.getElementById('wish-banner');
  const nextReasonBtn = document.getElementById('next-reason-btn');
  const reasonText = document.getElementById('reason-text');
  const reasonNum = document.getElementById('reason-num');

  // Clear any legacy uploaded photo overrides so real assets/deepa_*.jpg always show
  try {
    for (let i = 1; i <= 4; i++) {
      localStorage.removeItem(`deepa_photo_${i}`);
    }
  } catch (e) {}

  // ===================================================
  // 1. AUTHENTIC PHYSICAL-MODEL REAL FIRECRACKER ENGINE
  // ===================================================
  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Delightful, crisp, celebratory "Pop" sound (Champagne cork / party popper pop + harmonic chime sparkle)
  let lastPopSoundTime = 0;
  function playCelebrationPop() {
    const clockNow = Date.now();
    if (clockNow - lastPopSoundTime < 110) return; // Prevent audio engine saturation on rapid clicks
    lastPopSoundTime = clockNow;

    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      // --- STAGE 1: The Crisp Party Pop (Instant pitch dive ~820Hz down to ~110Hz in 35ms) ---
      const popOsc = audioCtx.createOscillator();
      const popGain = audioCtx.createGain();
      popOsc.type = 'sine';
      popOsc.frequency.setValueAtTime(820, now);
      popOsc.frequency.exponentialRampToValueAtTime(110, now + 0.038);

      popGain.gain.setValueAtTime(0.75, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      popOsc.connect(popGain);
      popGain.connect(audioCtx.destination);
      popOsc.start(now);
      popOsc.stop(now + 0.05);

      // --- STAGE 2: Soft Resonance Thud (Warm acoustic body thump like uncorking) ---
      const thumpOsc = audioCtx.createOscillator();
      const thumpGain = audioCtx.createGain();
      thumpOsc.type = 'triangle';
      thumpOsc.frequency.setValueAtTime(160, now);
      thumpOsc.frequency.exponentialRampToValueAtTime(45, now + 0.06);

      thumpGain.gain.setValueAtTime(0.42, now);
      thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

      thumpOsc.connect(thumpGain);
      thumpGain.connect(audioCtx.destination);
      thumpOsc.start(now);
      thumpOsc.stop(now + 0.07);

      // --- STAGE 3: Shimmering Stardust Chimes (D Major Triad Sparkle: D5, A5, D6) ---
      const sparklePitches = [587.33, 880, 1174.66];
      sparklePitches.forEach((pitch, idx) => {
        const sDelay = now + 0.018 + idx * 0.024;
        const sOsc = audioCtx.createOscillator();
        const sGain = audioCtx.createGain();
        sOsc.type = 'sine';
        sOsc.frequency.setValueAtTime(pitch, sDelay);

        sGain.gain.setValueAtTime(0.0001, sDelay);
        sGain.gain.linearRampToValueAtTime(0.14 / (idx + 1), sDelay + 0.012);
        sGain.gain.exponentialRampToValueAtTime(0.0001, sDelay + 0.28);

        sOsc.connect(sGain);
        sGain.connect(audioCtx.destination);
        sOsc.start(sDelay);
        sOsc.stop(sDelay + 0.30);
      });
    } catch (e) {
      console.warn("Celebration pop audio error:", e);
    }
  }

  // Alias for backward compatibility across all call sites
  const playRealFirecracker = playCelebrationPop;

  // Celestial ascending chime arpeggio for 3D lantern release
  function playAscendingHarp() {
    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760]; // A major celestial ascending scale
      notes.forEach((freq, idx) => {
        const t = now + idx * 0.075;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.9);
      });
    } catch (e) {}
  }

  // Soft breath / whoosh when blowing candles
  function playBlowWhoosh() {
    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const bSize = Math.floor(audioCtx.sampleRate * 0.35);
      const bBuf = audioCtx.createBuffer(1, bSize, audioCtx.sampleRate);
      const bData = bBuf.getChannelData(0);
      for (let i = 0; i < bSize; i++) {
        bData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.09));
      }
      const bSrc = audioCtx.createBufferSource();
      bSrc.buffer = bBuf;
      const bFilt = audioCtx.createBiquadFilter();
      bFilt.type = 'lowpass';
      bFilt.frequency.setValueAtTime(480, now);
      bFilt.frequency.exponentialRampToValueAtTime(70, now + 0.35);
      const bGain = audioCtx.createGain();
      bGain.gain.setValueAtTime(0.4, now);
      bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      bSrc.connect(bFilt);
      bFilt.connect(bGain);
      bGain.connect(audioCtx.destination);
      bSrc.start(now);
    } catch (e) {}
  }

  // Soft sparkle tone for picking notes
  function playSoftChime(freq, duration = 1.0) {
    if (!audioCtx) initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // ===================================================
  // 2. ROMANTIC VOCAL PLAYLIST & DYNAMIC SHUFFLE ENGINE
  // ===================================================
  const ROMANTIC_PLAYLIST = [
    { file: 'tum_hi_ho.mp3', title: '🌹 Tum Hi Ho (Aashiqui 2 - Arijit Singh)' },
    { file: 'kesariya.mp3', title: '💖 Kesariya (Brahmastra - Arijit Singh)' },
    { file: 'raataan_lambiyan.mp3', title: '🌙 Raataan Lambiyan (Shershaah - Jubin & Asees)' },
    { file: 'heeriye.mp3', title: '✨ Heeriye (Jasleen Royal & Arijit Singh)' },
    { file: 'apna_bana_le.mp3', title: '💫 Apna Bana Le (Bhediya - Arijit Singh)' },
    { file: 'maiyya_mainu.mp3', title: '🕊️ Maiyya Mainu (Jersey - Sachet Tandon)' },
    { file: 'meri_zindagi_hai_tu.mp3', title: '👑 Meri Zindagi Hai Tu (Jubin & Neeti)' },
    { file: 'chahun_main_ya_naa.mp3', title: '🌸 Chahun Main Ya Naa (Arijit & Palak)' }
  ];

  // Pick a fresh, different random starting song whenever the website is opened or refreshed!
  function pickInitialRandomTrack() {
    const lastPlayed = localStorage.getItem('deepa_last_start_song');
    const available = [];
    for (let i = 0; i < ROMANTIC_PLAYLIST.length; i++) {
      if (ROMANTIC_PLAYLIST[i].file !== lastPlayed) {
        available.push(i);
      }
    }
    const chosenIndex = available.length > 0 
      ? available[Math.floor(Math.random() * available.length)] 
      : Math.floor(Math.random() * ROMANTIC_PLAYLIST.length);

    localStorage.setItem('deepa_last_start_song', ROMANTIC_PLAYLIST[chosenIndex].file);
    return chosenIndex;
  }

  let currentTrackIndex = pickInitialRandomTrack();
  const nextSongBtn = document.getElementById('next-song-btn');

  // Pre-load the dynamically chosen starting song into player and selector
  if (localAudio) {
    localAudio.src = ROMANTIC_PLAYLIST[currentTrackIndex].file;
    localAudio.volume = DEFAULT_SONG_VOLUME;
  }
  if (songSelect) {
    songSelect.value = ROMANTIC_PLAYLIST[currentTrackIndex].file;
  }

  function updateMusicButtonUI(playing) {
    if (musicBtn) {
      if (playing) {
        musicBtn.classList.add('playing');
        if (musicBtnLabel) musicBtnLabel.textContent = 'Pause Song';
      } else {
        musicBtn.classList.remove('playing');
        if (musicBtnLabel) musicBtnLabel.textContent = 'Play Song';
      }
    }
  }

  function playTrackByIndex(index) {
    if (index < 0 || index >= ROMANTIC_PLAYLIST.length) index = 0;
    currentTrackIndex = index;
    const track = ROMANTIC_PLAYLIST[currentTrackIndex];

    if (localAudio) {
      localAudio.volume = DEFAULT_SONG_VOLUME;
      localAudio.src = track.file;
      if (songSelect) songSelect.value = track.file;

      localAudio.play().then(() => {
        isPlayingMusic = true;
        updateMusicButtonUI(true);
      }).catch(err => {
        console.warn("Autoplay needs user gesture:", err);
      });
    }
  }

  function autoShuffleNextTrack() {
    let nextIndex;
    if (ROMANTIC_PLAYLIST.length > 1) {
      do {
        nextIndex = Math.floor(Math.random() * ROMANTIC_PLAYLIST.length);
      } while (nextIndex === currentTrackIndex);
    } else {
      nextIndex = 0;
    }
    playTrackByIndex(nextIndex);
  }

  // AUTOMATIC SHUFFLE: When ANY song finishes, automatically shuffle to the next romantic hit!
  if (localAudio) {
    localAudio.addEventListener('ended', () => {
      autoShuffleNextTrack();
    });
  }

  // Toggle Play / Pause button
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (!localAudio) return;
      if (isPlayingMusic) {
        localAudio.pause();
        isPlayingMusic = false;
        updateMusicButtonUI(false);
      } else {
        if (!localAudio.src || localAudio.src.endsWith('/')) {
          playTrackByIndex(currentTrackIndex);
        } else {
          localAudio.play().then(() => {
            isPlayingMusic = true;
            updateMusicButtonUI(true);
          }).catch(() => {
            playTrackByIndex(currentTrackIndex);
          });
        }
      }
    });
  }

  // Dropdown manual selection: Instant playback of selected song!
  if (songSelect) {
    songSelect.addEventListener('change', () => {
      const foundIdx = ROMANTIC_PLAYLIST.findIndex(p => p.file === songSelect.value);
      if (foundIdx !== -1) {
        playTrackByIndex(foundIdx);
      }
    });
  }

  // Next / Shuffle button click
  if (nextSongBtn) {
    nextSongBtn.addEventListener('click', () => {
      autoShuffleNextTrack();
    });
  }

  // ===================================================
  // 3. INTRO UNLOCK & TRANSITION
  // ===================================================
  function unlockSurprise() {
    playRealFirecracker();
    playTrackByIndex(currentTrackIndex);

    introCurtain.classList.add('fade-out');
    setTimeout(() => {
      introCurtain.style.display = 'none';
      mainContent.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 3);
    }, 900);
  }

  if (envelopeTrigger) {
    envelopeTrigger.addEventListener('click', unlockSurprise);
  }

  // ===================================================
  // 4. LIVE LIFETIME & BIRTHDAY COUNTER
  // ===================================================
  function updateLifetimeCounter() {
    const now = new Date();
    const diffMs = now - BIRTH_DATE;

    if (diffMs > 0) {
      const totalSecs = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSecs / (3600 * 24));
      const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSecs % 3600) / 60);
      const seconds = totalSecs % 60;

      const dElem = document.getElementById('days-count');
      const hElem = document.getElementById('hours-count');
      const mElem = document.getElementById('mins-count');
      const sElem = document.getElementById('secs-count');

      if (dElem) dElem.textContent = days.toLocaleString();
      if (hElem) hElem.textContent = hours.toString().padStart(2, '0');
      if (mElem) mElem.textContent = minutes.toString().padStart(2, '0');
      if (sElem) sElem.textContent = seconds.toString().padStart(2, '0');
    }
  }
  setInterval(updateLifetimeCounter, 1000);
  updateLifetimeCounter();

  // Live Together Love Counter (Since 28 April 2021)
  function updateTogetherCounter() {
    const now = new Date();
    const diffMs = now - TOGETHER_DATE;

    if (diffMs > 0) {
      const totalSecs = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSecs / (3600 * 24));
      const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSecs % 3600) / 60);
      const seconds = totalSecs % 60;

      const dElem = document.getElementById('together-days');
      const hElem = document.getElementById('together-hours');
      const mElem = document.getElementById('together-mins');
      const sElem = document.getElementById('together-secs');

      if (dElem) dElem.textContent = days.toLocaleString();
      if (hElem) hElem.textContent = hours.toString().padStart(2, '0');
      if (mElem) mElem.textContent = minutes.toString().padStart(2, '0');
      if (sElem) sElem.textContent = seconds.toString().padStart(2, '0');
    }
  }
  setInterval(updateTogetherCounter, 1000);
  updateTogetherCounter();

  // ===================================================
  // LIFETIME KEEPSAKE CERTIFICATE GENERATOR (DOWNLOAD PNG)
  // ===================================================
  const downloadCertBtn = document.getElementById('download-cert-btn');

  function generateKeepsakeCertificate() {
    playRealFirecracker();

    const c = document.createElement('canvas');
    c.width = 1200;
    c.height = 820;
    const ctx = c.getContext('2d');

    // 1. Rich Luxury Dark Background
    const bgGrad = ctx.createRadialGradient(600, 410, 50, 600, 410, 750);
    bgGrad.addColorStop(0, '#150d1b');
    bgGrad.addColorStop(0.6, '#0b0710');
    bgGrad.addColorStop(1, '#050308');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 820);

    // 2. Ambient Stardust Particles
    for (let i = 0; i < 75; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1200, Math.random() * 820, Math.random() * 1.5 + 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.2})`;
      ctx.fill();
    }

    // 3. Double Gold Filigree Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(35, 35, 1130, 750);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(48, 48, 1104, 724);

    // Corner Accents
    function drawCorner(x, y, dx, dy) {
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 28);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 28, y);
      ctx.stroke();
    }
    drawCorner(55, 55, 1, 1);
    drawCorner(1145, 55, -1, 1);
    drawCorner(55, 765, 1, -1);
    drawCorner(1145, 765, -1, -1);

    // 4. Crown & Insignia
    ctx.font = '36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('👑', 600, 112);

    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('OFFICIAL TESTAMENT OF LIFELONG DEVOTION', 600, 146);

    // 5. Main Certificate Title
    ctx.font = 'bold 44px Georgia, serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Certificate of Eternal Love', 600, 202);

    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#e8dfd5';
    ctx.fillText('Commemorating 5+ Beautiful Years Together • Deepa\'s 21st Birthday Milestone', 600, 235);

    // Divider
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(320, 256);
    ctx.lineTo(880, 256);
    ctx.stroke();

    // 6. Names
    ctx.font = '60px cursive, Georgia';
    ctx.fillStyle = '#fef08a';
    ctx.fillText('Deepa  &  Nikhil', 600, 330);

    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('TOGETHER SINCE 28 APRIL 2021', 600, 370);

    // 7. Sacred Pledge Text
    ctx.font = 'italic 19px Georgia, serif';
    ctx.fillStyle = '#f3efe6';
    const lines = [
      '"This sacred testament honors over 2,000+ days of unwavering companionship, mutual respect,',
      'and quiet strength. From 28 April 2021 through every season of life ahead,',
      'my promise remains true: to always protect your peace, believe in your dreams,',
      'and cherish your heart for all of our days."'
    ];
    lines.forEach((line, idx) => {
      ctx.fillText(line, 600, 420 + idx * 30);
    });

    // 8. Seal Graphics & Signatures
    ctx.beginPath();
    ctx.arc(600, 595, 46, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(212, 175, 55, 0.18)';
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = '24px sans-serif';
    ctx.fillText('✦', 600, 603);

    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('SEALED WITH ALL MY HEART', 600, 665);
    ctx.fillText('EST. 28 APRIL 2021 • FOREVER AND ALWAYS', 600, 683);

    // Signatures
    ctx.font = '28px cursive, Georgia';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('Nikhil (Forever Yours)', 920, 665);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(800, 680);
    ctx.lineTo(1040, 680);
    ctx.stroke();

    ctx.font = '28px cursive, Georgia';
    ctx.fillStyle = '#fef08a';
    ctx.fillText('Deepa (My Humsafar)', 280, 665);
    ctx.beginPath();
    ctx.moveTo(160, 680);
    ctx.lineTo(400, 680);
    ctx.stroke();

    // Trigger download
    const link = document.createElement('a');
    link.download = 'Deepa_and_Nikhil_Lifetime_Keepsake.png';
    link.href = c.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Celebratory fireworks burst
    triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
  }

  if (downloadCertBtn) {
    downloadCertBtn.addEventListener('click', generateKeepsakeCertificate);
  }

  // ===================================================
  // 5. ROYAL CAKE & CANDLE BLOWING
  // ===================================================
  let candlesBlown = false;

  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    // 1. Play soft breath puff sound
    playBlowWhoosh();

    // 2. Extinguish all candle flames completely with direct styles and classes
    document.querySelectorAll('.flame').forEach(f => {
      f.classList.add('blown-out');
      f.style.setProperty('display', 'none', 'important');
      f.style.setProperty('animation', 'none', 'important');
      f.style.setProperty('opacity', '0', 'important');
      f.style.setProperty('visibility', 'hidden', 'important');

      // Add gentle rising smoke puff from wick
      const smoke = document.createElement('div');
      smoke.className = 'smoke-puff';
      if (f.parentElement) {
        f.parentElement.appendChild(smoke);
        setTimeout(() => smoke.remove(), 2200);
      }
    });

    if (blowCandlesBtn) {
      blowCandlesBtn.style.opacity = '0.85';
      blowCandlesBtn.innerHTML = '✨ Wish Made & Blessed by the Stars for Deepa ✨';
    }

    // 3. Golden sparklers and celebration pop confetti rain DOWN FROM THE TOP of the screen!
    setTimeout(() => {
      if (wishBanner) wishBanner.classList.remove('hidden');

      // Wave 1: Immediate cascading rain from top + Pop sound!
      triggerSparklersRainFromTop(120);

      // Waves 2 to 5: Continuous rain shower down from top
      setTimeout(() => triggerSparklersRainFromTop(100), 400);
      setTimeout(() => triggerSparklersRainFromTop(90), 850);
      setTimeout(() => triggerSparklersRainFromTop(80), 1400);
      setTimeout(() => triggerSparklersRainFromTop(70), 2000);
    }, 200);
  }

  if (blowCandlesBtn) {
    blowCandlesBtn.addEventListener('click', blowCandles);
  }

  document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', blowCandles);
  });

  // ===================================================
  // 6. ENCHANTED WISH JAR (Mature & Soulful Notes)
  // ===================================================
  function nextLoveReason() {
    playSoftChime(880, 0.8);
    currentReasonIndex = (currentReasonIndex + 1) % MATURE_LOVE_NOTES.length;

    reasonText.style.opacity = '0';
    reasonText.style.transform = 'translateY(10px)';

    setTimeout(() => {
      reasonText.textContent = `"${MATURE_LOVE_NOTES[currentReasonIndex]}"`;
      reasonNum.textContent = currentReasonIndex + 1;
      reasonText.style.opacity = '1';
      reasonText.style.transform = 'translateY(0)';
      reasonText.style.transition = 'all 0.4s ease';
    }, 200);
  }

  if (nextReasonBtn) nextReasonBtn.addEventListener('click', nextLoveReason);
  const jarTrigger = document.getElementById('jar-trigger');
  if (jarTrigger) jarTrigger.addEventListener('click', nextLoveReason);

  // ===================================================
  // 7. 21 GOLDEN REASONS FOR 21 YEARS OF DEEPA
  // ===================================================
  const GOLDEN_REASONS_21 = [
    { num: '01', icon: '🕊️', title: 'Your Serene Presence', desc: 'You bring an effortless peace into my life that nothing in this noisy world could ever replace.' },
    { num: '02', icon: '🌸', title: 'Your Gentle Grace', desc: 'The rare dignity, elegance, and kindness with which you carry yourself every single day.' },
    { num: '03', icon: '✨', title: 'That Radiant Smile', desc: 'A smile that genuinely warms my whole heart and makes every heavy worry melt away in seconds.' },
    { num: '04', icon: '💎', title: 'Your Unshakable Loyalty', desc: 'When you love, you love with pure honesty, protective fidelity, and your entire heart.' },
    { num: '05', icon: '🌟', title: 'Your Quiet Inner Strength', desc: 'The resilience and calm composure with which you face challenges, never losing your grace.' },
    { num: '06', icon: '💖', title: 'Your Tender, Nurturing Care', desc: 'The selfless warmth you give so naturally to family, loved ones, and everyone around you.' },
    { num: '07', icon: '👑', title: 'Your Pure & Honest Heart', desc: 'Completely free of pretense or malice; your intentions are always sincere, soft, and true.' },
    { num: '08', icon: '🌙', title: 'Your Expressive Eyes', desc: 'Looking into your eyes feels like arriving home after a lifetime of searching. My calm harbor.' },
    { num: '09', icon: '🎶', title: 'Your Genuine Laughter', desc: 'The sweetest, most comforting sound in the universe that always brightens my day.' },
    { num: '10', icon: '☕', title: 'Our Comfortable Silences', desc: 'How deeply safe and complete it feels to sit beside you even when we do not speak a word.' },
    { num: '11', icon: '💡', title: 'Your Intelligence & Wisdom', desc: 'Your thoughtful, grounded perspective on life that constantly guides, inspires, and grounds me.' },
    { num: '12', icon: '🌿', title: 'Your Patient Understanding', desc: 'How you listen with an open heart, resolve differences with dignity, and choose peace.' },
    { num: '13', icon: '🏰', title: 'Being My Safe Haven', desc: 'In a world where everyone wears a mask, with you I am 100% free and safe to be myself.' },
    { num: '14', icon: '🚀', title: 'Your Golden Ambition', desc: 'The quiet passion and determination with which you strive to reach your dreams and goals.' },
    { num: '15', icon: '🌻', title: 'Your Playful Warmth', desc: 'The joyful, sweet child-like lightness and humor that fills our cozy days with pure magic.' },
    { num: '16', icon: '⚖️', title: 'The Mutual Respect We Share', desc: 'How we treat each other with deep honor, equality, and cherish each other\'s individuality.' },
    { num: '17', icon: '🍯', title: 'Your Boundless Empathy', desc: 'How deeply you care about people\'s feelings and the tender consideration you always show.' },
    { num: '18', icon: '🤝', title: 'Choosing Me As Your Humsafar', desc: 'The immense gratitude I feel every morning knowing I have the honor of walking beside you.' },
    { num: '19', icon: '🌱', title: 'Growing Side by Side', desc: 'Over 5+ years of watching our bond mature into something deeply sacred and unbreakable.' },
    { num: '20', icon: '⭐', title: 'My Greatest Inspiration', desc: 'Being loved by a woman as remarkable as you makes me want to be the best man I can be.' },
    { num: '21', icon: '💍', title: 'My Forever & Lifelong Promise', desc: 'Loving you is not just a feeling; it is my lifelong conscious commitment, loyalty, and devotion.' }
  ];

  const reasonsContainer = document.getElementById('reasons-21-container');
  const revealAllReasonsBtn = document.getElementById('reveal-all-reasons-btn');

  if (reasonsContainer) {
    GOLDEN_REASONS_21.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'reason-21-card';
      card.innerHTML = `
        <div class="reason-card-top">
          <span class="reason-num-badge">YEAR #${item.num}</span>
          <span class="reason-icon">${item.icon}</span>
        </div>
        <h4 class="reason-card-title">${item.title}</h4>
        <p class="reason-card-desc">${item.desc}</p>
      `;
      card.addEventListener('click', () => {
        card.classList.toggle('revealed');
        playSoftChime(880 + (idx % 8) * 60, 0.4);
      });
      reasonsContainer.appendChild(card);
    });
  }

  if (revealAllReasonsBtn) {
    revealAllReasonsBtn.addEventListener('click', () => {
      playRealFirecracker();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4);
      document.querySelectorAll('.reason-21-card').forEach((card, idx) => {
        setTimeout(() => {
          card.classList.add('revealed');
        }, idx * 60);
      });
      revealAllReasonsBtn.textContent = '💖 All 21 Reasons Glowing For Deepa 💖';
      revealAllReasonsBtn.classList.add('gold-border');
    });
  }

  // ===================================================
  // 8. THE SECRET BIRTHDAY WISHING LANTERN (3D FULLSCREEN & OUTER BOX ENGINE)
  // ===================================================
  const sendLanternBtn = document.getElementById('send-lantern-btn');
  const wishInput = document.getElementById('deepa-wish-input');
  const lanternGraphic = document.getElementById('sky-lantern-graphic');
  const lanternCardStage = document.getElementById('lantern-card-stage');
  const fullscreenLanternSky = document.getElementById('fullscreen-lantern-sky');
  const lanternSkyBackdrop = document.getElementById('lantern-sky-backdrop');
  const inputArea = document.getElementById('lantern-input-area');
  const sealedDisplay = document.getElementById('wish-sealed-display');
  const sealedWishText = document.getElementById('sealed-wish-text');

  function renderSealedWish(text) {
    if (!text) return;
    if (sealedWishText) sealedWishText.textContent = `"${text}"`;
    if (inputArea) inputArea.classList.add('hidden');
    if (sealedDisplay) sealedDisplay.classList.remove('hidden');

    // Ensure the 3D lantern remains visible and floating gracefully above the card
    if (lanternGraphic) {
      lanternGraphic.classList.remove('releasing-3d');
    }
    if (lanternCardStage) {
      lanternCardStage.classList.remove('releasing-glow');
    }
  }

  // Clear any old test wishes on load so the experience is always fresh for Deepa!
  try {
    localStorage.removeItem('deepa_birthday_wish_21');
  } catch (e) {}

  if (inputArea) inputArea.classList.remove('hidden');
  if (sealedDisplay) sealedDisplay.classList.add('hidden');
  if (wishInput) wishInput.value = '';

  // Launch Fullscreen 3D Sky Lanterns across Outer Box & Whole Screen
  function launchFullscreenLanternFestival() {
    if (!fullscreenLanternSky) return;
    fullscreenLanternSky.innerHTML = '';

    // Spawn 28 glowing 3D sky lanterns spread across the entire viewport
    for (let i = 0; i < 28; i++) {
      const lantern = document.createElement('div');
      lantern.className = 'fullscreen-sky-lantern';

      const posX = 2 + Math.random() * 94; // across the whole outer screen (2% to 96%)
      const zDepth = -150 - Math.random() * 650; // 3D depth
      const scale = 0.35 + Math.random() * 0.45;
      const driftX = (Math.random() - 0.5) * 220; // sideways drift in wind
      const rotY = (Math.random() - 0.5) * 40; // 3D yaw tilt
      const duration = 4.8 + Math.random() * 2.2; // seconds
      const delay = Math.random() * 1.6; // staggered launch

      const widthPx = Math.floor(48 + Math.random() * 24);
      const heightPx = Math.floor(widthPx * 1.35);

      lantern.style.left = `${posX}vw`;
      lantern.style.setProperty('--w', `${widthPx}px`);
      lantern.style.setProperty('--h', `${heightPx}px`);
      lantern.style.setProperty('--z-depth', `${zDepth}px`);
      lantern.style.setProperty('--scale', scale);
      lantern.style.setProperty('--drift-x', `${driftX}px`);
      lantern.style.setProperty('--rot-y', `${rotY}deg`);
      lantern.style.setProperty('--dur', `${duration}s`);
      lantern.style.animationDelay = `${delay}s`;

      fullscreenLanternSky.appendChild(lantern);
    }
  }

  if (sendLanternBtn) {
    sendLanternBtn.addEventListener('click', () => {
      const text = wishInput.value.trim();
      if (!text) {
        wishInput.focus();
        wishInput.placeholder = 'Please write your heartfelt wish before releasing the lantern! ✨';
        return;
      }

      // 1. Play celebratory pop & celestial ascending harp
      playCelebrationPop();
      playAscendingHarp();

      // 2. Cascade gentle golden sparklers from top
      triggerSparklersRainFromTop(85);

      // 3. Illuminate the outer box with golden lantern aura
      if (lanternCardStage) {
        lanternCardStage.classList.add('releasing-glow');
      }

      // 4. Main 3D Lantern ascends out of the box into the open sky!
      if (lanternGraphic) {
        lanternGraphic.classList.remove('releasing-3d');
        void lanternGraphic.offsetWidth; // trigger reflow
        lanternGraphic.classList.add('releasing-3d');
      }

      // 5. Launch Fullscreen 3D Sky Lantern Festival across the outer background
      launchFullscreenLanternFestival();

      // 6. Spawn shooting stars streaking across the sky
      spawnShootingStar(width * 0.2, -20);
      setTimeout(() => spawnShootingStar(width * 0.7, -20), 800);

      // 7. Store wish
      localStorage.setItem('deepa_birthday_wish_21', text);

      // 8. Seamless transition after 3.8s 3D celestial flight
      setTimeout(() => {
        renderSealedWish(text);
        if (fullscreenLanternSky) {
          fullscreenLanternSky.innerHTML = '';
        }
      }, 3800);
    });
  }

  // ===================================================
  // 9. MODERN & HEART-TOUCHING VOICE MESSAGE PLAYER
  // ===================================================
  const voiceAudio = document.getElementById('voice-note-audio-element');
  const voiceCard = document.querySelector('.voice-card');
  const voicePlayBtn = document.getElementById('voice-play-circle-btn');
  const voicePlaySymbol = document.getElementById('voice-play-symbol');
  const voiceStatusText = document.getElementById('voice-status-text');
  const voiceWaveformContainer = document.getElementById('voice-waveform-container');
  const voiceWaveformTrack = document.getElementById('voice-waveform-track');
  const voiceWaveformCursor = document.getElementById('voice-waveform-cursor');
  const voiceTimeElapsed = document.getElementById('voice-time-elapsed');
  const voiceTimeTotal = document.getElementById('voice-time-total');
  const voiceSpeedBtn = document.getElementById('voice-speed-btn');

  let isPlayingVoice = false;
  let voiceAnimFrame = null;
  const SPEEDS = [1.0, 1.2, 1.5];
  let currentSpeedIdx = 0;

  // Generate 48 organic waveform bars that resemble spoken voice frequencies
  const TOTAL_BARS = 48;
  const baseBarHeights = [];
  for (let i = 0; i < TOTAL_BARS; i++) {
    const norm = i / TOTAL_BARS;
    const envelope = Math.sin(norm * Math.PI) * 0.72 + 0.28;
    const ripple = Math.sin(norm * 18) * 0.18 + Math.cos(norm * 8) * 0.14;
    const heightPercent = Math.min(95, Math.max(18, (envelope + ripple) * 85));
    baseBarHeights.push(heightPercent);

    if (voiceWaveformTrack) {
      const bar = document.createElement('div');
      bar.className = 'wave-bar';
      bar.style.height = `${heightPercent}%`;
      bar.dataset.index = i;
      voiceWaveformTrack.appendChild(bar);
    }
  }

  function formatVoiceTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function duckBackgroundMusic(duck = true) {
    if (!localAudio) return;
    const targetVolume = duck ? 0.10 : DEFAULT_SONG_VOLUME;
    const stepTime = 30;
    const totalSteps = 16;
    const volumeStep = (targetVolume - localAudio.volume) / totalSteps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      localAudio.volume = Math.max(0.05, Math.min(1.0, localAudio.volume + volumeStep));
      if (currentStep >= totalSteps) {
        localAudio.volume = targetVolume;
        clearInterval(interval);
      }
    }, stepTime);
  }

  function updateWaveformProgress() {
    if (!voiceAudio || !voiceWaveformTrack) return;
    const current = voiceAudio.currentTime || 0;
    const duration = voiceAudio.duration || 1;
    const progress = Math.min(1, current / duration);

    if (voiceTimeElapsed) voiceTimeElapsed.textContent = formatVoiceTime(current);
    if (voiceWaveformCursor) voiceWaveformCursor.style.left = `${progress * 100}%`;

    const bars = voiceWaveformTrack.children;
    const activeIndex = Math.floor(progress * bars.length);

    const now = Date.now() * 0.008;
    for (let i = 0; i < bars.length; i++) {
      const bar = bars[i];
      if (i <= activeIndex) {
        bar.classList.add('played');
      } else {
        bar.classList.remove('played');
      }

      if (isPlayingVoice) {
        const dance = Math.sin(now + i * 0.6) * 16 + Math.cos(now * 1.4 + i * 0.3) * 12;
        const liveH = Math.min(98, Math.max(18, baseBarHeights[i] + dance));
        bar.style.height = `${liveH}%`;
      } else {
        bar.style.height = `${baseBarHeights[i]}%`;
      }
    }
  }

  function voiceLoop() {
    if (!isPlayingVoice) return;
    updateWaveformProgress();
    voiceAnimFrame = requestAnimationFrame(voiceLoop);
  }

  function playVoiceNote() {
    if (!voiceAudio) return;
    initAudio();

    voiceAudio.play().then(() => {
      isPlayingVoice = true;
      if (voiceCard) voiceCard.classList.add('is-playing');
      if (voicePlaySymbol) voicePlaySymbol.textContent = '⏸';
      if (voiceStatusText) voiceStatusText.textContent = 'Speaking from the Heart...';

      // Duck background music smoothly
      duckBackgroundMusic(true);

      cancelAnimationFrame(voiceAnimFrame);
      voiceLoop();
    }).catch(err => {
      console.warn("Voice note playback requires user interaction:", err);
      if (voiceStatusText) voiceStatusText.textContent = 'Tap to Play';
    });
  }

  function pauseVoiceNote() {
    if (!voiceAudio) return;
    voiceAudio.pause();
    isPlayingVoice = false;
    cancelAnimationFrame(voiceAnimFrame);

    if (voiceCard) voiceCard.classList.remove('is-playing');
    if (voicePlaySymbol) voicePlaySymbol.textContent = '▶';
    if (voiceStatusText) voiceStatusText.textContent = voiceAudio.ended ? 'Finished Listening' : 'Paused';

    // Restore background music
    duckBackgroundMusic(false);
    updateWaveformProgress();
  }

  if (voicePlayBtn) {
    voicePlayBtn.addEventListener('click', () => {
      if (isPlayingVoice) {
        pauseVoiceNote();
      } else {
        playVoiceNote();
      }
    });
  }

  if (voiceAudio) {
    voiceAudio.addEventListener('loadedmetadata', () => {
      if (voiceTimeTotal) voiceTimeTotal.textContent = formatVoiceTime(voiceAudio.duration);
      if (voiceStatusText) voiceStatusText.textContent = 'Ready to Play';
    });

    voiceAudio.addEventListener('ended', () => {
      pauseVoiceNote();
      if (voiceStatusText) voiceStatusText.textContent = 'Finished Listening';
      triggerSparklersRainFromTop(50);
    });

    voiceAudio.addEventListener('timeupdate', () => {
      if (!isPlayingVoice) updateWaveformProgress();
    });
  }

  // Interactive Waveform Seeking
  if (voiceWaveformContainer) {
    voiceWaveformContainer.addEventListener('click', (e) => {
      if (!voiceAudio || !voiceAudio.duration) return;
      const rect = voiceWaveformContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      voiceAudio.currentTime = ratio * voiceAudio.duration;
      updateWaveformProgress();
      if (!isPlayingVoice) {
        playVoiceNote();
      }
    });
  }

  // Speed Toggle (1.0x -> 1.2x -> 1.5x)
  if (voiceSpeedBtn) {
    voiceSpeedBtn.addEventListener('click', () => {
      currentSpeedIdx = (currentSpeedIdx + 1) % SPEEDS.length;
      const speed = SPEEDS[currentSpeedIdx];
      if (voiceAudio) voiceAudio.playbackRate = speed;
      voiceSpeedBtn.textContent = `${speed.toFixed(1)}x`;
    });
  }

  // ===================================================
  // 10. INTERACTIVE 3D ROLLED LOVE LETTER SCROLL
  // ===================================================
  const rolledScrollBox = document.getElementById('rolled-scroll-box');
  const scrollSealTrigger = document.getElementById('scroll-seal-trigger');
  const unrolledLetterWrapper = document.getElementById('unrolled-letter-wrapper');
  const rerollScrollBtn = document.getElementById('reroll-scroll-btn');

  function playParchmentRollSound(isReverse = false) {
    if (!initAudio()) return;
    try {
      const now = audioCtx.currentTime;
      const duration = isReverse ? 0.75 : 1.45;

      // 1. Friction whoosh of rolling parchment paper
      const sampleRate = audioCtx.sampleRate;
      const bufferSize = Math.floor(sampleRate * duration);
      const buffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.14;
      }

      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = buffer;

      const bandpass = audioCtx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.Q.value = 2.0;

      if (!isReverse) {
        bandpass.frequency.setValueAtTime(1400, now);
        bandpass.frequency.exponentialRampToValueAtTime(280, now + duration);
      } else {
        bandpass.frequency.setValueAtTime(280, now);
        bandpass.frequency.exponentialRampToValueAtTime(1300, now + duration);
      }

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.18, now + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noiseSource.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + duration);

      // 2. Ascending / Descending Harp Chimes
      const notes = isReverse ? [784, 659, 523, 392] : [392, 523, 659, 784, 1046];
      const step = (duration * 0.65) / notes.length;
      notes.forEach((freq, idx) => {
        const noteTime = now + 0.06 + idx * step;
        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        noteGain.gain.setValueAtTime(0.001, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.05, noteTime + 0.03);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.35);

        osc.connect(noteGain);
        noteGain.connect(audioCtx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.38);
      });
    } catch (e) {
      console.warn("Roll audio error:", e);
    }
  }

  function unrollScrollLetter() {
    if (!rolledScrollBox || !unrolledLetterWrapper) return;

    // 1. Play wax crack pop & realistic unrolling parchment sound
    playCelebrationPop();
    playParchmentRollSound(false);

    // 2. Cascade gentle golden sparklers from top
    triggerSparklersRainFromTop(55);

    // 3. Crack wax seal animation
    if (scrollSealTrigger) {
      scrollSealTrigger.classList.add('cracked');
    }

    // 4. Smooth physical rolling transition
    rolledScrollBox.style.opacity = '0';
    rolledScrollBox.style.transform = 'scale(0.88)';

    setTimeout(() => {
      rolledScrollBox.classList.add('hidden');
      unrolledLetterWrapper.classList.remove('hidden');
      unrolledLetterWrapper.classList.remove('is-closing');
      
      // Force layout reflow
      void unrolledLetterWrapper.offsetWidth;
      
      unrolledLetterWrapper.classList.add('is-open');
    }, 200);
  }

  function rerollScrollLetter() {
    if (!rolledScrollBox || !unrolledLetterWrapper) return;

    playParchmentRollSound(true);

    unrolledLetterWrapper.classList.remove('is-open');
    unrolledLetterWrapper.classList.add('is-closing');

    setTimeout(() => {
      unrolledLetterWrapper.classList.add('hidden');
      unrolledLetterWrapper.classList.remove('is-closing');
      if (scrollSealTrigger) {
        scrollSealTrigger.classList.remove('cracked');
      }
      rolledScrollBox.classList.remove('hidden');
      void rolledScrollBox.offsetWidth;
      rolledScrollBox.style.opacity = '1';
      rolledScrollBox.style.transform = 'scale(1)';
    }, 850);
  }

  if (scrollSealTrigger) {
    scrollSealTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      unrollScrollLetter();
    });
  }

  if (rolledScrollBox) {
    rolledScrollBox.addEventListener('click', unrollScrollLetter);
  }

  if (rerollScrollBtn) {
    rerollScrollBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      rerollScrollLetter();
    });
  }

  // ===================================================
  // 11. ENCHANTED STARDUST CURSOR TRAIL (Desktop Only)
  // ===================================================
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const TRAIL_ICONS = ['✦', '✨', '⭐', '💫', '✧'];
  let lastTrailTime = 0;

  function spawnStardustAt(x, y) {
    if (isTouchDevice) return; // Never spawn DOM elements during touch to ensure 100% silky smooth mobile scrolling!
    const now = Date.now();
    if (now - lastTrailTime < 65) return;
    lastTrailTime = now;

    const p = document.createElement('span');
    p.className = 'stardust-particle';
    p.textContent = TRAIL_ICONS[Math.floor(Math.random() * TRAIL_ICONS.length)];
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.setProperty('--x-shift', `${(Math.random() - 0.5) * 50}px`);
    p.style.setProperty('--y-shift', `${(Math.random() - 0.5) * 50 - 15}px`);
    p.style.fontSize = `${11 + Math.random() * 8}px`;
    document.body.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 750);
  }

  if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
      spawnStardustAt(e.clientX, e.clientY);
    }, { passive: true });
  }

  // ===================================================
  // 10. FLOATING BALLOONS GENERATOR
  // ===================================================
  function spawnBalloons() {
    playRealFirecracker();
    const balloonEmojis = ['🎈', '✨', '🤍', '💫', '🍾', '🎉'];
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon';
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        balloon.style.left = `${Math.random() * 95}vw`;
        balloon.style.fontSize = `${2 + Math.random() * 2}rem`;
        balloon.style.animationDuration = `${4 + Math.random() * 4}s`;
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 7000);
      }, i * 150);
    }
  }

  if (floatingBalloonsBtn) {
    floatingBalloonsBtn.addEventListener('click', spawnBalloons);
  }

  // ===================================================
  // 12. MOVABLE CELESTIAL CANVAS & SHOOTING STARS ENGINE
  // ===================================================
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Interactive Parallax Mouse & Touch Coordinates (Moves the night sky smoothly!)
  let mouseX = width / 2;
  let mouseY = height / 2;
  let smoothMouseX = width / 2;
  let smoothMouseY = height / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  // Responsive Star Count (Silky-smooth 60fps on phones & laptops)
  const isMobileScreen = window.innerWidth < 768;
  const stars = [];
  const STAR_COUNT = isMobileScreen ? 55 : 110;
  for (let i = 0; i < STAR_COUNT; i++) {
    const isBright = Math.random() > 0.86;
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: isBright ? (Math.random() * 1.5 + 1.1) : (Math.random() * 1.1 + 0.35),
      alpha: Math.random() * 0.75 + 0.25,
      speed: Math.random() * 0.016 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      depth: Math.random() * 0.85 + 0.15, // 0.15 = distant, 1.0 = near (moves faster)
      hasSpikes: isBright,
      spikeRot: Math.random() * Math.PI,
      spikeRotSpeed: (Math.random() - 0.5) * 0.008,
      color: Math.random() > 0.75 ? '#fef08a' : (Math.random() > 0.85 ? '#ffd1dc' : '#ffffff')
    });
  }

  // Realistic Shooting Stars (Meteors)
  const shootingStars = [];

  function spawnShootingStar(startX, startY) {
    const sX = startX !== undefined ? startX : (Math.random() * width * 1.1 - width * 0.05);
    const sY = startY !== undefined ? startY : (-20 - Math.random() * 50);
    // Diagonal celestial streak across the sky (approx 36° to 46°)
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.24;
    const speed = Math.random() * 8 + 18;

    shootingStars.push({
      x: sX,
      y: sY,
      prevX: sX,
      prevY: sY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: Math.random() * 90 + 130,
      life: 1.0,
      decay: Math.random() * 0.015 + 0.011,
      thickness: Math.random() * 1.2 + 2.2,
      angle: angle,
      color: Math.random() > 0.35 ? '#fef08a' : '#d4af37'
    });
  }

  // Periodically spawn shooting stars (every 2.8s to 4.8s, with twin meteor chance for Deepa & Nikhil!)
  function scheduleNextShootingStar() {
    const delay = 2600 + Math.random() * 2200;
    setTimeout(() => {
      spawnShootingStar();
      // 30% chance of a twin shooting star
      if (Math.random() > 0.7) {
        setTimeout(() => {
          spawnShootingStar(undefined, -15);
        }, 300 + Math.random() * 300);
      }
      scheduleNextShootingStar();
    }, delay);
  }
  scheduleNextShootingStar();

  // Confetti / Fireworks / Sparkler particles with Strict High-Performance Cap
  const fireworks = [];
  const MAX_FIREWORKS = 180; // Hard limit to ensure locked 60/120 FPS even on rapid repeated button clicks
  const FIREWORK_COLORS = ['#d4af37', '#fef08a', '#f59e0b', '#fbbf24', '#fef3c7', '#ffffff', '#e11d48', '#991b1b', '#ffedd5'];

  // Golden Sparklers & Pop Confetti Shower DOWN FROM THE TOP
  function triggerSparklersRainFromTop(count = 48) {
    playCelebrationPop();

    // Prevent particle buildup across rapid repeated clicks
    if (fireworks.length + count > MAX_FIREWORKS) {
      const toRemove = (fireworks.length + count) - MAX_FIREWORKS;
      fireworks.splice(0, toRemove);
    }

    for (let i = 0; i < count; i++) {
      const startX = Math.random() * width;
      const startY = -15 - Math.random() * 80;
      const fallSpeed = Math.random() * 3.6 + 2.2;
      const drift = (Math.random() - 0.5) * 2.4;

      fireworks.push({
        x: startX,
        y: startY,
        vx: drift,
        vy: fallSpeed,
        color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
        size: Math.random() * 3.8 + 2.0,
        alpha: 1,
        decay: Math.random() * 0.0075 + 0.005,
        gravity: 0.038,
        shape: Math.random() > 0.38 ? 'sparkler' : (Math.random() > 0.45 ? 'ribbon' : 'heart'),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.05 + 0.02
      });
    }
  }

  function triggerConfettiBurst(originX, originY) {
    playCelebrationPop();
    const count = 35;

    if (fireworks.length + count > MAX_FIREWORKS) {
      fireworks.splice(0, (fireworks.length + count) - MAX_FIREWORKS);
    }

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6.5 + 2.5;
      fireworks.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
        size: Math.random() * 3.8 + 2.0,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.014,
        gravity: 0.16,
        shape: Math.random() > 0.4 ? 'sparkler' : (Math.random() > 0.5 ? 'heart' : 'circle'),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.12
      });
    }
  }

  let grandShowTimers = [];
  function launchGrandShow() {
    initAudio();

    // Clear any pending timers from previous clicks so rapid 5-6 clicks don't accumulate delayed waves
    grandShowTimers.forEach(t => clearTimeout(t));
    grandShowTimers = [];

    // Wave 1: Immediate instant burst
    triggerSparklersRainFromTop(48);

    // Wave 2 & 3: Staggered showers
    grandShowTimers.push(setTimeout(() => {
      triggerSparklersRainFromTop(36);
    }, 280));

    grandShowTimers.push(setTimeout(() => {
      triggerSparklersRainFromTop(28);
    }, 560));
  }

  if (fireworksBtn) fireworksBtn.addEventListener('click', launchGrandShow);

  window.addEventListener('click', (e) => {
    if (['BUTTON', 'INPUT', 'TEXTAREA', 'A', 'SELECT', 'OPTION'].includes(e.target.tagName)) return;
    if (e.target.closest('.glass-card') || e.target.closest('.polaroid-card') || e.target.closest('.audio-panel')) return;
    triggerConfettiBurst(e.clientX, e.clientY);
    // Spawn a celebratory shooting star on click!
    spawnShootingStar(Math.random() * width * 0.8, -20);
  });

  function renderCanvas() {
    ctx.clearRect(0, 0, width, height);

    // 1. Mouse & Screen Parallax Smooth Interpolation
    smoothMouseX += (mouseX - smoothMouseX) * 0.035;
    smoothMouseY += (mouseY - smoothMouseY) * 0.035;
    const pOffsetX = (smoothMouseX - width / 2);
    const pOffsetY = (smoothMouseY - height / 2);

    // 2. Draw Ambient Movable Parallax Stars (Optimized: Zero shadowBlur stalls)
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.alpha += s.speed * s.direction;
      if (s.alpha >= 1 || s.alpha <= 0.18) s.direction *= -1;

      // Parallax shift based on individual depth
      let sx = s.x + pOffsetX * s.depth * 0.04;
      let sy = s.y + pOffsetY * s.depth * 0.04;

      // Seamless wrap-around
      if (sx < -20) sx += width + 40;
      if (sx > width + 20) sx -= width + 40;
      if (sy < -20) sy += height + 40;
      if (sy > height + 20) sy -= height + 40;

      // Soft ambient halo for bright stars without raster blur bottleneck
      if (s.hasSpikes) {
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.06, s.alpha * 0.3);
        ctx.beginPath();
        ctx.arc(sx, sy, s.radius * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Main star body
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0.12, s.alpha);
      ctx.beginPath();
      ctx.arc(sx, sy, s.radius, 0, Math.PI * 2);
      ctx.fill();

      // 4-point golden diffraction spikes on bright stars
      if (s.hasSpikes) {
        s.spikeRot += s.spikeRotSpeed;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(s.spikeRot);
        ctx.strokeStyle = `rgba(254, 240, 138, ${s.alpha * 0.7})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-s.radius * 3.2, 0);
        ctx.lineTo(s.radius * 3.2, 0);
        ctx.moveTo(0, -s.radius * 3.2);
        ctx.lineTo(0, s.radius * 3.2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // 3. Draw & Update Realistic Shooting Stars (Meteors)
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.prevX = s.x;
      s.prevY = s.y;
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0 || s.x > width + 200 || s.y > height + 200) {
        // Micro-burst of fading golden embers at end of trajectory
        for (let k = 0; k < 4; k++) {
          fireworks.push({
            x: s.x,
            y: s.y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            color: '#fef08a',
            size: Math.random() * 2 + 1,
            alpha: 0.85,
            decay: 0.035,
            gravity: 0.04,
            shape: 'circle'
          });
        }
        shootingStars.splice(i, 1);
        continue;
      }

      const tailX = s.x - Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;

      ctx.save();
      const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${s.life})`);
      grad.addColorStop(0.2, `rgba(254, 240, 138, ${s.life * 0.85})`);
      grad.addColorStop(0.65, `rgba(212, 175, 55, ${s.life * 0.4})`);
      grad.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = s.thickness;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      // Radiant meteor head with soft gold halo (Zero shadowBlur overhead for 100% smooth 60fps)
      ctx.fillStyle = `rgba(254, 240, 138, ${s.life * 0.45})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.thickness * 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 255, 255, ${s.life})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.thickness * 1.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 5. Draw Falling Sparklers, Ribbons & Celebration Particles (Zero GPU stalls)
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const p = fireworks[i];

      if (p.wobble !== undefined && p.wobbleSpeed !== undefined) {
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.75;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.985;
      p.alpha -= p.decay;

      if (p.rotation !== undefined && p.rotSpeed !== undefined) {
        p.rotation += p.rotSpeed;
      }

      if (p.alpha <= 0 || p.y > height + 80) {
        fireworks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.shape === 'sparkler') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        const r = p.size;
        
        // Crisp 4-point diamond star (Blazing fast direct lineTo polygon)
        ctx.beginPath();
        ctx.moveTo(0, -r * 2.2);
        ctx.lineTo(r * 0.45, -r * 0.45);
        ctx.lineTo(r * 2.2, 0);
        ctx.lineTo(r * 0.45, r * 0.45);
        ctx.lineTo(0, r * 2.2);
        ctx.lineTo(-r * 0.45, r * 0.45);
        ctx.lineTo(-r * 2.2, 0);
        ctx.lineTo(-r * 0.45, -r * 0.45);
        ctx.closePath();
        ctx.fill();

        // Shimmering white diamond center
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'ribbon') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        ctx.fillRect(-p.size, -p.size * 0.35, p.size * 2, p.size * 0.7);
      } else if (p.shape === 'heart') {
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        const topCurveHeight = p.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -p.size / 2, 0, -p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-p.size / 2, (p.size + topCurveHeight) / 2, 0, (p.size + topCurveHeight) / 1.5, 0, p.size);
        ctx.bezierCurveTo(0, (p.size + topCurveHeight) / 1.5, p.size / 2, (p.size + topCurveHeight) / 2, p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(p.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(renderCanvas);
  }

  // ===================================================
  // 13. ANIMATED ROYAL "D" LOGO FAVICON & BRAND ENGINE
  // ===================================================
  function initAnimatedFavicon() {
    let faviconLink = document.getElementById('dynamic-favicon');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.id = 'dynamic-favicon';
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/png';
      document.head.appendChild(faviconLink);
    }

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const TOTAL_FRAMES = 24;

    function renderFaviconFrame() {
      // Pause updates when tab is in background to save CPU
      if (document.hidden) {
        setTimeout(renderFaviconFrame, 450);
        return;
      }

      ctx.clearRect(0, 0, 32, 32);

      // 1. Dark Velvet Medallion Disc
      const bgGrad = ctx.createRadialGradient(16, 16, 2, 16, 16, 15.5);
      bgGrad.addColorStop(0, '#2e0f1e');
      bgGrad.addColorStop(0.65, '#14060e');
      bgGrad.addColorStop(1, '#080206');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(16, 16, 15, 0, Math.PI * 2);
      ctx.fill();

      // 2. Gold Border with Radiant Pulse
      const pulse = (Math.sin((frame / TOTAL_FRAMES) * Math.PI * 2) + 1) * 0.5;
      ctx.strokeStyle = `rgba(212, 175, 55, ${0.72 + pulse * 0.28})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(16, 16, 14, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Orbiting Stardust Sparkle
      const orbitAngle = (frame / TOTAL_FRAMES) * Math.PI * 2;
      const ox = 16 + Math.cos(orbitAngle) * 14;
      const oy = 16 + Math.sin(orbitAngle) * 14;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ox, oy, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // 4. Golden Crown atop D
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(10.5, 9);
      ctx.lineTo(9, 5.5);
      ctx.lineTo(13, 7.2);
      ctx.lineTo(16, 4);
      ctx.lineTo(19, 7.2);
      ctx.lineTo(23, 5.5);
      ctx.lineTo(21.5, 9);
      ctx.closePath();
      ctx.fill();

      // Crown Diamond Glimmer
      const gemSparkle = (Math.sin((frame * 2 / TOTAL_FRAMES) * Math.PI * 2) + 1) * 0.5;
      ctx.fillStyle = gemSparkle > 0.4 ? '#ffffff' : '#fef08a';
      ctx.beginPath();
      ctx.arc(16, 4, 1.3, 0, Math.PI * 2);
      ctx.fill();

      // 5. Letter "D" with Metallic Gold Shimmer Sweep
      ctx.save();
      ctx.font = 'bold 16px "Playfair Display", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Shimmer sweep across D
      const sweepX = 6 + ((frame % TOTAL_FRAMES) / TOTAL_FRAMES) * 20;
      const dGrad = ctx.createLinearGradient(sweepX - 5, 12, sweepX + 5, 26);
      dGrad.addColorStop(0, '#d4af37');
      dGrad.addColorStop(0.35, '#fff9c4');
      dGrad.addColorStop(0.55, '#ffffff');
      dGrad.addColorStop(0.75, '#f59e0b');
      dGrad.addColorStop(1, '#d4af37');

      ctx.fillStyle = dGrad;
      ctx.fillText('D', 16, 19);
      ctx.restore();

      try {
        faviconLink.href = canvas.toDataURL('image/png');
      } catch (e) {}

      frame = (frame + 1) % TOTAL_FRAMES;
      setTimeout(renderFaviconFrame, 125); // ~8 FPS
    }

    renderFaviconFrame();
  }

  initAnimatedFavicon();

  // Sweet Romantic Tab Title Presence
  const MAIN_TAB_TITLE = '✨ Written In The Stars 🌙';
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = 'Deepa, come back soon... 🌸';
    } else {
      document.title = MAIN_TAB_TITLE;
    }
  });

  // Interactive Royal "D" Logo & Brand Pill Handlers
  const introRoyalLogo = document.getElementById('intro-royal-logo');
  if (introRoyalLogo) {
    introRoyalLogo.addEventListener('click', (e) => {
      e.stopPropagation();
      playSoftChime(1046, 0.4);
      triggerConfettiBurst(e.clientX, e.clientY);
    });
  }

  const royalBrandHeader = document.getElementById('royal-brand-header');
  if (royalBrandHeader) {
    royalBrandHeader.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  renderCanvas();

})();
