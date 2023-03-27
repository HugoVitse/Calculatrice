class BaseCalculator {
    constructor() {
        this.id = undefined
        this.screen = document.getElementById("screen")
        this.error = false
        this.nombreparent = 0
        this.nombreparferm = 0
        this.newcalc = false
        this.op = ["+","-","×","÷"]
        this.operande = undefined
        this.resultat = undefined
    }
    retourArriere(){
        this.screen.innerText = this.screen.innerText.substring(0,this.screen.innerText.length-1)
    }
    affichage(ide){
        this.id = ide
        if(this.id !="C" && this.id!="="){
            if(this.newcalc == true){
                this.effacer();
                this.newcalc=false;
            }
            this.screen.innerText+=this.id;
            if(this.op.includes(this.id)==true){
                if(this.op.includes(this.screen.innerText[this.screen.innerText.length -2])) this.error = true;
            }
            if(this.id == "(") this.nombreparent++
            if(this.id==")") this.nombreparferm++
        } 
        else{
            if(this.id == "C") this.effacer();
            
            if(this.id == "="){
                if(this.error == true || (this.nombreparent != this.nombreparferm) ){
                    console.log(this.error)
                    this.screen.innerText = "Erreur"
                    this.newcalc = true;
                    this.error = false;
                }
                else{
                    var final = this.screen.innerText.replace("×","*")
                    var final2 = final.replace("÷","/")
                    this.operande = final2
                    this.operation()
                    this.screen.innerText = (this.resultat)
                }
            }
        }
    }
    operation(){
        this.resultat = eval(this.operande)
    }
    effacer(){
        this.screen.innerText = ""
    }

    
}
let baseCalculator = new BaseCalculator();

document.addEventListener('keydown', (event) => { // possibilité d'intéragir avec le clavier
    console.log(event.key)
    if( (parseInt(event.key) >= 0 && parseInt(event.key) <= 9) || (event.key == "/" || event.key == "*" || event.key == "(" || event.key == ")" || event.key == "+" || event.key == "-" || event.key == "." || event.key == "C" )){
        baseCalculator.affichage(event.key)
    }
    if(event.key == "," ){
        baseCalculator.affichage(".")
    }
    if(event.key == "Enter"){
        baseCalculator.affichage("=")
    }
    if(event.key == "Backspace"){ // bouton de retour arrière
        baseCalculator.retourArriere()

    }
    // do something
});