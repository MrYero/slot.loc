let doing = false;

let spin = [new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3")];
let coin = [new Audio("sounds/coin.mp3"),new Audio("sounds/coin.mp3"),new Audio("sounds/coin.mp3")]
let win = new Audio("sounds/win.mp3");
let lose = new Audio("sounds/lose.mp3");
let money = 11100;
let status = document.getElementById("status")
let mon = document.getElementById("money")

function doSlot(){

    if (doing){return null;}
    doing = true;
    if(money<500){
        alert("add money")
        doing=false;
    }else

    var numChanges = randomInt(1,9)*9
    var numeberSlot1 = numChanges+randomInt(1,9)
    var numeberSlot2 = numChanges+1*7+randomInt(1,9)
    var numeberSlot3 = numChanges+2*7+randomInt(1,9)
    var numeberSlot4 = numChanges+3*7+randomInt(1,9)
    var numeberSlot5 = numChanges+4*7+randomInt(1,9)

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    var i5 = 0;

    var sound = 0;
    status.innerHTML = "SPINNING"
    slot1 = setInterval(spin1, 50);
    slot2 = setInterval(spin2, 50);
    slot3 = setInterval(spin3, 50);
    slot4 = setInterval(spin4, 50);
    slot5 = setInterval(spin5, 50);

    function spin1(){
        i1++;
        if (i1>=numeberSlot1){
            coin[0].play()
            clearInterval(slot1);
            return null;
        }
        slotTile = document.getElementById("slot1");
        if (slotTile.className=="a7"){
            slotTile.className = "a0";
        }
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function spin2(){
        i2++;
        if (i2>=numeberSlot2){
            coin[1].play()
            clearInterval(slot2);
            return null;
        }
        slotTile = document.getElementById("slot2");
        if (slotTile.className=="a7"){
            slotTile.className = "a0";
        }
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function spin3(){
        i3++;
        if (i3>=numeberSlot3){
            coin[2].play()
            clearInterval(slot3);
            return null;
        }
        slotTile = document.getElementById("slot3");
        if (slotTile.className=="a7"){
            slotTile.className = "a0";
        }
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function spin4(){
        i4++;
        if (i4>=numeberSlot4){
            coin[1].play()
            clearInterval(slot4);
            return null;
        }
        slotTile = document.getElementById("slot4");
        if (slotTile.className=="a7"){
            slotTile.className = "a0";
        }
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function spin5(){
        i5++;
        if (i5>=numeberSlot5){
            coin[0].play()
            clearInterval(slot5);
            testWin();
            return null;
        }
        slotTile = document.getElementById("slot5");
        if (slotTile.className=="a7"){
            slotTile.className = "a0";
        }
        sound++;
        if (sound===spin.length){
            sound=0;
        }
        spin[sound].play();
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }
}


function testWin() {
    var slot1 = document.getElementById("slot1").className
    var slot2 = document.getElementById("slot2").className
    var slot3 = document.getElementById("slot3").className
    var slot4 = document.getElementById("slot4").className
    var slot5 = document.getElementById("slot5").className

    if  (slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === slot5){
        win.play();
        status.innerHTML = "YOU WIN JACKPOT!";
        money=money+100000;
        mon.innerHTML = money;
    }else  if(
             (slot1 === slot2 && slot2 === slot3 && slot3 === slot4)||
             (slot1 === slot2 && slot2 === slot3 && slot3 === slot5)||
             (slot1 === slot3 && slot3 === slot4 && slot4 === slot5)||
             (slot1 === slot2 && slot2 === slot4 && slot4 === slot5)||
             (slot2 === slot3 && slot3 === slot4 && slot4 === slot5)
             )
    {
        win.play();
                status.innerHTML = "YOU WIN MINI JACKPOT!"
        money=money+20000;
        mon.innerHTML = money;
    }else
       if((slot1 === slot2 && slot2 === slot3)||
              (slot1 === slot2 && slot2 === slot4)||
              (slot1 === slot2 && slot2 === slot5)||
              (slot1 === slot3 && slot3 === slot4)||
              (slot1 === slot3 && slot3 === slot5)||
              (slot1 === slot4 && slot4 === slot5)||
              (slot2 === slot3 && slot3 === slot4)||
              (slot2 === slot3 && slot3 === slot5)||
              (slot2 === slot4 && slot4 === slot5)||
              (slot3 === slot4 && slot4 === slot5)){
           win.play();
        status.innerHTML = "YOU WIN!"
           money=money+1000;
           mon.innerHTML = money;
    }  else{
           lose.play();
                status.innerHTML = "YOU LOST!"}
    money=money-500;
    mon.innerHTML = money;
    doing = false;

    // console.log(slot1);
    // console.log(slot2);
    // console.log(slot3);
    // console.log(slot4);
    // console.log(slot5);
    // console.log("__________")
}

function randomInt(min, max){
    return Math.floor((Math.random() * (max-min+1)) + min);
}