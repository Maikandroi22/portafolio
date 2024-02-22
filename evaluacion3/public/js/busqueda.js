function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

document.addEventListener("keyup", e=>{

   if(e.target.matches("#buscador")){

    if(e.key ==="Escape")e.target.value = ""

   document.querySelectorAll(".producto").forEach(elemento =>{

elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
    ?elemento.classList.remove("filtro")
    :elemento.classList.add("filtro")

   })

   }

})