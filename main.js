var lastScrollTop = 0

window.addEventListener(
  'scroll',
  function() {
    var st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
      document.getElementsByClassName('fixed')[0].style.top = '-10%'
    } else if (st < 1000) {
      document.getElementsByClassName('fixed')[0].style.top = '0'
      document.getElementsByClassName('fixed')[0].style.background = ''
      // document.getElementsByClassName('fixed')[0].style.boxShadow ="0 0 25px rgba(40, 47, 60, 0.05),
      //   0 20px 25px rgba(40, 47, 60, 0.05), 0 3px 4px rgba(40, 47, 60, 0.05)"
    } else {
      document.getElementsByClassName('fixed')[0].style.top = '0'
      document.getElementsByClassName('fixed')[0].style.background =
        'transparent'
    }
    lastScrollTop = st
  },
  false
)
