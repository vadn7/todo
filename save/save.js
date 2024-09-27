import { findInputValue } from "./findInputValue.js";
import { createCheckBox } from "../create/createCheckBox.js";
import { createBtnModify } from "../create/createBtnModify.js";
import { createBtnDelete } from "../create/createBtnDelete.js";
import { createNewList } from "../create/createNewList.js";
import { barrer } from "../done/done.js";
import { saveAllLocally } from "./saveAllLocally.js";

export function save() //Saving a list
{

    let parent=this.parentElement;

    

let inputElValue=findInputValue(parent);

let box=parent.children[0];

//saveOldLocally(inputElValue);

console.log(inputElValue)

let  phrase=document.createElement('span');
    phrase.className='checks';
    phrase.innerText=inputElValue;



// Saving it over

if(inputElValue)
{

 console.log(parent.children);

if(parent.children[1])
parent.children[1].remove()

if(parent.children[1])
parent.children[1].remove()

if(parent.children[1])
parent.children[1].remove()

if(parent.children[1])
   parent.children[1].remove()

parent.innerHTML="";


console.log(parent.children);

if(!box.classList.contains("old-box")) 
   createCheckBox(parent);


if(box.classList.contains("old-box")) 
   parent.appendChild(box)

parent.appendChild(phrase);

barrer();

createBtnModify(parent);

createBtnDelete(parent);

// Obtenir tous les element dans le div et prendre ce qui est dans le input
// Remplacer tous les elements avec I
  

 if(!this.classList.contains("no-more-list")) 
createNewList();

 saveAllLocally();
 
}

}
