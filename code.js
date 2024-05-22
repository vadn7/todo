
/**
 * 
 *
 insert la donnée dans un champ
 Recupère la donnée
 * 
 */


let box=document.getElementById('box')

let para = document.createElement('p')


function save()

{

    let text = document.getElementById('t1')   
    let textValue = text.value
    let check = document.getElementById('check')
    let btn1 = document.getElementById('b1')

    console.log(textValue)

text.remove()



para.innerText=textValue

//oldParent.appendChild(wrapper);

check.innerText=textValue;

btn1.remove()

}

if(box.checked===true)
    {
    para.style.color="red"

}

