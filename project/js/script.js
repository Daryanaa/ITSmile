'use strict';

let number="";
let bet="";

const mydb={
    passn:[
        "123d",
        "qwerty",
        "15",
        "zzz"
    ]
    
}

const passdb={
    passw:[
        "Вася",
        "Петя",
        "Олег Ляшко",
        "Какой-то чувак",
        "Яяяя"
    ]
}

let list = document.querySelector(".promo__interactive-list");
let formadd = document.querySelector(".add");
let input = formadd.querySelector(".adding__input");

formadd.addEventListener("submit", (event)=>{
    event.preventDefault()
    let stavoshka = input.value
    if (stavoshka){
        if (stavoshka===mydb.passn[1]) {
            passdb.passw.push(passdb.passw[1]);
        }
        if (stavoshka===mydb.passn[2]) {
            passdb.passw.push(passdb.passw[2]);
        }
        if (stavoshka===mydb.passn[3]) {
            passdb.passw.push(passdb.passw[3]);
        }
        if (stavoshka===mydb.passn[4]) {
            passdb.passw.push(passdb.passw[4]);
        }
    }
    casinoList(passdb.passw, list);
    formadd.reset();
    
});

function playAzino() {
    let pass="";
    

    while(pass!=null){
        pass=prompt("Pass?");
        for (let key in mydb.passn){
            if (pass==key){
                while(true){
                    number=prompt("Number?")
                    if(number==null){
                        break;
                    }

                    bet=prompt("Bet?")

                    mydb.passn[key][number]=bet;
                }
                break;
            }
        }
    }
    let a=Math.floor(Math.random()*37);
    for(let keyy in mydb.passn){
        if(typeof(mydb.passn[keyy])=='object'){
            for(let d in mydb.passn[keyy]){
                if(a==d){
                    console.log(`player ${keyy} win ${mydb.passn[keyy][d]*10} points`);
                }else{
                    console.log(`player ${keyy} lose. The number was ${a}`);
                    
                }
            }
        }
    }
}

function casinoList(player, listt) {
    listt.innerHTML="";
    player.forEach((name1)=>{
        listt.innerHTML+=`<li class="promo__interactive-item">${name1} ${number} ${bet}
        <div class="delete"></div>
        </li>`
    });
};



function dellete () {
        let del = document.querySelectorAll(".delete")
        del.forEach((e, i)=>{
        e.addEventListener("click", (event)=>{
            e.parentElement.remove();
            DB.st.splice(i, 1);
        });
    }); 
};

dellete();