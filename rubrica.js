class Persona {
    constructor(nome, cognome, numero){
        this.nome = nome;
        this.cognome = cognome;
        this.numero = numero;
    }
}

let rubrica = [];

function aggiungi(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;

    let persona = new Persona(nome, cognome, numero);
    rubrica.push(persona);

}

function stampa(){
    let str = ""
    for (let i = 0; i < rubrica.length; i++) {
        str += rubrica[i].nome + " " + rubrica[i].cognome + " " + rubrica[i].numero + "<br>";
    }
    document.getElementById("stampaContatti").innerHTML = str
}
function pulisci(){
    document.getElementById("nome").value = ""
    document.getElementById("cognome").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("stampaContatti").value = ""
}