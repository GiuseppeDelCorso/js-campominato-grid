/***imposto la difficoltaa
clicclo sul bottone
creo una funzione che generi la grigliaGen
in base al livello genro le diverse quantita di Caselle 
inposto un evento che mi aggiunga la classe per colorare la casella clicclata
creao un generatore di numeri randomico da 1 a 16
confronmto questi numeri randomici con quelli presentri nella grigliaGen
inposto un evento che mi colori la casella di rosso nel caso in cuoi i numeri siano li Stessi 
nel caso in cui i numeri combacino la partita riultrà persa**/





let btn = document.getElementById("bottone")
btn.addEventListener("click", function(){
    grigliaGen()
    
})

function grigliaGen(){


    const select = difficoltaLivello();
    let grid = document.getElementById("griglia")
    grid.innerHTML = "";
    let numeroCelleTotali;
    let numCellePerRiga;
    
    if (select==1) {
        
        numeroCelleTotali = 49;
        numCellePerRiga = 7;
    } else if (select==2){
        
        numeroCelleTotali = 81;
        numCellePerRiga = 9;

    } else if (select==3){
        
        numeroCelleTotali = 100;
        
    }
    
    for (let i = 1; i <= numeroCelleTotali; i++) {


        let nCelle = i + 0;
        const cella = document.createElement("div");
        cella.classList.add("square");
        cella.classList.add("spazio")
        grid.appendChild(cella);
        cella.innerHTML = nCelle
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;

        

        cella.addEventListener("click", function(){
        console.log("cliccata", nCelle)
        cella.classList.toggle("colorata")
             
        
        if (nCelle==listaBombe) 
        {
                 console.log("Bomba")
             }
    
    
        });
    }
    
    
}    

function difficoltaLivello() {
    
    const select = parseInt(document.getElementById("select").value);
    console.log (select);
    return select;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listaBombe = []
for (let i = 0; i < 16; i++) {
    
    const numeroCasuale = getRndInteger(1, 100)
    listaBombe[i] = getRndInteger(1, 100)
    console.log(listaBombe)
    
}

