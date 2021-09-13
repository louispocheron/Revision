
// section  1 
const prenom = 'Louis';
const nom = 'Pocheron';
const section1 = document.querySelector(".section1");




window.addEventListener("load", function() {
   const nouveaup = document.createElement('p');
   const contenu = document.createTextNode(`Votre nom est ${nom} et votre prénom est ${prenom}`);
    nouveaup.appendChild(contenu);
    nouveaup.className = 'p1';
    section1.appendChild(nouveaup);
})

const section2 = document.querySelector(".section2");
// SECTION 2
window.addEventListener("load", function creation(){
    const nouvellediv = document.createElement('div');
    const noname = document.createTextNode('passe sur ce carré');
    nouvellediv.appendChild(noname);

    nouvellediv.className = 'div1';
    section2.appendChild(nouvellediv);
})

// SECTION 3 
const section3 = document.querySelector(".section3");
const pfilm = document.querySelector(".pfilm");
const button1 = document.querySelector('.button1')
const film = ["fight club", "matrix", "your name", "99 francs", "tenet"];

button1.addEventListener("click", function(){
    let rdmMovie = Math.floor(Math.random() * film.length);
    let movie = pfilm;
    movie.textContent = film[rdmMovie];
    section3.appendChild(movie);
})


//  SECTION 4
const button4 = document.querySelector('.button4');

button4.addEventListener("click", function(){
const section4 = document.querySelector(".section4");
const input1 = document.querySelector('.input1').value;
let pdemo = document.querySelector('#demo');
const contenu4 = document.createTextNode(`${input1}`);


    for( let i = 0; i < input1.length; i++){
        let a = input1[i];
        if(a == a.toUpperCase()){
        pdemo.innerHTML = contenu4.toLowerCase();
            
        }
        if( a == a.toLowerCase()){
            console.log("Lowercase");
        }
    }
})


// SECTION 5 

const section5 = document.querySelector(".section5");
const generer = document.querySelector(".generer");
var caractere = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&é(-è_çà=";
var string_length = 16;
var motdepasse = '';
for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * caractere.length);
    motdepasse += caractere.substring(rnum,rnum+1);
}

generer.addEventListener("click", function(){
    
})








