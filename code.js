
/**
 * 
 *
 insert la donnée dans un champ
 Recupère la donnée
 * 
 */


let box=document.getElementById('box')

let para = document.createElement('p')

let check = document.getElementById('check')
let btn1 = document.getElementById('b1')


function save()
{

    let text = document.getElementById('t1')   
    let textValue = text.value
    let check = document.getElementById('check')
    let btn1 = document.getElementById('b1')

    console.log(textValue)

text.remove()


//oldParent.appendChild(wrapper);

check.innerText=textValue;



btn1.remove()




}


console.log(box)

function barrer() {


let isChecked = document.getElementById("box").checked;

let check = document.getElementById('check')

 isChecked ? check.style.textDecoration="line-through"  : console.log("It is not checked");

 

}

