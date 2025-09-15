---
title: LX2 Hero
cssclass: lx2-hero-page
---
<div class="obs-slider">

  <!-- 상태 라디오 -->
  <input type="radio" name="obslide" id="os-s1" checked>
  <input type="radio" name="obslide" id="os-s2">
  <input type="radio" name="obslide" id="os-s3">

  <div class="viewport">
    <div class="track">
      <figure class="panel"><img src="slide_1.png" alt="Slide 1"></figure>
      <figure class="panel"><img src="slide_2.png" alt="Slide 2"></figure>
      <figure class="panel"><img src="slide_3.png" alt="Slide 3"></figure>
    </div>

    <!-- 좌/우 버튼(흰색 + 검정 >) -->
    <!-- s1일 때 보여줄 버튼: prev→s3, next→s2 -->
    <label for="os-s3" class="nav prev for-1" aria-label="Prev">&#8249;</label>
    <label for="os-s2" class="nav next for-1" aria-label="Next">&#8250;</label>

    <!-- s2일 때 -->
    <label for="os-s1" class="nav prev for-2" aria-label="Prev">&#8249;</label>
    <label for="os-s3" class="nav next for-2" aria-label="Next">&#8250;</label>

    <!-- s3일 때 -->
    <label for="os-s2" class="nav prev for-3" aria-label="Prev">&#8249;</label>
    <label for="os-s1" class="nav next for-3" aria-label="Next">&#8250;</label>

    <!-- 지점(dot) -->
    <div class="dots">
      <label for="os-s1" aria-label="Go to slide 1"></label>
      <label for="os-s2" aria-label="Go to slide 2"></label>
      <label for="os-s3" aria-label="Go to slide 3"></label>
    </div>
  </div>
</div>
