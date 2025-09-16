// PageTitle.tsx
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!) || "/"

  return (
    <div class={classNames(displayClass, "page-title-row")}>
      <h2 class="page-title">
        <a href={baseDir}>
          <img src="/_etc/lx2_logo.png" alt={title} height="33" />
        </a>
      </h2>

      {/* 뒤로/앞으로 */}
      <nav class="nav-history" aria-label="히스토리 탐색">
        <button data-action="back" class="nav-btn" type="button" title="뒤로 (Alt+←)" aria-label="뒤로">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button data-action="forward" class="nav-btn" type="button" title="앞으로 (Alt+→)" aria-label="앞으로">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </nav>

      {/* 정적 사이트에서도 동작하게 이벤트 바인딩 스크립트 */}
      <script>
        {`
          (function(){
            var back = document.querySelector('.nav-history [data-action="back"]');
            var fwd  = document.querySelector('.nav-history [data-action="forward"]');
            if(back){ back.addEventListener('click', function(e){
              e.preventDefault();
              if (history.length > 1) history.back();
              else window.location.href = '${baseDir}';   // 히스토리 없으면 홈으로
            });}
            if(fwd){ fwd.addEventListener('click', function(e){
              e.preventDefault();
              history.forward();
            });}
            // 단축키 Alt+← / Alt+→
            window.addEventListener('keydown', function(e){
              if(e.altKey && !e.shiftKey){
                if(e.key === 'ArrowLeft'){ e.preventDefault(); if(history.length>1) history.back(); }
                if(e.key === 'ArrowRight'){ e.preventDefault(); history.forward(); }
              }
            });
          })();
        `}
      </script>
    </div>
  )
}

PageTitle.css = `
.page-title-row{ display:flex; align-items:center; gap:12px; }
.page-title{ font-size:1.75rem; margin:0; font-family:var(--titleFont); }

.nav-history{ display:inline-flex; gap:8px; }
.nav-btn{
  inline-size:36px; block-size:36px; display:inline-grid; place-items:center;
  border:1px solid var(--x-border, #e7eaf2);
  background: var(--x-bg, #fff);
  color: var(--x-text, #0f1116);
  border-radius:10px;
  box-shadow:0 2px 6px rgba(16,24,40,.06);
  transition: background .15s ease, border-color .15s ease, box-shadow .15s ease, opacity .15s ease;
}
.nav-btn:hover{ background: var(--x-hover, #f5f7fe); }
.nav-btn:active{ background: var(--x-active, #eaf1ff); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--x-accent, #2563eb) 40%, transparent); }
.nav-btn[disabled]{ opacity:.45; cursor:not-allowed; box-shadow:none; }
.nav-btn svg{ width:18px; height:18px; }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
