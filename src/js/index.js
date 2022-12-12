
import {valid} from './valid'; /////// экспортируем модули
import {setTotal} from './setTotal';
import {openModal} from './openModal';
import {mainRender} from './mainRender';
import {render} from './render';
import {changeDeleteTask} from './changeDeleteTask';


let state = []   /////// создали наше хранилище с тасками

/////// по порядку вызываем наши функции

mainRender(state);
render(state);
valid(state ,render , setTotal)
setTotal(state)
openModal()
changeDeleteTask(state, render, setTotal)




