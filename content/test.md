<div class="lx2-slider">
  <!-- 슬라이드 선택 (라디오) -->
  <input type="radio" name="lx2" id="lx2-s1" checked>
  <input type="radio" name="lx2" id="lx2-s2">
  <input type="radio" name="lx2" id="lx2-s3">
  <input type="radio" name="lx2" id="lx2-s4">

  <!-- 상단 제목 -->
  <div class="lx2-caption">
    <span class="title t1">대시보드</span>
    <span class="title t2">페이지뷰</span>
    <span class="title t3">통계뷰</span>
    <span class="title t4">사용자 현황</span>
  </div>

  <!-- 뷰포트/트랙 -->
  <div class="lx2-viewport">
    <div class="lx2-track">
      <figure class="lx2-slide">
        <img src="https://picsum.photos/560/320?random=11" alt="대시보드">
      </figure>
      <figure class="lx2-slide">
        <img src="https://picsum.photos/560/320?random=12" alt="페이지뷰">
      </figure>
      <figure class="lx2-slide">
        <img src="https://picsum.photos/560/320?random=13" alt="통계뷰">
      </figure>
      <figure class="lx2-slide">
        <img src="https://picsum.photos/560/320?random=14" alt="사용자 현황">
      </figure>
    </div>
  </div>

  <!-- 좌우 화살표 (딱 2개만 보이도록 제어됨) -->
  <div class="lx2-arrows">
    <!-- s1 일 때 보이는 prev/next -->
    <label class="prev" for="lx2-s4" aria-label="이전">‹</label>
    <label class="next" for="lx2-s2" aria-label="다음">›</label>

    <!-- s2 -->
    <label class="prev" for="lx2-s1" aria-label="이전">‹</label>
    <label class="next" for="lx2-s3" aria-label="다음">›</label>

    <!-- s3 -->
    <label class="prev" for="lx2-s2" aria-label="이전">‹</label>
    <label class="next" for="lx2-s4" aria-label="다음">›</label>

    <!-- s4 -->
    <label class="prev" for="lx2-s3" aria-label="이전">‹</label>
    <label class="next" for="lx2-s1" aria-label="다음">›</label>
  </div>

  <!-- 도트 -->
  <div class="lx2-dots">
    <label for="lx2-s1" aria-label="1번"></label>
    <label for="lx2-s2" aria-label="2번"></label>
    <label for="lx2-s3" aria-label="3번"></label>
    <label for="lx2-s4" aria-label="4번"></label>
  </div>
</div>


