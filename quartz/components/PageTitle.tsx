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

      {/* 뒤/앞 버튼 (데이터 속성만) */}
      <nav class="nav-history" aria-label="히스토리 탐색">
        <button class="nav-btn" data-action="back"   type="button" aria-label="뒤로 (Alt+←)" title="뒤로">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="nav-btn" data-action="forward" type="button" aria-label="앞으로 (Alt+→)" title="앞으로">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </nav>

      {/* 여기서 정적 JS 파일을 로드 (같은 /_etc 경로) */}
      <script defer src="/_etc/nav-history.js"></script>
    </div>
  )
}

PageTitle.css = `
.page-title-row{ display:flex; align-items:center; gap:12px; }
.page-title{ font-size:1.75rem; margin:0; font-family:var(--titleFont); }
.nav-history{ display:inline-flex; gap:8px; }
.nav-btn{ inline-size:36px; block-size:36px; display:inline-grid; place-items:center;
  border:1px solid var(--x-border, #e7eaf2); background:var(--x-bg, #fff); color:var(--x-text, #0f1116);
  border-radius:10px; box-shadow:0 2px 6px rgba(16,24,40,.06) }
.nav-btn svg{ width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round }
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
