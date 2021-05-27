window.addEventListener("load", ()=>{
    document.getElementById("hamburguesa").addEventListener('click',()=>{
        const elementos = document.getElementsByClassName("barraN");
        if(elementos[0].style.display=="none"){
            for(let i=0; i<=elementos.length;i++){
              elementos[i].style.display="block";
            }
        }else{
          for(let i=0; i<=elementos.length;i++){
            elementos[i].style.display="none";
          }
        }
    })
})