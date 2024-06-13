
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



function save()
{

    let text = document.querySelectorAll('.t') 

    let check = document.querySelectorAll('.checks')
    let btn1 = document.querySelectorAll('.b1s')

for(let i=0; i<text.length;i++) 
    { if ( ( (text[i].value).length!==0) && ( btn1[i].length!==0 ) ) {  

    console.log(text[i])

    let textValue = text[i].value



    console.log(textValue)

text[i].remove()

  

//oldParent.appendChild(wrapper);

check[i].innerText=textValue;



btn1[i].remove()

let hide = document.querySelectorAll('.hide')

hide[i].style.display="block";

text[i+1].innerText="";

}

}



}





console.log(box)

/*
function barrer() {


let isChecked = document.getElementById("box").checked;

let check = document.getElementById('check')

 isChecked ? check.style.textDecoration="line-through"  : check.style.textDecoration="none";


}

*/



function barrer() {

let boxes = document.querySelectorAll(".boxx");

let check = document.querySelectorAll(".checks")


for (let i=0;i<boxes.length;i++)
{
    
      
  boxes[i].checked ? check[i].style.textDecoration="line-through" 
 : check[i].style.textDecoration="none"; 
    }

}