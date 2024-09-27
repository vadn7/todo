
export function saveOldList (lisT){
    lisT=JSON.stringify(lisT)    
        localStorage.setItem( "list",lisT);
        }