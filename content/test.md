---
title: LX2 Hero
cssclass: lx2-hero-page
---
<div class="o-deck" id="deck-1">
  <div class="viewport">
    <section class="slide" id="s1">
      <img src="slide_1.png" alt="Slide 1">
    </section>
    <section class="slide" id="s2">
      <img src="slide_2.png" alt="Slide 2">
    </section>
    <section class="slide" id="s3">
      <img src="slide_3.png" alt="Slide 3">
    </section>
  </div>

  <!-- 좌/우 버튼 세트 (슬라이드별 표시) -->
  <!-- s1일 때: prev -> s3, next -> s2 -->
  <a class="nav prev for-1" href="#s3" aria-label="Prev">&#8249;</a>
  <a class="nav next for-1" href="#s2" aria-label="Next">&#8250;</a>
  <!-- s2일 때 -->
  <a class="nav prev for-2" href="#s1" aria-label="Prev">&#8249;</a>
  <a class="nav next for-2" href="#s3" aria-label="Next">&#8250;</a>
  <!-- s3일 때 -->
  <a class="nav prev for-3" href="#s2" aria-label="Prev">&#8249;</a>
  <a class="nav next for-3" href="#s1" aria-label="Next">&#8250;</a>

  <!-- 지점 표시 -->
  <nav class="dots">
    <a href="#s1" aria-label="Go to slide 1"></a>
    <a href="#s2" aria-label="Go to slide 2"></a>
    <a href="#s3" aria-label="Go to slide 3"></a>
  </nav>
</div>
