let pass1 = document.querySelector(".pass1"); 
let pass2 = document.querySelector(".pass2");
let error = document.querySelector("#error");
let btn = document.querySelector("#btn");

function password(){
    if(pass1 == "" && pass2 == ""){
        error.innerHTML = "*Password does not match";
    } else if ( pass1 === pass2) {
        error.innerHTML = "";
    }
}

