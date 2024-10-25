import { modify } from "../modify/modify.js";
import { save } from "../save/save.js";
import { saveAllLocally } from "../save/saveAllLocally.js";
export function createOkBtn(parentNode){ // Creating OK button after first editing
 
    let button=document.createElement('button');
    button.type='submit';
    button.addEventListener("click", save)
    button.className='save no-more-list'
    button.innerText="OK";
    button.style.backgroundColor="#66CC66";
    parentNode.appendChild(button);
}