import { save } from "../save/save.js";
import { saveAllLocally } from "../save/saveAllLocally.js";
export function createOkBtn(parentNode){ // Creating OK button after first editing
 
    let button=document.createElement('button');
    button.type='submit';
    button.addEventListener("click", save)
    button.className='save'
    button.innerText="OK";
    button.className="no-more-list";
   parentNode.appendChild(button);

}