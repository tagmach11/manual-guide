---
title: Home
date: 2025-08-20
---



<section class="scroll-stack-demo">
  <div class="stack">
    <article class="s-card" style="--bg:#0b5fff">
      <h2>카드 A</h2>
      <p>토스 느낌의 스크롤 스택 데모</p>
    </article>
    <article class="s-card" style="--bg:#2563eb">
      <h2>카드 B</h2>
      <p>스크롤하면 다음 카드가 살짝 올라옵니다.</p>
    </article>
    <article class="s-card" style="--bg:#111827" data-ink="dark">
      <h2>카드 C</h2>
      <p>다크 배경 + 밝은 글자</p>
    </article>
  </div>
</section>

<style>
/* ===== Core styles (sticky + stack) ===== */
.scroll-stack-demo{ --count:3; --top:10vh; --radius:24px;
  position:relative;
  height: calc(100vh + (var(--count) - 1) * 80vh);
  /* sticky 가 깨지지 않게: 조상 overflow는 보이도록 */
  overflow: visible !important;
}
.scroll-stack-demo .stack{
  position: sticky; top: var(--top);
  height: calc(100vh - var(--top) - 6vh);
  border-radius: var(--radius);
  perspective: 1200px;
  overflow: visible !important;
}
.s-card{
  position:absolute; inset:0;
  display:flex; flex-direction:column; justify-content:center;
  padding: clamp(24px, 5vw, 64px);
  border-radius: var(--radius);
  background: var(--bg, #0b5fff);
  color:#fff;
  box-shadow: 0 30px 80px rgba(0,0,0,.25);
  transform-origin: 50% 70%;
  will-change: transform, opacity;
}
.s-card h2{ font-size: clamp(28px, 4vw, 54px); margin:0 0 .4em; font-weight:800; }
.s-card p { max-width: 46ch; opacity:.95; font-size: clamp(15px, 1.4vw, 18px); }

/* 라이트/다크 텍스트 대비 */
:root{ --s-txt:#0f1116; }
[data-theme="dark"]{ --s-txt:#e6ebf5; }
.s-card[data-ink="dark"]{ color: var(--s-txt); }

/* 수평 스크롤 안전장치 (세로만) */
html, body { overflow-x: hidden; }
.scroll-stack-demo, .scroll-stack-demo *{ max-width:100%; }
</style>

<script>
(() => {
  const sections = document.querySelectorAll('.scroll-stack-demo');
  if (!sections.length) return;

  const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
  const raf = (fn => { let t=false; return () => { if(!t){ requestAnimationFrame(()=>{fn(); t=false}) ; t=true } }});

  sections.forEach(section => {
    const cards = section.querySelectorAll('.s-card');
    section.style.setProperty('--count', cards.length);

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 섹션 진행도 (0~1)
      const prog = clamp((vh - rect.top) / (rect.height - vh), 0, 1);
      const n = cards.length;

      cards.forEach((card, i) => {
        const t = i - prog * (n - 1);
        const y = t * 26;                           // 카드 간 간격
        const scale = 1 - clamp((i - prog)*0.04, 0, 0.15);
        const rot = clamp((i - prog)*-2.5, -6, 6);
        card.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rot}deg)`;
        card.style.opacity = String(1 - clamp((i - prog)*0.08, 0, 0.45));
        card.style.zIndex = String(1000 - Math.abs(i - prog)*10 | 0);
      });
    };

    const onScroll = raf(update);
    update();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
  });
})();
</script>
