import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backbutton.scss"

const BackButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <>
      <div class={`back-button ${displayClass ?? ""}`}>
        <button
          id="back-btn"
          class="back-btn"
          aria-label="뒤로가기"
        >
          ←
        </button>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            'use strict';
            
            function initBackButton() {
              const backBtn = document.getElementById('back-btn');
              
              if (!backBtn) {
                setTimeout(initBackButton, 100);
                return;
              }
              
              backBtn.addEventListener('click', function() {
                history.back();
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initBackButton);
            } else {
              initBackButton();
            }
          })();
        `
      }} />
    </>
  )
}

BackButton.css = style

export default (() => BackButton) satisfies QuartzComponentConstructor


