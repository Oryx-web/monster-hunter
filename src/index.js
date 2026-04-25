document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
})

function navegacionFija() {
    const header = document.querySelector('#header')
    const content = document.querySelector('#content')

    document.addEventListener('scroll', function(){
        if(content.getBoundingClientRect().bottom <= 0) {
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })
}

document.getElementById("noscroll").addEventListener('mouseenter', () => {
  // Use { passive: false } to allow preventDefault()
  window.addEventListener('wheel', preventDefault, { passive: false });
});

document.getElementById("noscroll").addEventListener('mouseleave', () => {
  window.removeEventListener('wheel', preventDefault);
});