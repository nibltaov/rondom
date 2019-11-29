
let btn = document.querySelector('.pople-random'),
    people = document.querySelector('.people'),
    teamOne = [],
    teamTwo = [],
    teamDivOne = document.querySelector('.com__one-list'),
    teamDivTwo = document.querySelector('.com__two-list');
people.addEventListener('input', () => {
    people.value.length > 0 ? btn.disabled = false : btn.disabled = true;
})
btn.addEventListener('click', () => {
    btn.disabled = true;
    teamOne = [];
    teamTwo = [];
    teamDivOne.innerHTML = '';
    teamDivTwo.innerHTML = '';
    let peopleArray = people.value.trim().split(' ');
    if(peopleArray.length > 1) {
        peopleArray = peopleArray.filter(e => e != false);
        teamTwo = peopleArray;
        toDistribute(peopleArray);
        create(teamOne, teamTwo);
    }
    setTimeout(function(){
        btn.disabled = false;
    }, 3000);
})
function FilterArray(value) {
   return value == false
}
function toDistribute(peopleArray) {
    let halfPeople = peopleArray.length / 2;
    for (let i = 0; i < halfPeople; i++) {
        let ranNum = getRandomInt(peopleArray.length);
        teamOne.push(peopleArray[ranNum]);
        teamTwo.splice(ranNum, 1);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function create(teamOne, teamTwo, i = 0) {            
    if(teamOne[i] != false && teamOne[i] != undefined && teamOne[i] != ' ') {
        let addOne = document.createElement("div"), addUserOne = document.createTextNode(teamOne[i]);
        addOne.appendChild(addUserOne);
        teamDivOne.appendChild(addOne);
    }
    if(teamTwo[i] != false && teamTwo[i] != undefined && teamTwo[i] != ' ') {
        if(teamTwo[i] != undefined) {let addTwo = document.createElement("div"), addUserTwo = document.createTextNode(teamTwo[i]);
        addTwo.appendChild(addUserTwo);
        teamDivTwo.appendChild(addTwo);}
    }
    if(teamOne.length -1 > i) {
        setTimeout(() => create(teamOne, teamTwo, i), 200);
        i++;
    }
}

// people1 people2 people3 people4 people5 people6 people7 people8 people9 people10 


// function out(){
//     console.log(teamOne);
//     console.log(teamTwo);
// }