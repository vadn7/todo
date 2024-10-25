import {createInputTextValue} from "../create/createInputTextValue.js";
import {createOkBtn} from "../create/createOkBtn.js"
export function modify(){
     

    let parent=this.parentElement;
    
    let inputEdit=findPhrase(parent);
    
    console.log(parent.children);
    
    if(parent.children[1])
     parent.children[1].remove()
    
    if(parent.children[1])
     parent.children[1].remove()
    
    if(parent.children[1])
     parent.children[1].remove()
    
  parent.children[0].style.margin="0px 10px 0px -10px";
    
    
    createInputTextValue(parent,inputEdit)
    
     
    parent.children[1].style.margin="0px 300px 0px -10px";   

     createOkBtn(parent)
     

             } 

             function findPhrase(parentNode){
   
                let textEl=parentNode.children[1]
                let phrase=textEl.textContent;
                   return phrase;
            }