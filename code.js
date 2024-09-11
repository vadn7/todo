
/**
 * 
 *
 insert la donnée dans un champ
 Recupère la donnée
 * 
 */

function deleteAllLocal(){
localStorage.clear()
}

 let list=[];

getOldLists();

saveList(list)

 createNewList();


// let para = document.createElement('p')
 
 //let check = document.querySelectorAll('.checks')
 
 let count=0;
 
 let body=document.getElementsByTagName("body");
 
 
 let text = document.querySelectorAll('.text') 
 let check = document.querySelectorAll('.checks')
 let btn1 = document.querySelectorAll('.save')
 
 function save() //Saving a list
 {

     let parent=this.parentElement;
 
     

let inputElValue=findPhraseValue(parent);

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
 
// parent.children[3].remove()

//  console.log(parent.children);

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

 function findPhraseValue(parentNode){
   
    let inputEl=parentNode.children[1]

let inputElValue=inputEl.value
    
return inputElValue;
}

 function findPhrase(parentNode){
   
    let textEl=parentNode.children[1]
    let text=textEl.textContent;
return text;
}

function saveOldLocally (phrase){


list.push(phrase)

localStorage.setItem( "list", JSON.stringify(list));
}

/*
function  (phrase){


list.push(phrase)

localStorage.setItem( "list", JSON.stringify(list));
}
*/
function saveList (lisT){
lisT=JSON.stringify(lisT)    
    localStorage.setItem( "list",lisT);
    }


function deleteLocally(phrase){

const phraseJSON=JSON.stringify(phrase);

localStorage.removeItem("list",phraseJSON);

}

function getOldLists(){

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
}
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

function returnPhrase(wholeList){ return wholeList.phrase }

function search(){

}

function createInputTextValue(parentNode,textInputEdit){

    const textEl=document.createElement('input')
    textEl.type='text';
    textEl.className='text';

    textEl.value=textInputEdit;

parentNode.appendChild(textEl);

}

 function createCheckBox(parentNode){


    let box=document.createElement('input');
    box.type='checkbox';
    box.className='boxx';
    box.addEventListener("change", barrer)
    
    parentNode.appendChild(box);

 }

  
 function createBtnModify(parentNode){
 
     let button=document.createElement('button');
     button.type='submit';
     button.addEventListener("click", modify)
     button.className='modify'
     button.innerText="Edit";
  
     let check = document.querySelectorAll('.checks')
 
  parentNode.appendChild(button);
 
     }
 

 function createBtnDelete(parentNode){
 
     let button=document.createElement('button');
     button.type='submit';
     button.addEventListener("click", deletE)
     button.className='delete'
     button.innerText="Delete";

 
    parentNode.appendChild(button);
 
     }

    function deletE() {
    
   let parent=this.parentElement;

   const phrase=parent.children[1]

   deleteLocally(phrase);

   parent.remove();
    
    }

     function createBtnModifyAfterEditing(parentNode){ // Creating Editing button by using parent Node
 
         let button=document.createElement('button');
         button.type='submit';
         button.addEventListener("click", modify)
         button.className='modify'
         button.innerText="Edit";
      
         let check = document.querySelectorAll('.checks')
     
      parentNode.appendChild(button);
     
         }
 
 
         function createOkBtn(parentNode){ // Creating OK button after first editing
 
             let button=document.createElement('button');
             button.type='submit';
             button.addEventListener("click", save)
             button.className='save'
             button.innerText="OK";
             button.className="no-more-list";
            parentNode.appendChild(button);
         
         }
          
   
function saveAllLocally (){

let phrasesEl = document.querySelectorAll(".checks");

let phrases=[];

let boxesEl = document.querySelectorAll(".boxx");

let boxes=[];

let wholeList=[]

if(boxesEl){

for(let i=0;i<phrasesEl.length;i++){

if(phrasesEl[i].textContent!=="")
{
 wholeList.push({box:boxesEl[i].checked,
    phrase:phrasesEl[i].textContent})
}
}

}

/*
console.log(`Les phrases des listes ${phrases}`)


console.log(`Les boite a cocher ${boxes}`)
*/

console.log(wholeList)



/*
for(let i=0;i<boxesEl.length;i++){

if(phrasesEl[i].textContent!=="")



}
*/

localStorage.setItem( "list", JSON.stringify(wholeList));


}

         
  function modify(){
     

let parent=this.parentElement;

let inputEdit=findPhrase(parent);

console.log(parent.children);

list = list

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


// parent.innerHTML="";

// createCheckBox(parent)

createInputTextValue(parent,inputEdit)

 
 //createBtnModifyAfterEditing(parent)
         
 createOkBtn(parent)
 
         } 
     
     
 
 
 
 
 
 
 
     
     // btn.addEventListener("click", function modify(){
     
     //     const parent=btn.parentElement;
         
     //     console.log(parent);
         
         
     //     } )
     
     //  }
 
 
 
 //console.log(box)
 
 /*
 function barrer() {
 
 
 let isChecked = document.getElementById("box").checked;
 
 let check = document.getElementById('check')
 
  isChecked ? check.style.textDecoration="line-through"  : check.style.textDecoration="none";
 
 
 }
 
 */
 
 
 
 function barrer() { //Making a list done
 
 let boxes = document.querySelectorAll(".boxx");
 
 let check = document.querySelectorAll(".checks")

this 
 
 for (let i=0;i<boxes.length;i++)
 {
     
       
   boxes[i].checked ? check[i].style.textDecoration="line-through" 
  : check[i].style.textDecoration="none"; 
     }
 

     saveAllLocally(); 
 }
 
 
 
 function createOldList(oneList, boxState) { // Creating a list
 
     let container=document.createElement('div');
          container.className="listes";
     
     let box=document.createElement('input');
     box.type='checkbox';
     box.className='boxx old-box';
     box.checked=boxState;
     box.addEventListener("change", barrer)
 
 let  phrase=document.createElement('span');
     phrase.className='checks';
     phrase.textContent=oneList;

 
 container.appendChild(box);
 
 container.appendChild(phrase);
 
 createBtnModify(container);
 
createBtnDelete(container);

 document.body.appendChild(container); 
 
 } 
 {}
 
 function createNewList() { // Creating a list
 
     let container=document.createElement('div');
     container.className="listes";
     let box=document.createElement('input');
     box.type='checkbox';
     box.className='boxx';
     box.addEventListener("change", barrer)
 
     let text=document.createElement('input')
     text.type='text';
     text.className='text';
 
 let  phrase=document.createElement('span');
     phrase.className='checks';
 
 let button=document.createElement('button');
    button.type='submit';
    button.addEventListener("click", save)
    button.className='save'
    button.innerText="OK";
 
 container.appendChild(box);
 
 container.appendChild(text);
 
 container.appendChild(phrase);
 
 container.appendChild(button);
 
 document.body.appendChild(container);
 
 
 /*
     let container = document.createElement('div');
     let box = document.createElement('input');
     box.type = 'checkbox';
     box.className = 'boxx';
 
     let text = document.createElement('input');
     text.type = 'text';
     text.className = 't';
 
     let phrase = document.createElement('span');
     phrase.className = 'checks';
     phrase.textContent = 'Checkbox and Text';
 
     let button = document.createElement('button');
     button.type = 'submit';
     button.textContent = 'Submit';
 
     container.appendChild(box);
     container.appendChild(text);
     container.appendChild(phrase);
     container.appendChild(button);
 
     document.body.appendChild(container);
 
     button.addEventListener("click", save)
 
     box.addEventListener("change", barrer)
 */
 
 
 }