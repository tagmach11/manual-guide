document.addEventListener("nav", () => {
  const backButton = document.getElementById("back-btn")
  if (!backButton) return

  // 중복 이벤트 방지를 위해 기존 리스너 제거
  const newButton = backButton.cloneNode(true) as HTMLElement
  backButton.parentNode?.replaceChild(newButton, backButton)

  newButton.addEventListener("click", (e) => {
    e.preventDefault()

    // Quartz SPA 네비게이션 확인 및 사용
    if (window.spaNavigate && typeof window.spaNavigate === "function") {
      // SPA 라우터가 있으면 history.back()을 호출하고
      // popstate 이벤트가 자동으로 SPA 네비게이션 처리
      if (window.history.length > 1) {
        window.history.back()
      } else {
        // 히스토리 없으면 홈으로
        window.spaNavigate(new URL("/", window.location.origin))
      }
    } else {
      // Fallback: 일반 브라우저 네비게이션
      if (window.history.length > 1) {
        window.history.back()
      } else {
        window.location.href = "/"
      }
    }
  })
})
