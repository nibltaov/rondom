
let btn = document.querySelector('.pople-random'),
    people = document.querySelector('.people'),
    teamOne = [],
    teamTwo = [],
    teamDivOne = document.querySelector('.com__one-list'),
    teamDivTwo = document.querySelector('.com__two-list');
btn.addEventListener('click', () => {
    teamOne = [];
    teamTwo = [];
    teamDivOne.innerHTML = '';
    teamDivTwo.innerHTML = '';
    let peopleArray = people.value.split(' ');
    teamTwo = peopleArray;
    toDistribute(peopleArray);
    create(teamOne, teamTwo);
})

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
let ww = '';
people.addEventListener('keydown', function (e) {
    let x = new RegExp("^.*[^A-zА-яЁё].*$");
    if (x.test(e.key) || e.keyCode == 13) {
        e.key != '  ' && trueOrfalse == true ? e.preventDefault() : ''; 
    }
})

function create(teamOne, teamTwo, i = 0) {
    let addOne = document.createElement("div"), 
        addTwo = document.createElement("div"),  
        addUserOne = document.createTextNode(teamOne[i]), 
        addUserTwo = document.createTextNode(teamTwo[i]);
    if(teamOne[i] != false || teamOne[i] != undefined) {
        addOne.appendChild(addUserOne);
        teamDivOne.appendChild(addOne);
    }
    if(teamTwo[i] != false || teamTwo[i] != undefined) {
        addTwo.appendChild(addUserTwo);
        teamDivTwo.appendChild(addTwo);
    }
    if(teamOne.length-1 > i) {
        i++
        setTimeout(() => create(teamOne, teamTwo, i), 200);
    }
}

// people1 people2 people3 people4 people5 people6 people7 people8 people9 people10


function out(){
    console.log(teamOne);
    console.log(teamTwo);
}