let Content= document.getElementById("Content");


function Cont (Contribute){
    Content.innerHTML += Contribute;
}


function Result (){
   Content.innerHTML= eval(Content.innerHTML);
}

function Delete(){
    Content.innerHTML=Content.innerHTML.slice(0,-1);

    
    if(Content.innerHTML===""){
        Content.innerHTML=Content.innerHTML.slice(0,-3);
    }
    
}
