import {saveAllLocally} from "../save/saveAllLocally.js"

export function barrer() { //Making a list done
 
    let boxes = document.querySelectorAll(".boxx");
    
    let check = document.querySelectorAll(".checks");
    
    for (let i=0;i<boxes.length;i++)
    {
      if(boxes[i].checked){ 

      check[i].style.textDecoration="line-through";
     
      check[i].style.color="grey";
              
      }


      if(!boxes[i].checked){ 

       check[i].style.textDecoration="none";

       check[i].style.color="black";

      }

        }
    
   
        saveAllLocally(); 
    }
   
   