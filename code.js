let box=document.getElementById("box")
let text=document.getElementById("t1")
let tp=text.value
console.log(text)

if(box.checked)
{
text.style.color="red"}

function save()

{
    let tp=text.value

    console.log(tp)

text.remove()

let para=createElement("p")
para.innerText=tp

para.appendParent(body)

}

