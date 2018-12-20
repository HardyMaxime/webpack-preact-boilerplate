(function () {
  /* Navbar responsive */
  let button = document.querySelector('#menu-responsive')

  let body = document.body
  let sidebarOpened = false

  button.addEventListener('click', e => {
    e.stopPropagation()
    e.preventDefault()

    if (body.classList.contains('with--sidebar')) {
      body.classList.remove('with--sidebar')
      sidebarOpened = false
    } else {
      body.classList.add('with--sidebar')
      sidebarOpened = true
    }
  })

  body.addEventListener('click', e => {
    if (sidebarOpened) {
      body.classList.remove('with--sidebar')
    }
  })
})()
