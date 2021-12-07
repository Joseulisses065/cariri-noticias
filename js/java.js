function menulateral(){
    var seletor = document.querySelector("#check");
    var menu = document.querySelector(".nav-lista");
    if(document.querySelector("#check").checked==true){
        menu.style.transform = "translateX(0%)";
        menu.style.display ="block"

     
    }else{
        menu.style.transform = "translateX(100%)";
        menu.style.display ="none"

        

 
    }
 
 }