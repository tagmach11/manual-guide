/*import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
*/

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  const hasChildren =
    Array.isArray(children) ? children.length > 0 : Boolean(children)

  return (
    <header class="qz-header">
      <nav class="top-nav">
        <a class="brand" href="/">Manual</a>

        <ul class="nav-links">
          <li class="nav-item">
            <a class="nav-btn" href="/intro">소개</a>
          </li>

          <li class="nav-item has-mega">
            <button class="nav-btn" type="button">약속과 책임</button>
            <div class="mega-panel">
              <div class="mega-col">
                <a href="/esg-report" class="mega-link">ESG 보고서</a>
                <a href="/project-dangol" class="mega-link">프로젝트 단골</a>
                <a href="/active-green" class="mega-link">액티브그린</a>
                <a href="/digital-responsibility" class="mega-link">디지털 책임</a>
                <a href="/social-value" class="mega-link">사회경제적 가치</a>
              </div>
              <div class="mega-col highlight">
                <a href="/esg-report" class="card">
                  <div class="thumb"></div>
                  <div class="card-title">ESG 보고서</div>
                  <div class="card-desc">지속가능한 미래를 위한 우리의 약속</div>
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item has-mega">
  <button class="nav-btn" type="button">사이트</button>
  <div class="mega-panel">
    <div class="mega-col">
      <a href="/_etc/사이트/게시판-공지사항/" class="mega-link">게시판 공지사항</a>
      <a href="/_etc/사이트/게시판-자료실/" class="mega-link">게시판 자료실</a>
      <a href="/_etc/사이트/메뉴관리/" class="mega-link">메뉴관리</a>
      <a href="/_etc/사이트/메인화면표시-마이크로링크/" class="mega-link">메인화면표시(마이크로링크)</a>
    </div>
    <div class="mega-col highlight">
      <a href="/_etc/사이트/" class="card">
        <div class="thumb"></div>
        <div class="card-title">사이트 전체보기</div>
        <div class="card-desc">사이트 매뉴얼 모음</div>
      </a>
    </div>
  </div>
</li>
        </ul>
      </nav>

      {hasChildren && <div class="header-slot">{children}</div>}
    </header>
  )
}

Header.css = `
.qz-header, .qz-header * { box-sizing: border-box; }
.qz-header { position: relative; z-index: 100; }
body { overflow: visible; } /* 드롭다운 잘림 방지 */

/* 상단 네비게이션 바 */
.top-nav{
  position: sticky; top: 0; z-index: 110;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 12px 20px; background: #fff; border-bottom: 1px solid #eceef3;
}
.top-nav .brand{ font-weight: 700; font-size: 1.2rem; color: #111; text-decoration: none; }
.nav-links{ display: flex; gap: 8px; list-style: none; margin: 0; padding: 0; }
.nav-item{ position: relative; }
.nav-btn{
  appearance: none; background: transparent; border: 0; cursor: pointer;
  padding: 10px 14px; border-radius: 999px; font-weight: 600; color: #222; text-decoration: none;
}
.nav-btn:hover{ background: #f2f4f8; }

/* 메가 드롭다운 */
.has-mega .mega-panel{
  position: absolute; left: 50%; transform: translateX(-50%);
  top: calc(100% + 10px); display: none;
  width: min(920px, 90vw);
  background: #fff; border: 1px solid #e9edf5; border-radius: 18px;
  box-shadow: 0 16px 40px rgba(16,24,40,.12);
  padding: 18px; gap: 18px;
}
.has-mega:hover > .mega-panel{ display: flex; } /* 데스크톱에서 hover로 오픈 */

.mega-panel{ display: flex; }
.mega-col{ flex: 1; min-width: 280px; }
.mega-col.highlight{ flex: 1.4; display: flex; align-items: center; }

.mega-link{
  display: block; padding: 10px 12px; border-radius: 10px;
  color: #111; text-decoration: none; font-weight: 600;
}
.mega-link:hover{ background: #f5f7fb; }

/* 우측 카드 */
.card{
  display: block; width: 100%; text-decoration: none; color: inherit;
  border: 1px solid #e9edf5; border-radius: 18px; padding: 14px;
  box-shadow: 0 8px 24px rgba(16,24,40,.08);
  transition: transform .12s ease, box-shadow .12s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow: 0 16px 36px rgba(16,24,40,.12); }
.thumb{ width: 100%; height: 140px; border-radius: 12px; background: #eef3ff; margin-bottom: 12px; }
.card-title{ font-weight: 700; margin-bottom: 4px; }
.card-desc{ color: #556070; font-size: .95rem; }

.header-slot{ margin-top: 12px; }

@media (max-width: 860px){
  .has-mega:hover > .mega-panel{ display: none; } /* 모바일 hover 비활성화 */
}
`

export default (() => Header) satisfies QuartzComponentConstructor
