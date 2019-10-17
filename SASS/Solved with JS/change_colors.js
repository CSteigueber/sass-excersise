function change_color(color){
    var eAll=document.getElementsByTagName("p");
    for (var i=0; i<eAll.length;i++){
        eAll[i].color=color;
    }
}