let btn = document.getElementById("bottone")



btn.addEventListener("click", function(){
    let numeroCelle = 100
    let grid = document.getElementById("griglia")

    for (let i = 0; i < numeroCelle; i++) {
        
        const cella = document.createElement("div");
        cella.classList.add("square");
        grid.appendChild(cella);
        
    
    
        cella.addEventListener("click", function(){
    
        console.log("cliccata", i)
    
        cella.classList.toggle("colorata")
    
    
        });
    
    }
})


