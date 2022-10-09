function darkMode() {
    document.body.classList.toggle('dark-mode')
    document.getElementById('navbar').classList.toggle('dark-mode-bgred')
    document.getElementById('title-logo').classList.toggle('dark-mode-colblack')
    let menuText = document.getElementsByClassName('nav-link')
    for (let index = 0; index < menuText.length; index++) {
        const element = menuText[index];
        element.classList.toggle('dark-mode-colblack')
    }
    document.getElementById('footer').classList.toggle('dark-mode-bgred')
    document.querySelector('address').classList.toggle('dark-mode-colblack')
}