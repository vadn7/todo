
/**
 * 
 *
 insert la donnée dans un champ
 Recupère la donnée
 * 
 */


let box=document.getElementById('box')

let para = document.createElement('p')

let check = document.querySelectorAll('checks')
let btn1 = document.getElementById('b1')

let count=0;

function save() //Saving a list
{



    let text = document.querySelectorAll('.t') 

    let check = document.querySelectorAll('.checks')
    let btn1 = document.querySelectorAll('.b1s')

for(let i=0; i<text.length;i++) 
    { if ( ( (text[i].value).length!==0) && ( btn1[i].length!==0 ) ) {  


    let textValue = text[i].value

    console.log(textValue)


text[i].remove()




check[count].innerText=textValue;

count++;// For knowing in which list we are and count the number if the list


console.log(i); // Le problème est que text est de nouveau 0 car le precedent n'exsite pas

//Donc, il faut faire avec le cas ou text disparait 

console.log(check[i].innerText)


btn1[i].remove()

let hide = document.querySelectorAll('.hide')



}


}

CreateList();//Creating a list


}







console.log(box)

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


for (let i=0;i<boxes.length;i++)
{
    
      
  boxes[i].checked ? check[i].style.textDecoration="line-through" 
 : check[i].style.textDecoration="none"; 
    }


}





function CreateList() { // Creating a list

    let container=document.createElement('div');
    
    let box=document.createElement('input');
    box.type='checkbox';
    box.className='boxx';
    box.addEventListener("change", barrer)

    let text=document.createElement('input')
    text.type='text';
    text.className='t';

let  phrase=document.createElement('span');
    phrase.className='checks';

let button=document.createElement('button');
   button.type='submit';
   button.addEventListener("click", save)
   button.className='b1s'
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