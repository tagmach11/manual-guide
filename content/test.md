---
title: LX2 랜딩
cssclass: lx2-landing
---

# 통합 학습관리시스템 LX2

<section class="lx2-cards">
  <a class="lx2-card" href="#">
    <span class="ico">🎓</span>
    <span class="text">
      <span class="ttl">최적의 학습 경험</span>
      <span class="sub">EDUCATION</span>
    </span>
  </a>
  <a class="lx2-card" href="#">
    <span class="ico">📶</span>
    <span class="text">
      <span class="ttl">검증된 기술</span>
      <span class="sub">TECHNOLOGY</span>
    </span>
  </a>
  <a class="lx2-card" href="#">
    <span class="ico">⚡</span>
    <span class="text">
      <span class="ttl">압도적 가성비</span>
      <span class="sub">EFFICIENCY</span>
    </span>
  </a>
  <a class="lx2-card" href="#">
    <span class="ico">🔒</span>
    <span class="text">
      <span class="ttl">가장 안정적인 시스템</span>
      <span class="sub">SECURITY</span>
    </span>
  </a>
</section>

<p class="lx2-cta"><a class="btn" href="#">자세히보기</a></p>

<style>
/* Quartz 4.5용 최소 스타일 (다크/라이트 자동 호환) */
.lx2-landing h1{white-space:nowrap;letter-spacing:.3px;margin:0 0 20px;}
.lx2-landing .lx2-cards{
  display:grid;gap:16px;
  grid-template-columns:repeat(4,minmax(0,1fr));
}
.lx2-landing .lx2-card{
  display:flex;align-items:center;gap:14px;
  padding:18px 20px;border:1px solid var(--qz-border,rgba(15,23,42,.12));
  border-radius:16px;background:rgba(255,255,255,.6);
  backdrop-filter:saturate(140%) blur(2px); text-decoration:none;
}
.theme-dark .lx2-landing .lx2-card{background:rgba(2,6,23,.35);}
.lx2-landing .ico{
  width:56px;height:56px;display:grid;place-items:center;
  font-size:28px;border-radius:14px;background:rgba(0,0,0,.06)
}
.theme-dark .lx2-landing .ico{background:rgba(255,255,255,.08);}
.lx2-landing .text{display:flex;flex-direction:column;line-height:1.15}
.lx2-landing .ttl{font-weight:800;font-size:1.05rem}
.lx2-landing .sub{font-size:.8rem;opacity:.72;margin-top:2px}
.lx2-landing .lx2-cta{margin-top:18px}
.lx2-landing .btn{
  display:inline-block;padding:12px 18px;border-radius:12px;
  border:1px solid var(--qz-border,rgba(15,23,42,.12)); text-decoration:none
}
@media (max-width: 900px){
  .lx2-landing .lx2-cards{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media (max-width: 520px){
  .lx2-landing .lx2-cards{grid-template-columns:1fr;}
  .lx2-landing h1{font-size:1.6rem;}
}
</style>
