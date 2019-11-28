let myVar = document.getElementById("hamburger");

let verify = false;

function responsive(){
    if(verify == false){
        verify = true;
        document.getElementById("hamburger").style.position = "fixed";
        document.getElementById("hamburger").style.alignSelf = "flex-end";
        document.getElementById("navbar").style.marginLeft = "0px";
    }
    else if(verify == true){
        verify = false;
        document.getElementById("hamburger").style.position = "relative";
        document.getElementById("navbar").style.marginLeft = "-1250px";
    }
    console.log("teste");
}

myVar.addEventListener("click", responsive);