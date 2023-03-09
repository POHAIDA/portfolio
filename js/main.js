const btnDarcMode = document.querySelector('.darc-mode__btn');


// 1.перевірка на рівні системних налаштувань тобто якщо на компютері темна тема то і сайт буде з темною темою

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarcMode.classList.add('darc-mode-btn__active')
    document.body.classList.add('dark')
}



// 2. Перевірка темної теми в localStorage .Якщо (localStorage.getItem('darkMode') === 'dark')
//ми присвоюємо змінній const btnDarcMode клас darc-mode-btn__active в якому ми прописали стилі для темної теми
// елсе if можна і не вказувати бо якщо умова у (localStorage.getItem('darkMode') === 'dark') не вірна просто лишається біла тема

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarcMode.classList.add('darc-mode-btn__active')
    document.body.classList.add('dark')
    localStorage.setItem('darkMode','dark')
}else if (localStorage.getItem('darkMode') === 'light') {
   btnDarcMode.classList.remove('darc-mode-btn__active')
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode','light')
}


//  2 .Увімкнення нічного режиму по кнопці

btnDarcMode.onclick = () => {
    btnDarcMode.classList.toggle('darc-mode-btn__active')

    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode','dark')
    } else {
        localStorage.setItem('darkMode','light')
    }

}



//якщо міняються системні налаштування тема також міняєся

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light'
    
    if (newColorScheme === 'dark') {
        btnDarcMode.classList.add('darc-mode-btn__active')
        document.body.classList.add('dark')
    } else {
        btnDarcMode.classList.remove('darc-mode-btn__active')
        document.body.classList.remove('dark')
    }
})


