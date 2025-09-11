---
title: LX2 랜딩
cssclass: lx2-landing
---
---
title: LX2 랜딩
cssclass: lx2-landing
---

<h1 class="lx2-title">통합 학습관리시스템 LX2</h1>

<section class="lx2-row">
  <a class="lx2-card blue" href="#">
    <span class="ico" aria-hidden="true">
      <!-- Graduation cap -->
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 8l11 5 9-4.09V15h2V8L12 3z"/><path d="M7 12v4.5c0 1.5 2.5 2.5 5 2.5s5-1 5-2.5V12l-5 2.3L7 12z"/></svg>
    </span>
    <span class="txt"><b class="ko">최적의 학습 경험</b><i class="en">EDUCATION</i></span>
  </a>

  <a class="lx2-card purple" href="#">
    <span class="ico" aria-hidden="true">
      <!-- Wi-Fi -->
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="M2 10a16 16 0 0 1 20 0l-1.9 2.3a13 13 0 0 0-16.2 0L2 10z"/><path d="M5.5 13.5a11 11 0 0 1 13 0L16.6 16a8 8 0 0 0-9.2 0l-1.9-2.5z"/></svg>
    </span>
    <span class="txt"><b class="ko">검증된 기술</b><i class="en">TECHNOLOGY</i></span>
  </a>

  <a class="lx2-card green" href="#">
    <span class="ico" aria-hidden="true">
      <!-- Lightning -->
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z"/></svg>
    </span>
    <span class="txt"><b class="ko">압도적 가성비</b><i class="en">EFFICIENCY</i></span>
  </a>

  <a class="lx2-card indigo" href="#">
    <span class="ico" aria-hidden="true">
      <!-- Lock -->
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 10V8a6 6 0 1 1 12 0v2h-2V8a4 4 0 0 0-8 0v2H6z"/><path d="M5 10h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/></svg>
    </span>
    <span class="txt"><b class="ko">가장 안정적인 시스템</b><i class="en">SECURITY</i></span>
  </a>
</section>

<p class="lx2-cta"><a class="btn" href="#">자세히보기</a></p>

<style>
/* ========== Layout & Typography ========== */
.lx2-landing *{ word-break: keep-all; }
.lx2-title{ margin:0 0 18px; white-space:nowrap; letter-spacing:.2px; }
.lx2-row{
  display:grid; gap:16px;
  grid-template-columns:repeat(4, minmax(240px,1fr));
}
.lx2-card{
  display:flex; align-items:center; gap:14px;
  min-width:240px; height:122px; padding:18px 20px;
  border-radius:18px; text-decoration:none;
  background:var(--card-bg); border:1px solid var(--card-bd);
  box-shadow:0 8px 22px rgba(0,0,0,.14);
}
.lx2-card .ico{
  width:56px; height:56px; border-radius:14px;
  display:grid; place-items:center;
  background:var(--ico-bg);
  color:var(--ico-fg);
  box-shadow:inset 0 0 0 1px var(--ico-br);
}
.lx2-card svg{ width:28px; height:28px; }
.lx2-card .txt{ line-height:1.15; }
.lx2-card .ko{ font-weight:800; font-size:1.05rem; white-space:nowrap; }
.lx2-card .en{ display:block; margin-top:3px; font-size:.78rem; opacity:.78; letter-spacing:.02em; }

.lx2-cta{ margin-top:18px; }
.lx2-cta .btn{
  display:inline-block; padding:12px 18px; border-radius:12px;
  text-decoration:none; border:1px solid var(--card-bd);
}

/* ========== Theme tokens ========== */
.theme-light .lx2-landing{
  --card-bg:#ffffff; --card-bd:rgba(15,23,42,.10);
  --ico-br:rgba(0,0,0,.06); --ico-fg:#0b1020;
}
.theme-dark .lx2-landing{
  --card-bg:rgba(255,255,255,.05); --card-bd:rgba(255,255,255,.12);
  --ico-br:rgba(255,255,255,.14); --ico-fg:#e8ecf8;
}

/* Brandful card accents (라이트/다크 자동 조정) */
.lx2-card.blue  { --ico-bg:linear-gradient(135deg,#e6f2ff,#b6d2ff); }
.lx2-card.purple{ --ico-bg:linear-gradient(135deg,#efe7ff,#d1c6ff); }
.lx2-card.green { --ico-bg:linear-gradient(135deg,#e9ffe1,#c8f2b3); }
.lx2-card.indigo{ --ico-bg:linear-gradient(135deg,#e6ebff,#c7d3ff); }

/* Responsive */
@media (max-width: 960px){
  .lx2-row{ grid-template-columns:repeat(2, minmax(240px,1fr)); }
  .lx2-title{ white-space:normal; }
}
@media (max-width: 520px){
  .lx2-row{ grid-template-columns:1fr; }
}
</style>
