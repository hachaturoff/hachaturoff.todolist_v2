export function openModal() {
    let formTask = document.querySelector('form')
    let openPopBtn = document.querySelector('.option-plus-img')
    let popUp = document.querySelector('.pop-up')
    let closeBtn = document.querySelectorAll('.close-button')


    openPopBtn.addEventListener('click', () => {
        popUp.classList.add('show');
        popUp.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    })


    closeBtn.forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault() //// убираем перезагрузку страницы
            popUp.classList.add('hide');
            popUp.classList.remove('show');
            document.body.style.overflow = 'scroll';
        })

        formTask.task.value = ''
        formTask.descr.value = ''
        formTask.author.value = ''
    })


}