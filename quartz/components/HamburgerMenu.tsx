import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface Options {
  title: string
}

const defaultOptions: Options = {
  title: "메뉴",
}

export default ((opts?: Partial<Options>) => {
  const options = { ...defaultOptions, ...opts }
  
  const HamburgerMenu: QuartzComponent = () => {
    return (
      <>
        <div class="hamburger-menu-container">
          <button 
            class="hamburger-menu-toggle" 
            id="hamburger-toggle"
            aria-label="메뉴 열기/닫기"
            aria-expanded="false"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          
          <div class="hamburger-menu-overlay" id="hamburger-overlay">
            <nav class="hamburger-menu-nav" id="hamburger-nav">
              <div class="hamburger-menu-header">
                <h2>{options.title}</h2>
                <button 
                  class="hamburger-menu-close" 
                  id="hamburger-close"
                  aria-label="메뉴 닫기"
                >
                  <span class="hamburger-line"></span>
                  <span class="hamburger-line"></span>
                  <span class="hamburger-line"></span>
                </button>
              </div>
              
              <div class="hamburger-menu-content">
                <ul class="hamburger-menu-list">
                  <li><a href="/" class="hamburger-menu-item">홈</a></li>
                  <li><a href="/1.-회원" class="hamburger-menu-item">회원</a></li>
                  <li><a href="/2.-과정" class="hamburger-menu-item">과정</a></li>
                  <li><a href="/3.-콘텐츠" class="hamburger-menu-item">콘텐츠</a></li>
                  <li><a href="/4.-사이트" class="hamburger-menu-item">사이트</a></li>
                  <li><a href="/5.-서비스" class="hamburger-menu-item">서비스</a></li>
                  <li><a href="/6.-시설" class="hamburger-menu-item">시설</a></li>
                  <li><a href="/7.-주문결제" class="hamburger-menu-item">주문결제</a></li>
                  <li><a href="/8.-통계" class="hamburger-menu-item">통계</a></li>
                  <li><a href="/9.-설정" class="hamburger-menu-item">설정</a></li>
                  <li><a href="/10.시스템" class="hamburger-menu-item">시스템</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Inline script for hamburger menu functionality */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              'use strict';
              
              function initHamburgerMenu() {
                const toggle = document.getElementById('hamburger-toggle');
                const overlay = document.getElementById('hamburger-overlay');
                const nav = document.getElementById('hamburger-nav');
                const close = document.getElementById('hamburger-close');
                const menuItems = document.querySelectorAll('.hamburger-menu-item');
                
                if (!toggle || !overlay || !nav) {
                  setTimeout(initHamburgerMenu, 100);
                  return;
                }
                
                const currentPath = window.location.pathname;
                
                // 현재 페이지 메뉴 아이템 활성화
                menuItems.forEach(item => {
                  const href = item.getAttribute('href');
                  if (!href) return;
                  
                  // 정확한 경로 매칭 또는 .html 확장자 포함 매칭
                  if (href === currentPath || href + '.html' === currentPath || href === currentPath.replace('.html', '')) {
                    item.classList.add('active');
                  }
                  // 홈페이지 체크 (/ 또는 /index.html)
                  else if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
                    item.classList.add('active');
                  }
                });
                
                function openMenu() {
                  toggle.classList.add('active');
                  overlay.classList.add('active');
                  toggle.setAttribute('aria-expanded', 'true');
                  document.body.style.overflow = 'hidden';
                  
                  const focusableElements = nav.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
                  if (focusableElements.length > 0) {
                    focusableElements[0].focus();
                  }
                }
                
                function closeMenu() {
                  toggle.classList.remove('active');
                  overlay.classList.remove('active');
                  toggle.setAttribute('aria-expanded', 'false');
                  document.body.style.overflow = '';
                  toggle.focus();
                }
                
                toggle.addEventListener('click', function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  if (toggle.classList.contains('active')) {
                    closeMenu();
                  } else {
                    openMenu();
                  }
                });
                
                if (close) {
                  close.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                  });
                }
                
                overlay.addEventListener('click', function(e) {
                  if (e.target === overlay) {
                    closeMenu();
                  }
                });
                
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Escape' && overlay.classList.contains('active')) {
                    closeMenu();
                  }
                });
                
                menuItems.forEach(item => {
                  item.addEventListener('click', function() {
                    // 메뉴 클릭 시 항상 닫기 (SPA 네비게이션이 처리)
                    setTimeout(closeMenu, 150);
                  });
                });
                
                window.addEventListener('resize', function() {
                  if (window.innerWidth > 768 && overlay.classList.contains('active')) {
                    closeMenu();
                  }
                });
                
                let startX = 0;
                let startY = 0;
                
                nav.addEventListener('touchstart', function(e) {
                  startX = e.touches[0].clientX;
                  startY = e.touches[0].clientY;
                });
                
                nav.addEventListener('touchmove', function(e) {
                  if (!overlay.classList.contains('active')) return;
                  
                  const currentX = e.touches[0].clientX;
                  const currentY = e.touches[0].clientY;
                  const diffX = startX - currentX;
                  const diffY = startY - currentY;
                  
                  if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
                    closeMenu();
                  }
                });
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initHamburgerMenu);
              } else {
                initHamburgerMenu();
              }
            })();
          `
        }} />
      </>
    )
  }

  return HamburgerMenu
}) satisfies QuartzComponentConstructor

