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
    

      {hasChildren && <div class="header-slot">{children}</div>}
    </header>
  )
}

Header.css = `
.qz-header, .qz-header * { box-sizing: border-box; }

/* 헤더 자체를 독립 쌓임맥락으로 만들어 블러 영향 안 받게 */
.qz-header {
  position: relative;
  z-index: 1       /* 크게 */
 
}

body { overflow: visible; } /* 드롭다운 잘림 방지 */

/* 상단 네비게이션 바 */
.top-nav{
  position: sticky; 
  top: 0;
  z-index:2;      /* 헤더보다 위 */
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 12px 20px;
  background: #fff;
  border-bottom: 1px solid #eceef3;
}
.top-nav .brand{
  font-weight: 700; font-size: 1.2rem; color: #111; text-decoration: none;
}
.nav-links{ display: flex; gap: 8px; list-style: none; margin: 0; padding: 0; }
.nav-item{ position: relative; }
.nav-btn{
  appearance: none; background: transparent; border: 0; cursor: pointer;
  padding: 10px 14px; border-radius: 999px; font-weight: 600; color: #222; text-decoration: none;
  transition: background .15s ease;
}
.nav-btn:hover{ background: #f2f4f8; }

/* 메가 드롭다운 */
.has-mega .mega-panel{
  position: absolute; left: 50%; transform: translateX(-50%);
  top: calc(100% + 10px);
  display: none;
  width: min(920px, 90vw);
  background: #fff; border: 1px solid #e9edf5; border-radius: 18px;
  box-shadow: 0 16px 40px rgba(16,24,40,.12);
  padding: 18px; gap: 18px;
  z-index: 3;        /* 네비보다 한 단계 위 */
}
.has-mega:hover > .mega-panel{ display: flex; }

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

/* 모바일에서 hover 비활성화 */
@media (max-width: 860px){
  .has-mega:hover > .mega-panel{ display: none; }
  .has-mega.open > .mega-panel{ display: flex; }

}


`


export default (() => Header) satisfies QuartzComponentConstructor
