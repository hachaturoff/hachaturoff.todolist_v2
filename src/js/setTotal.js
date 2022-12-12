export function setTotal (state) { ///////// отросвка счётчика

    document.querySelector('.total-all-num').textContent = state.filter(task => task.done !== true && task.inProgress !== true).length

    document.querySelector('.total-complete-num').textContent = state.filter(task => task.inProgress === true).length

    document.querySelector('.total-done-num').textContent = state.filter(task => task.done === true).length

}