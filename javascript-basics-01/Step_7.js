function fun(){
    var validate = document.getElementById("validate");
    var shoe_size = document.getElementById("shoe_size");
    var year = document.getElementById("year");
    var mul = shoe_size.value * 2 ;
    var add1 = mul.value + 5 ;
    var mul2 = add1.value * 50 ;
    var sub = mul2.value - year.value ;
    var add2 = sub.value + 1766 ;
        alert(add2);
}
