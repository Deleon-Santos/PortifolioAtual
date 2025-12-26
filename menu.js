export function initMenu() {
  const toggle = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.nav')

  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
  })
}
