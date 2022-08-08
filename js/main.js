'use strict'



// let mqMin = window.matchMedia("(min-width: 640px)")
// window.onresize = function () {
//     if (mqMin.matches) {
//         console.log('ok')
//         elNav.classList.toggle('open')
//         console.log(elNav)
//     }
//   }

function navOpen() {
        const elSvg = document.querySelector('.dropdown-btn')
        elSvg.classList.toggle('nav-is-open')
        const elNav = document.querySelector('.main-nav-list')
        elNav.classList.toggle('open')
        console.log(elNav)
}
