export function getHtmlTask(prop , nameColumn) {  //////// возвращаем определённую вёрстку по условию

    if ( nameColumn === 'make') {
        return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">

                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>

                    </div>
                    <hr>
                    <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`
    }
    if (nameColumn === 'done') {

        return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`
    }
    if (nameColumn === 'progress') {

        return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          <button class="option-make-btn">MAKE</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`
    }
}