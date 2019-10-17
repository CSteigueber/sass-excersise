function change_color(color,tag){
    let pad="";
    if(color=="blue"){
        pad="8px";
    }
    if(color=="red"){
        pad="16px";
    }
    var eAll=document.getElementsByTagName(tag);
    for (var i=0; i<eAll.length;i++){
        eAll[i].style.color=color;
        eAll[i].style.padding=pad;
    }
 }
function blue(){
    change_color("blue","p");
    change_color("blue","h1");
    change_color("blue", "h2");
    change_color("blue","ul");
    change_color("blue", "code");
}    
function red(){
    change_color("red","p");
    change_color("red","h1");
    change_color("red","h2");
    change_color("red","ul");
    change_color("red","code");
} 