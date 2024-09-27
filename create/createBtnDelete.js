import { deletE } from "../delete/delete.js";
export function createBtnDelete(parentNode){
 
    let button=document.createElement('button');
    button.type='submit';
    button.addEventListener("click", deletE)
    button.className='delete'
    button.innerText="Delete";
   parentNode.appendChild(button);
    }