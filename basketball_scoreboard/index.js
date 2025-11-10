let homeCnt = document.getElementById("counter-home")
let guestCnt = document.getElementById("counter-guest")
let leadTeam = document.getElementById("lead-team")

let homeCount = 0
let guestCount = 0

function add1Home(){
    homeCount += 1;
    homeCnt.textContent = homeCount
}

function add1Guest(){
    guestCount += 1;
    guestCnt.textContent = guestCount
}

function add2Home(){
    homeCount += 2;
    homeCnt.textContent = homeCount
}

function add2Guest(){
    guestCount += 2;
    guestCnt.textContent = guestCount
}

function add3Home(){
    homeCount += 3;
    homeCnt.textContent = homeCount
}

function add3Guest(){
    guestCount += 3;
    guestCnt.textContent = guestCount
}

// if(homeCount > guestCount){
//     leadTeam.textContent = "Home team is in the Lead"
// }else if(homeCount < guestCount){
//     leadTeam.textContent = "Guest team is in the Lead"
// }else if (homeCount === guestCount){
//     leadTeam.textContent = "It's a Tie"
// }

function newGame(){
    homeCount = 0
    guestCount = 0

    homeCnt.textContent = homeCount
    guestCnt.textContent = guestCount
}