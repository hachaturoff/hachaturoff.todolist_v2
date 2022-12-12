export function valid(state, render, setTotal) { //////////// заполнение формы

    let formTask = document.querySelector('form')
    let popWrapper = document.querySelector('.pop-up-wrapper')
    let popUp = document.querySelector('.pop-up')
    let mainTitlePop = document.querySelector('.main-title')

    formTask.addEventListener('submit', (event) => {/////////// вешаем на форму обработчик события "подтверждения формы" по клику
        event.preventDefault()/////////// убираем перезагрузку с формы по клику

        if ( formTask.task.value.length >= 1 && formTask.descr.value.length >= 1 && formTask.author.value.length >= 1) {/////////// волидация , условие

            state.push(/////////// создаем обьект со свойствами нашей таски и пушим его в массив
                {
                    task: formTask.task.value,
                    descr: formTask.descr.value,
                    author: formTask.author.value,
                    inProgress: false,
                    done: false,
                }
            )

            render(state)

            formTask.task.value = ''/////////// обнуляем value формы
            formTask.descr.value = ''
            formTask.author.value = ''

            popUp.classList.add('hide');/////////// закрываем форму удаляя селектор
            popUp.classList.remove('show');
            document.body.style.overflow = 'scroll';

            setTotal(state)

        } else {
            let error = document.createElement("h3")/////////// ошибка если инпуты пустые
            popWrapper.classList.toggle('error')
            error.innerHTML = 'Не все поля заполнены'
            mainTitlePop.append(error)
        }

    })

}