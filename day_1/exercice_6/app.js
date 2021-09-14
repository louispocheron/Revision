let div = document.querySelector(".background");
let h1 = document.querySelector('.h1');

document.addEventListener("keydown", function(event){
    console.log(event.code);
    div.style.backgroundcolor = 'red';
    if( event.code == 'KeyR' ){
        div.style.backgroundColor = "red";
        console.log("r");
    }
    else if( event.code == 'KeyG'){
        div.style.backgroundColor = "green";
    }
    else if( event.code == 'KeyB'){
        div.style.backgroundColor = "blue";
    }
    else if( event.code == 'KeyP'){
        div.style.backgroundColor = "pink";
    }
    else if( event.code == 'KeyY'){
        div.style.backgroundColor = "yellow";
    }
    else if( event.code == 'ArrowUp'){
        h1.style.display = 'block';
        // alert('test');
    }
    
    else{
        div.style.backgroundColor = 'white';
    }
})

h1.addEventListener("click", function(){
var year_born = prompt("Entre ton année de naissance", "yyyy");
var d = new Date();
var n = d.getFullYear();
function age(anneenaissance){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - anneenaissance;
    return age;
}
calculatedAge = age(year_born);
if( calculatedAge > 25){
    alert(' tu as ' + calculatedAge + ' ans bienvenue');
}
else{
    alert("tu as " + calculatedAge + " ans et ce n'est pas l'age requis pour ce site");
}
})

