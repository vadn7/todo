import { createOldList } from "./createOldList.js";
import {barrer} from "../done/done.js"

export function getOldLists(list){

    let liste=[];
    
    let phrases=[], boxes=[];
    
    console.log(localStorage.getItem("list"));
    
    
    
    if(localStorage.getItem("list"))
    {
    
    let wholeList=JSON.parse(localStorage.getItem("list"));
    
    console.log(wholeList);
    /*
    for(let i=0;i<wholeList.length;i++){
    
    //boxes.push(wholeList[i].box);
    
    phrases.push(wholeList[0]);
    s}
    */
    
    boxes = wholeList.map((item => item.box))
    
    phrases=wholeList.map((item => item.phrase));
    
    //const combinedPhrases = wholeList.map(item => item.phrase).join("\n");
    
    console.log(boxes);
    
    console.log(phrases);
    
    let list=phrases;
    
    //let listJSON=JSON.parse(localStorage.getItem("list"));
    
    
    liste=list;
    
    console.log(list)
    
    for(let i=0;i<liste.length;i++)
    {
    
    createOldList(liste[i], boxes[i]);
    
    barrer();
    
    }
    
    
    }
    
    }
