function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}


document.addEventListener("keyup", e=>{

    if(e.target.matches("#buscador")){
 
     if(e.key ==="Escape")e.target.value = ""
 
    document.querySelectorAll(".carro").forEach(carros =>{
 
 carros.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
     ?carros.classList.remove("filtro")
     :carros.classList.add("filtro")
 
    })
 
    }
 
 })
