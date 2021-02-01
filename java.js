var El={
    num:document.getElementById("card"),
    btn:document.getElementById("btn"),
    box:document.getElementById("box"),
    back:document.getElementById("back"),
    pass:document.getElementById("pass")
}
function ShowCart(){
if(El.num.value==""){
    alert("Erorr Eypte")
}
else if(El.num.value<16){
    alert("Erorr is small")
}
else{
    var a=El.num.value.split("");
    for(var x=0;x<a.length-4;++x){
        a[x]="*";
        var z=a.join("");
        var answer=z.toString();
        }
        //alert(answer);
        El.box.style.left="50%";
        El.pass.innerHTML=answer;
        El.pass.style.transitionDelay="1s";
    El.pass.style.left="50%";
}
}
function Back(){
    El.box.style.left="-50%";
    
}



El.btn.addEventListener("click",ShowCart);
El.back.addEventListener("click",Back)
//instgram:(kaboli.ir)


