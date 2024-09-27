import { saveAllLocally } from "../save/saveAllLocally.js";
import {createInputTextValue} from "../create/createInputTextValue.js";
import {createOkBtn} from "../create/createOkBtn.js"
export function modify(){
     

    let parent=this.parentElement;
    
    let inputEdit=findPhrase(parent);
    
    console.log(parent.children);
    
    //list = list
    
    /*
    const textEl=document.createElement('input')
    textEl.type='text';
    textEl.className='text';
    
     textEl.value=inputEdit;
    */
    
    if(parent.children[1])
     parent.children[1].remove()
    
    if(parent.children[1])
     parent.children[1].remove()
    
    if(parent.children[1])
     parent.children[1].remove()
    
  parent.children[0].style.margin="0px 10px 0px -10px";
    
    // parent.innerHTML="";
    
    // createCheckBox(parent)
    
    createInputTextValue(parent,inputEdit)
    
     
    parent.children[1].style.margin="0px 300px 0px -10px";
     //createBtnModifyAfterEditing(parent)
     
     

     createOkBtn(parent)
     

             } 

             function findPhrase(parentNode){
   
                let textEl=parentNode.children[1]
                let text=textEl.textContent;
            return text;
            }