// BUTTON 1
const button1 = document.querySelector('.button1')
let p1 = document.querySelector('.random')

function randomnumber(max){
    return Math.floor(Math.random() * max);
}

button1.addEventListener('click', function(){
    p1.innerHTML = randomnumber(1000);
})

// BUTTON 2 
const button2 = document.querySelector('.button2');
let p2 = document.querySelector(".p2");

button2.addEventListener('click', function(){
    let regex = new RegExp("[a-zA-Z]");
    let input1 = document.querySelector(".input1").value;
    if ( !regex.test(input1)){
        alert('mauvais caractere');
    }
    else{
        p2.innerHTML = `bonjour ${input1}`;    
    }

})

// BUTTON 3
const button3 = document.querySelector('.button3');
const p3 = document.querySelector('.p3');
let regex2 = new RegExp("[0-9]");


button3.addEventListener("click", function(){
    let input2 = document.querySelector(".input2").value;
    if( !regex2.test(input2) ){
        alert("mauvais caractere");
        
        
    }
    else{
        const TVA = 1.2;
        let total = TVA * input2;
        // console.log(total);
    
       p3.innerHTML = total;
    }
 
})
// BUTTON 4

const button4 = document.querySelector('.button4');
const p4 = document.querySelector('.p4');

button4.addEventListener("click", function(){
    let input3 = document.querySelector('.input3').value;
    if ( !regex2.test(input3) ){
        alert('mauvais caractère');

    }
    else{
        if( input3 > 190 ){
            p4.innerHTML = "trop grand pour le manège"
        }
        else if( input3 < 154 ){
            p4.innerHTML = "trop petit pour le manège"
        }
        else{
            p4.innerHTML = 'Super ! tu peux y aller'
        }
    }
  
})

