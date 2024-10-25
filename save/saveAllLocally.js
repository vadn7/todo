
export function saveAllLocally (){

    let phrasesEl = document.querySelectorAll(".checks");
    
    let boxesEl = document.querySelectorAll(".boxx");
    
    let wholeList=[]
    
    if(boxesEl){
    
    for(let i=0;i<phrasesEl.length;i++){
    
    if(phrasesEl[i].textContent)
    {
     wholeList.push({box:boxesEl[i].checked,
        phrase:phrasesEl[i].textContent})
    }
    }
    
    }
    
    
    console.log(wholeList)
        
    localStorage.setItem( "list", JSON.stringify(wholeList));
    }