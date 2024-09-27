import { save } from "../save/save.js";
import { barrer } from "../done/done.js";
export function createNewList() { // Creating a list
 
    let container=document.createElement('div');
    container.className="listes";
    let box=document.createElement('input');
    box.type='checkbox';
    box.className='boxx';
    box.addEventListener("change", barrer)

    let text=document.createElement('input')
    text.type='text';
    text.className='text';

let  phrase=document.createElement('span');
    phrase.className='checks';

let button=document.createElement('button');
   button.type='submit';
   button.addEventListener("click", save)
   button.className='save'
   button.innerText="OK";

container.appendChild(box);

container.appendChild(text);

container.appendChild(phrase);

container.appendChild(button);

document.body.appendChild(container);
}