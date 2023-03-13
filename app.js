var screen = document.getElementById("screen")
var size = 0
var tab = []
var nombreparent = 0
var nombreparferm = 0
var error = false
var newcalc = false
var compteur=0
var op = ["+","-","×","÷"]
function button(id){
    if(id !="C" && id!="="){
        if(newcalc == true){
            screen.innerText="";
            newcalc=false;
        }
        screen.innerText+=id;
        console.log(id)
        if(op.includes(id)==true){
            console.log(screen.innerText[screen.innerText.length -2])
            if(op.includes(screen.innerText[screen.innerText.length -2])) error = true;
        }
        if(id == "(") nombreparent++
        if(id==")") nombreparferm++
    } 
    else{
        if(id == "C") screen.innerText = "";
        
        if(id == "="){
            if(error == true || (nombreparent != nombreparferm) ){
                screen.innerText = "Erreur"
                newcalc = true;
                error = false;
            }
            else{
                var final = screen.innerText.replace("×","*")
                var final2 = final.replace("÷","/")
                screen.innerText= (eval(final2))
            }
        }
    }
}