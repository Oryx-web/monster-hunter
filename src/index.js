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