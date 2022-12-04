

let score = document.querySelector('.score-tabl');
let btn1 = document.querySelector('.plus1');
let btn2 = document.querySelector('.plus2');
let btn3 = document.querySelector('.plus3');
let zero = 0;
let scoreg = document.querySelector('#score-tabl');
let btn1g = document.querySelector('#pl1');
let btn2g = document.querySelector('#pl2');
let btn3g = document.querySelector('#pl3');
let zerog = 0;

btn1.onclick = function () {
    zero = zero + 1;
    score.innerHTML = zero;
}

btn2.onclick = function () {
    zero = zero + 2;
    console.log(zero);
    score.innerHTML = zero;
}

btn3.onclick = function () {
    zero = zero + 3;
    score.innerHTML = zero;
}




btn1g.onclick = function () {
    zerog = zerog + 1;
    scoreg.innerHTML = zerog;
}

btn2g.onclick = function () {
    zerog = zerog + 2;
    scoreg.innerHTML = zerog;
}

btn3g.onclick = function () {
    zerog = zerog + 3;
    scoreg.innerHTML = zerog;
}



