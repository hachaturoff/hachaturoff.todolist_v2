export function saveLocalStorage(state) {

    state.forEach( (todo,index) => {
        localStorage.setItem( `todo #${index + 1}` , JSON.stringify(todo)) ///// сохраняем в json формате в локальном зранилище нащи таски
    })

}
