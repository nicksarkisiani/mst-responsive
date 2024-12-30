window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-fixed');
    if(window.scrollY > 250) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
})