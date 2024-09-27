import {modify} from "../modify/modify.js"

export function 
createBtnModify(parentNode){
 
    let button=document.createElement('button');
    button.type='submit';
    button.addEventListener("click", modify)
    button.className='modify'
    button.innerText="Edit";


 parentNode.appendChild(button);

    }