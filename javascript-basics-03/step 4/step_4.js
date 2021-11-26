function passch(){
    var pass = document.getElementById("password");
    var conf =document.getElementById("confirmation");
    var Test = document.getElementById("Test");

    if(pass.value === conf.value){
     alert("ok!")
    }
    else{
        pass.style.border = " 1px solid red" ;
        conf.style.border = " 1px solid red" ;
}
}