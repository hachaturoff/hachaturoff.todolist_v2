
export function changeDeleteTask(state, render, setTotal ) { /////// функция которая удаляет и пернесоит таски

    let toDoList = document.querySelector('.todo-list') /////// обращаемся к div , области где находяться все такси

    toDoList.addEventListener('click' , (event) => { /////// вешаем обработчик событий нашу область , див , по клику

        ////// удаление по калонкам

        let target = event.target ////// присваем переменной таргет что бы проще обращаться

        if ( target.className === 'img-make-delete') { /////// условие при котором , у облости где мы нажали есть класс с именеем 'img-make-delete' , выаполняется

            let newState = state.filter((item) => item.inProgress !== false && item.done !== false) /////// создаем новый отфильтрованный массив
            localStorage.clear() /////// чистим локальное хранилище
            state = [] ///////  чистим массив с тксвами
            state = newState /////// наполняем массив отфильтрованными тасками
        }

        if ( target.className === 'img-prog-delete') {

            let newState = state.filter((item) => item.inProgress !== true)
            localStorage.clear()
            state = []
            state = newState
        }

        if ( target.className === 'img-done-delete') {

            let newState = state.filter((item) => item.done !== true)
            localStorage.clear()
            state = []
            state = newState
        }

        ////// замена либо удаление по одной таске

        if (target.className === 'option-done-btn') {
            let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent ////// обращаемсья к родительскому элементу нашей таски и ищем имя задача
            state.forEach((item) => { ////// перебираем массив и отсавляем в массиве только те такси которые подходят по условию
                if (item.task === taskName) {
                    item.inProgress = false
                    item.done = true
                }
            })
        }

        if (target.className === 'option-progress-btn') {
            let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent
            state.forEach((item) => {
                if (item.task === taskName) {
                    item.done = false
                    item.inProgress = true
                }
            })
        }
        if (target.className === 'option-make-btn') {
            let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent
            state.forEach((item) => {
                if (item.task === taskName) {
                    item.done = false
                    item.inProgress = false
                }
            })
        }
        if (target.className === 'option-delete-img') {
            let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent
            let newState = state.filter((item) => item.task !== taskName)
            localStorage.clear()
            state = []
            state = newState
        }


        render(state)
        setTotal(state)
    })
}