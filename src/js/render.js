import {saveLocalStorage} from "./saveLocalStorage";
import {getHtmlTask} from "./getHtmlTask";
import {dateTime} from "./dateTime";

export function render(state) {

    function renderMakeTask (state) {  //////// создаём функцию которая рисует задачи в колонке MAKE
        let makeTaskList = document.querySelector('.make-tasks-list')
        makeTaskList.innerHTML = ''  //////// чистим вёртску дива с таксками

        let makeState = state.filter(task => { if (task.done === false && task.inProgress === false ) { //////// условие при ктором рисуются таски подходящие по условию

            let todo = document.createElement("div") //////// создаём новый див , обёртку для таски
            todo.innerHTML = getHtmlTask(task, 'make') //////// наполняем див , версткой для такски
            makeTaskList.append(todo) //////// присваеваем нашу таску как дочений элемент блоку с тасками
        }

        })
        return makeState //////// возвращаем отсотированный массив

    }
    renderMakeTask(state)

    function renderProgressTask (state) {
        let progTaskList = document.querySelector('.progress-tasks-list')
        progTaskList.innerHTML = ''

        let progressState = state.filter(task => { if (task.inProgress === true) {

            let todo = document.createElement("div")
            todo.innerHTML = getHtmlTask(task, 'progress')
            progTaskList.append(todo)
        }

        })
        return progressState

    }
    renderProgressTask(state)


    function renderDoneTask (state) {
        let doneTaskList = document.querySelector('.done-tasks-list')
        doneTaskList.innerHTML = ''
        let doneState = state.filter(task => { if (task.done === true) {

            let todo = document.createElement("div")
            todo.innerHTML = getHtmlTask(task, 'done')
            doneTaskList.append(todo)
        }

        })
        return doneState

    }
    renderDoneTask(state)

    saveLocalStorage(state)

    dateTime()
}