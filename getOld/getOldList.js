import { createOldList } from "./createOldList.js";
import {barrer} from "../done/done.js"

export function getOldLists(list){

    
    let phrases=[], boxes=[];
    
    console.log(localStorage.getItem("list"));
    
    
    
    if(localStorage.getItem("list"))
    {
    
    let wholeList=JSON.parse(localStorage.getItem("list"));
    
    console.log(wholeList);
    
    boxes = wholeList.map((item => item.box))
    
    phrases=wholeList.map((item => item.phrase));
        
    console.log(boxes);
    
    console.log(phrases);
    
     list=phrases;
        
    console.log(list)
    
    for(let i=0;i<list.length;i++)
    {
    
    createOldList(list[i], boxes[i]);
    
    barrer();
    
    }
    
    
    }
    
    }
