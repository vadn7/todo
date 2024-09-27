import { barrer } from "../done/done.js";

import { createBtnModify} from "../create/createBtnModify.js";

import { createBtnDelete } from "../create/createBtnDelete.js";

export function createOldList(oneList, boxState) { // Creating a list
 
    let container=document.createElement('div');
         container.className="listes";
    
    let box=document.createElement('input');
    box.type='checkbox';
    box.className='boxx old-box';
    box.checked=boxState;
    box.addEventListener("change", barrer)

let  phrase=document.createElement('span');
    phrase.className='checks';
    phrase.textContent=oneList;


container.appendChild(box);

container.appendChild(phrase);

createBtnModify(container);

createBtnDelete(container);

document.body.appendChild(container); 

} 