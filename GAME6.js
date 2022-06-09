// CALLING 
let par = document.getElementById("para");
let input = document.getElementById("input");
let btt = document.getElementById("btn");
let btn = document.getElementById("btn1");
let emo = document.getElementById('yep');
let random = Math.floor(Math.random() * 50);
let hill = document.getElementById('hill');
let audio= document.getElementById('audio2')
// SYMBOLS
let Symbol = ['[','+','=','>',',','"','}','_',"'",')','(',';','.','|','/','?','>','!','@','#','$','%','^','`','~']
let Symbol2= ['_','}',']','^','{','[','~','`','|'];

let deci = [0.1,0.2,0.3,0.4,0.5,0.7,0.8,0.9]
console.log(random);
console.log(deci)
// FUNCTION
btt.addEventListener("click", function () {
let inputVal = input.value;
if (inputVal == random) {
par.innerHTML = "you are right"+'&#127941 &#128079 &#11088 &#11088 &#11088 &#11088';
par.classList.add("colors");
par.innerHTML+= `you have ${10} ponits`
} 
else if (inputVal < random && inputVal >= 1) {
par.innerHTML = "Guess again ,this time higher"+' &#9757';
} else if (inputVal > random && inputVal <= 50) {
par.innerHTML = "Guess again ,this time lower"+'&#128078';
} 
else if (inputVal > 50  ) {
par.innerHTML = "Your input is more than the required range"+'&#9940';
par.classList.add(animate2)
}
 else if (inputVal!=''&&inputVal>=Symbol[0]&&inputVal!=Symbol2[0]&&inputVal!=Symbol2[1]&&inputVal!=Symbol2[2]&&inputVal!=Symbol2[3]&&inputVal!=Symbol2[4]&&inputVal!=Symbol2[5]&&inputVal!=Symbol2[6]&&inputVal!=Symbol2[7]&&inputVal!=Symbol2[8]&&inputVal!=Symbol2[9]) {
par.innerHTML = "Sorry, alphabets are not permitted!"+'&#9940';
}
 else if (inputVal!=''&&inputVal<0) {
par.innerHTML = "Aw I don't accept nagative numbers"+'&#9940';
par.classList.add("animate");
}
 else if (inputVal!=''&&inputVal==0) {
par.innerHTML = "Zero is below the range, Hey guy!!!!"+'&#9940';
par.classList.add("animate2");
}

 else if (inputVal=='') {
par.innerHTML = "There is no input  so check it again "+'&#9940';
}
 else if (inputVal<= deci[7]) {
par.innerHTML = "Please I don't accept decimals "+'&#9940';
}


else {
par.innerHTML = "Symbol!!! No No No!!"+'&#127946';
par.classList.add("animate");
}
});
btn.addEventListener("click", function () {
location.reload();
});

