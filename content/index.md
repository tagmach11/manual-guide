---
title: Home
date: 2025-08-20
---
<section class="scroll-stack">
  <div class="stack">
    <article class="s-card" style="--bg:#0b5fff">
      <h2>편의점 VIP</h2>
      <p>편의점에 당신만을 위한 VIP 라운지가…</p>
    </article>

    <article class="s-card" style="--bg:#2563eb">
      <h2>자동 모으기</h2>
      <p>작게, 자주, 자동으로 모이면 커진다.</p>
    </article>

    <article class="s-card" style="--bg:#111827">
      <h2>소비 패턴 인사이트</h2>
      <p>한눈에 파악되는 나의 지출 리포트.</p>
    </article>
  </div>
</section>

<script>
(() => {
  const sections = document.querySelectorAll('.scroll-stack');
  if (!sections.length) return;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const throttled = (fn => {
    let t = false;
    return () => { if (!t) { requestAnimationFrame(()=>{ fn(); t=false; }); t = true; } }
  });

  sections.forEach(section => {
    const cards = section.querySelectorAll('.s-card');
    const count = cards.length;
    section.style.setProperty('--count', count);

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // 섹션 진행도 0~1
      const progress = clamp((vh - rect.top) / (rect.height - vh), 0, 1);

      cards.forEach((card, i) => {
        const t = i - progress * (count - 1);          // 스택 내 상대 위치
        const y = t * 26;                               // 카드 간 간격(px)
        const scale = 1 - clamp((i - progress) * 0.04, 0, 0.15);
        const rot = clamp((i - progress) * -2.5, -6, 6);
        const z = 1000 - Math.abs(i - progress) * 10;

        card.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rot}deg)`;
        card.style.opacity = 1 - clamp((i - progress) * 0.08, 0, 0.45);
        card.style.zIndex = z | 0;
      });
    };

    const onScroll = throttled(update);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  });
})();
</script>
