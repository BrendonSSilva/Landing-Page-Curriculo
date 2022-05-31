let d = (e) => document.querySelector(e)
let ds = (e) => document.querySelectorAll(e)
d('.btn-escuro').addEventListener('click', mudarTema)

if(localStorage.getItem('darkMode') === null){
    localStorage.setItem('darkMode', 'true')
}

function check(){
    if(localStorage.getItem('darkMode') === 'false'){
        d('body').style.backgroundColor = '#fff';
        d('.bi-brightness-high-fill').classList.add('displayNone')
        d('.bi-moon-fill').classList.remove('displayNone')
        d('.img1').src = 'img/eu1.jpg'
        d('.img3').src = 'img/eu3.jpg'
        // ds('.modo-escuro').classList.replace('modo-escuro', 'modo-claro')
        ds('.texto-claro, .modo-claro, .navbar-dark, .modo-escuro, .border-claro, .bg-escuro, footer a, hr').forEach((e)=>{
            e.classList.replace('texto-claro', 'texto-escuro')
            e.classList.replace('navbar-dark', 'navbar-light')
            e.classList.replace('border-claro', 'border-escuro')
            e.classList.replace('modo-claro', 'modo-escuro')
            e.classList.replace('modo-escuro', 'modo-claro')
            e.classList.replace('bg-escuro', 'bg-claro')
        })
    }else{
        d('body').style.backgroundColor = '#000';
        d('.bi-brightness-high-fill').classList.remove('displayNone')
        d('.bi-moon-fill').classList.add('displayNone')
        d('.img1').src = 'img/eu1.jpeg'
        d('.img3').src = 'img/eu3.jpeg'
        // ds('.modo-escuro').classList.replace('modo-escuro', 'modo-claro')
        ds('.texto-escuro, .modo-escuro, .navbar-dark, .modo-claro, .border-escuro, .bg-claro, footer a, hr').forEach((e)=>{
            e.classList.replace('texto-escuro', 'texto-claro')
            e.classList.replace('navbar-light', 'navbar-dark')
            e.classList.replace('border-escuro', 'border-claro')
            e.classList.replace('modo-escuro', 'modo-claro')
            e.classList.replace('modo-claro', 'modo-escuro')
            e.classList.replace('bg-claro', 'bg-escuro')
        })
    }
}

function mudarTema() {
    if(localStorage.getItem('darkMode')=== 'false'){
        localStorage.setItem('darkMode', 'true')
    }else{
        localStorage.setItem('darkMode', 'false')
    }
    check()
}
check()