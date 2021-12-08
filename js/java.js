function menulateral(){
    var seletor = document.querySelector("#check");
    var menu = document.querySelector(".nav-lista");
    var painel = document.querySelector(".conteudo");
    var footer = document.querySelector(".footer");
    var videos = document.querySelector(".baner-videos");
    var subVideos = document.querySelector(".sub-video-baner");
    
    if(document.querySelector("#check").checked==true){
        menu.style.transform = "translateX(0%)";
        menu.style.display ="block";
        painel.style.position = "relative"
        painel.style.top="305px"
        footer.style.position = "relative"
        footer.style.top="305px"
        subVideos.style.position = "relative"
        subVideos.style.top="305px"
        videos.style.top="305px"

     
    }else{
        menu.style.transform = "translateX(100%)";
        menu.style.display ="none"
        painel.style.position = "relative"
        painel.style.top="0px"
        footer.style.position = "relative"
        footer.style.top="0px"
        subVideos.style.position = "relative"
        subVideos.style.top="0px"
        videos.style.top="0px"

        

 
    }
 
 }