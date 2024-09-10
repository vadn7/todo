
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

saveOldList(list)

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

saveLocally(inputElValue);
 
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


createCheckBox(parent)


 parent.appendChild(phrase);
 
 
 createBtnModify(parent);

 createBtnDelete(parent);
 
 // Obtenir tous les element dans le div et prendre ce qui est dans le input
 // Remplacer tous les elements avec I
   
 
  if(!this.classList.contains("no-more-list")) 
 createNewList();

  

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

function saveLocally (phrase){


list.push(phrase)

localStorage.setItem( "list", JSON.stringify(list));
}

function saveOldList (lisT){
lisT=JSON.stringify(lisT)    
    localStorage.setItem( "list",lisT);
    }


function deleteLocally(phrase){

const phraseJSON=JSON.stringify(phrase);

localStorage.removeItem("list",phraseJSON);

}

function getOldLists(){

let liste=[];

console.log(localStorage.getItem("list"));


if(localStorage.getItem("list"))
{


let listeJSON=JSON.parse(localStorage.getItem("list"));

//let listJSON=JSON.parse(localStorage.getItem("list"));

console.log(listeJSON);


list=listeJSON;

liste=list;

console.log(list)

for(let i=0;i<liste.length;i++)
{

createOldList(liste[i]);

}


}

}

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
          
   
         
  function modify(){
     

let parent=this.parentElement;

let inputEdit=findPhrase(parent);

console.log(parent.children);
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
 
 
 }
 
 
 
 function createOldList(oneList) { // Creating a list
 
     let container=document.createElement('div');
          container.className="listes";
     
     let box=document.createElement('input');
     box.type='checkbox';
     box.className='boxx';
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