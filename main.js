
let btn = document.getElementById("bottone")


function grigliaGen(){
    
    btn.addEventListener("click", function(){
        
        grigliaGen()
        
        let numeroCelle = 100
        let grid = document.getElementById("griglia")
        
        for (let i = 1; i <= numeroCelle; i++) {
            let nCelle = i + 0;
            const cella = document.createElement("div");
            cella.classList.add("square");
            cella.classList.add("spazio")
            grid.appendChild(cella);
            cella.innerHTML = nCelle
    
            
    
            cella.addEventListener("click", function(){
        
            console.log("cliccata", nCelle)
        
            cella.classList.toggle("colorata")
        
            
    
    
            });
        
        }
    })




}    



