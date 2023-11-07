let btn = document.getElementById("bottone")



btn.addEventListener("click", function(){

    let numeroCelle = 100
    let grid = document.getElementById("griglia")

    for (let i = 0; i < numeroCelle; i++) {
        let nCelle = i + 1;
        const cella = document.createElement("div");
        cella.classList.add("square");
        cella.classList.add("spazio")
        grid.appendChild(cella);
        cella.innerHTML = nCelle

        

        cella.addEventListener("click", function(){
    
        console.log("cliccata", i)
    
        cella.classList.toggle("colorata")
    
        


        });
    
    }
})


