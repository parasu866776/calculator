function  displayValue(val){
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}


function calculator(){

    var userInCput = document.getElementById("display").value ;

    var result = eval(userInCput);

    document.getElementById("display").value = result;
}