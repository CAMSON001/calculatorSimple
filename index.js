let place = document.getElementById("screen")

//let som;
//let multiply;
//let modulo;
//let subs;
//let devide;


function seven(){
    console.log("seven");
    place.textContent += 7;

}

function height(){
    console.log("height");
    place.textContent += 8;
}

function nine(){
    console.log("nine");
    place.textContent += 9;
}

function four(){
    console.log("four");
    place.textContent += 4;
}

function five(){
    console.log("five");
    place.textContent += 5;
}

function six(){
    console.log("six");
    place.textContent += 6;
}

function one(){
    console.log("one");
    place.textContent += 1;
}
function two(){
    console.log("two");
    place.textContent += 2;

}



function three(){
    console.log("three");
    place.textContent += 3;
}



function zero(){
    console.log("zero");
    place.textContent += 0;
}
function dod(){
    console.log("dod");
    place.textContent += ".";
}






let num1 = 0;
let signe;

function AC(){
    console.log("reset");
    place.textContent = " ";
    num1 = 0;
    
}
function subs(){
    num1 = Number(place.textContent);
    place.textContent = "";
    signe = "-"
    return num1;
}

function plus(){
    num1 = Number(place.textContent);
    place.textContent = "";
    signe = "+"
    return num1;
}

function modulo(){
    num1 = Number(place.textContent);
    place.textContent = "";
    signe = "%"
    return num1;
}
function devide(){
    num1 = Number(place.textContent);
    place.textContent = "";
    signe = "/"
    return num1;
}

function multiply(){
    num1 = Number(place.textContent);
    place.textContent = "";
    signe = "x"
    return num1;
}

function equal(){

    let num2 = Number(place.textContent);
    let substract;
    if(signe==="-"){
        substract =  num1-num2;
        place.textContent = substract;
    }
    else if(signe=== "+"){
        substract = num1+num2;
        place.textContent = substract;
  
    }
    else if(signe==="x"){
        substract =  num1*num2;
        place.textContent = substract;
    }
    else if(signe==="/"){
        substract =  num1/num2;
        place.textContent = substract;
    }

    else if(signe==="%"){
        substract =  num1%num2;
        place.textContent = substract;

    }
   
}




