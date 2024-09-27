import { barrer } from "../done/done.js";
export function createCheckBox(parentNode){


    let box=document.createElement('input');
    box.type='checkbox';
    box.className='boxx';
    box.addEventListener("change", barrer)
    
    parentNode.appendChild(box);

 }
