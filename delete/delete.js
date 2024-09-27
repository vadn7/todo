import { saveAllLocally } from "../save/saveAllLocally.js";
export function deletE() {
    
    let parent=this.parentElement;
 
    const phrase={box:parent.children[0].checked, phrase:parent.children[1].textContent}
 
    parent.remove();

    saveAllLocally();
     
     }