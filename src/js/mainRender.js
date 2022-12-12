
export function mainRender(state) {  //////// функия которая при загрузке страницы проверяет если есть в локальном хранилище такси , заполняет state

    if (localStorage.length >= 1) { //////// проверяет если есть в локальном хранилище больше 0 задач
        for (let i = 0; i < localStorage.length; i++) { //////// если есть запускает цикл
            let key = localStorage.key(i);
            state.push(JSON.parse(localStorage.getItem(key))) //////// переводи из json формата наши такси и заполняем state
        }
    }
}

