export function search(){
hideNotFound();
/*    let query=document.querySelector("#search").value
    let listes=document.querySelectorAll(".listes")
   
   showListes(listes);
   
   if(!query)
   {
   showListes(listes);
   hideNotFound();
   }
   
   if(query){
    let checkEl = document.querySelectorAll(".checks")
    
    let checkValue=[];
   console.log(checkEl)
   
   for(let li of checkEl)
   {
   
       if(li.textContent)
   checkValue.push(li.textContent);
   }
   
   
   
   let filteredListIndexes=filterListIndexes(checkValue,query)
   
   console.log(filteredListIndexes);
   if(filteredListIndexes.length===0){
   
   hideListes(listes);
   displayNotFound();
   console.log("There !")
   }
   
   else{
   let result=[]
   
   for(let i=0;i<listes.length;i++)
    {
    
    if(!filteredListIndexes.includes(i))
    listes[i].style.display="none"
    }
   
   console.log(filteredListIndexes)
   
   console.log(listes);
   
   console.log(result);
   
   }
   
   }
   */
   //addListesResult(result)
   
   //document.body.appendChild(result)
   
   /*
   let filteredChecks = checkValue.filter(item => item.toLowerCase().includes(query)  // Change 'phrase' to 'title'
   )
   */
   /*
   if(filteredIndexes.length===1)
   //    document.getElementsByClassName("listes")[filteredIndexes].remove()
   {for(let i=0;i<document.getElementsByClassName("listes").length;i++){
   
       if(i!==filteredIndexes)
       document.getElementsByClassName("listes")[i].remove()
       }
   
   }
   */
   /*
       if(filteredIndexes.length!==1)
   {for(let i=0;i<document.getElementsByClassName("listes").length;i++){
   
   
   
   if(!filteredIndexes.includes(i))
   document.getElementsByClassName("listes")[i].remove()
   }
   }
   */
   
   /*
   for(let i=0;i<checkEl.length;i++)
   {
   
   if(checkValue[i].toLowerCase().includes(query))
   result.push(checkValue[i])
   }
   */
   
   
   /*
    const filteredPhrases = wholeList.filter(item => 
                   item.phrase.toLowerCase().includes(query)
               );
   */
   //console.log(filteredPhrases);
   
   
   let query=document.querySelector("#input-search").value
   let listes=document.querySelectorAll(".listes")
  
  showListes(listes);
  
  if(!query)
  {
  showListes(listes);

//  hideNotFound();
  }
  
  if(query){
   let checkEl = document.querySelectorAll(".checks")
   
   let checkValue=[];
  console.log(checkEl)
  
  for(let li of checkEl)
  {
  
      if(li.textContent)
  checkValue.push(li.textContent);
  }
  
  
  
  let filteredListIndexes=filterListIndexes(checkValue,query)
  
  console.log(filteredListIndexes);
  if(filteredListIndexes.length===0){
  
  hideListes(listes);
  displayNotFound();
  console.log("There !")
  }
  
  else{
    hideNotFound();
  let result=[]
  
  for(let i=0;i<listes.length;i++)
   {
   
   if(!filteredListIndexes.includes(i))
   listes[i].style.display="none"
   }
  
  console.log(filteredListIndexes)
  
  console.log(listes);
  
  console.log(result);
  
  }
  
  }
  

   }

   function showListes(listes){

    for(let li of listes){
    
        li.style.display="block";
        li.style.display="flex";
        li.style.justifyContent="space-between";
        li.style.alignItems = "center";
        li.style.margin = "10px 400px 0px 10px";
        li.style.float="right";
    }
    
    }

    function displayNotFound(){

        let para=document.querySelector(".not-found")
        
        para.style.display="block"
        
        
        }
        
        function hideNotFound(){

            let para=document.querySelector(".not-found");
            
            para.style.display="none";
            
            }


        function filterListIndexes(listes,query)
{
let matchIndexes=[]
listes.forEach((item,index )=> {
   
    if(item.includes(query)) matchIndexes.push(index)

});

return matchIndexes;

}

function hideListes(listes){

    for(let li of listes){
    
        li.style.display="none";
    }
    }