export function search(){
hideNotFound();
   
   let query=document.querySelector("#input-search").value.toLowerCase()
   let listes=document.querySelectorAll(".listes")

   

  showListes(listes);
  
  if(!query)
  {
  showListes(listes);
  }
  
  if(query){
   let checkEl = document.querySelectorAll(".checks")
   
   let checkValue=[];
  console.log(checkEl)
  
  for(let li of checkEl)
  {
  
      if(li.textContent)
  checkValue.push(li.textContent.toLowerCase());
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
    
        li.style.display="flex";
        li.style.justifyContent="center";
         }
    
    }

    function displayNotFound(){

        let para=document.querySelector(".not-found")
        

        para.style.display="flex";
        para.style.justifyContent = "center";
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