import { getOldLists } from "./getOld/getOldList.js";
import {search} from "./search/search.js"
import { deleteAllLocal } from "./delete/deleteAllLocally.js";
import { saveAllLocally } from "./save/saveAllLocally.js";
import { createNewList } from "./create/createNewList.js";

let deleteAllLocallyEl=document.getElementById("deleteAllLocally")
deleteAllLocallyEl.addEventListener("click", deleteAllLocal)


let inputSearchEl=document.getElementById("input-search");
inputSearchEl.addEventListener("input",search)

 let listes=[];

getOldLists(listes);
saveAllLocally();
 createNewList();
