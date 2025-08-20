/**
 * Explorer → iOS 홈화면 느낌
 * - 폴더/파일 앞에 아이콘(둥근 정사각)
 * - 폴더 열면 내부를 "앱 아이콘 그리드"로 렌더
 * - .md 확장자 글자에서는 제거
 * - 각 항목 색은 이름 기반 해시 → 고정된 색감
 */
(function () {
  function initIOSExplorer() {
    const root = document.querySelector('.explorer');
    if (!root || root.classList.contains('ios-ready')) return;
    root.classList.add('q-explorer', 'ios', 'ios-ready');

    // 각 행(Quartz 버전에 따라 가능한 후보를 모두 커버)
    const rows = root.querySelectorAll('[role="treeitem"], .item, .node, li');
    rows.forEach((row) => {
      if (row.dataset.qEnhanced) return;

      // 라벨 후보
      const labelEl = row.querySelector('a, .label, span') || row;
      const raw = (labelEl.textContent || '').trim();
      const text = raw.replace(/\.md$/i, '');

      // 파일인지 폴더인지 판단
      const isFolder =
        row.getAttribute('aria-expanded') != null ||
        row.classList.contains('folder') ||
        (row.nextElementSibling &&
          (row.nextElementSibling.classList?.contains('children') ||
           row.nextElementSibling.tagName === 'UL')) ||
        !!row.querySelector('ul');

      // 아이콘/캐럿/라벨 구성
      const caret = document.createElement('span');
      caret.className = 'ios-caret';
      const icon = document.createElement('span');
      icon.className = 'ios-icon';
      icon.textContent = pickGlyph(text); // 첫 글자/이모지

      const label = labelEl; // 기존 라벨 재사용
      label.classList.add('ios-label');
      label.textContent = text;

      // 행 클래스 & 색상 고정용 CSS 변수
      row.classList.add('q-item', isFolder ? 'q-folder' : 'q-file');
      row.style.setProperty('--h', String(hashHue(text))); // 0~359

      // 앞쪽에 순서대로 삽입
      row.prepend(icon);
      if (isFolder) row.prepend(caret);

      // 폴더의 자식 컨테이너 찾기
      const kids = row.nextElementSibling &&
                   (row.nextElementSibling.classList?.contains('children') ||
                    row.nextElementSibling.tagName === 'UL')
                    ? row.nextElementSibling : null;
      if (kids) kids.classList.add('ios-children');

      // 펼침 상태 적용(기본 열림)
      const opened = row.getAttribute('aria-expanded') === 'true';
      if (opened) {
        row.classList.add('is-open');
        if (kids) kids.classList.add('open');
      }

      // 폴더 토글: 행 클릭(링크 클릭은 통과)
      if (isFolder) {
        row.addEventListener('click', (e) => {
          if (e.target.closest('a')) return; // 링크는 그대로
          e.preventDefault();
          const now = row.classList.toggle('is-open');
          if (kids) kids.classList.toggle('open', now);
        }, { capture: true });
      }

      row.dataset.qEnhanced = '1';
    });
  }

  function pickGlyph(t) {
    // 이모지가 있으면 첫 이모지 사용
    const m = t.match(/([\p{Emoji_Presentation}\p{Extended_Pictographic}])/u);
    if (m) return m[1];
    // 아니면 첫 글자(영문 대문자/그 외 그대로)
    const ch = t.trim().charAt(0);
    return (/[a-z]/i.test(ch) ? ch.toUpperCase() : ch) || '•';
  }

  function hashHue(t) {
    let h = 0;
    for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
    return h % 360; // 0~359
  }

  // 초기 + 클라이언트 네비게이션 대응
  document.addEventListener('DOMContentLoaded', initIOSExplorer);
  const mo = new MutationObserver(initIOSExplorer);
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
a