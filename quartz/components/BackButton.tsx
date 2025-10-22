// @ts-ignore
import script from "./scripts/backbutton.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backbutton.scss"

const BackButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`back-button ${displayClass ?? ""}`}>
      <button 
        type="button"
        id="back-btn"
        class="back-btn"
        aria-label="뒤로가기"
      >
        ← 뒤로가기
      </button>
    </div>
  )
}

BackButton.beforeDOMLoaded = script
BackButton.css = style

export default (() => BackButton) satisfies QuartzComponentConstructor
