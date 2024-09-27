
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
    
    
    
    /*
    for(let i=0;i<boxesEl.length;i++){
    
    if(phrasesEl[i].textContent!=="")
    }
    */
    
    localStorage.setItem( "list", JSON.stringify(wholeList));
    }