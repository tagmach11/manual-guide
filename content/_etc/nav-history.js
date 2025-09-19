(function(){
  function $(sel, root=document){ return root.querySelector(sel); }
  function bind(){
    const back = $('.nav-history [data-action="back"]');
    const fwd  = $('.nav-history [data-action="forward"]');
    if(back){
      back.addEventListener('click', (e)=>{
        e.preventDefault();
        if(history.length > 1) history.back();
        else location.assign('/'); // 히스토리 없으면 홈으로
      });
    }
    if(fwd){
      fwd.addEventListener('click', (e)=>{ e.preventDefault(); history.forward(); });
    }
    // Alt+← / Alt+→ 단축키
    window.addEventListener('keydown', (e)=>{
      if(e.altKey && !e.shiftKey){
        if(e.key === 'ArrowLeft'){ e.preventDefault(); if(history.length>1) history.back(); }
        if(e.key === 'ArrowRight'){ e.preventDefault(); history.forward(); }
      }
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
