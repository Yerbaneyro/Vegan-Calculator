let increaseDays = document.querySelector('#add-days')
let decreaseDays = document.querySelector('#sub-days')
let increaseMonths = document.querySelector('#add-months')
let decreaseMonths = document.querySelector('#sub-months')
let increaseYears = document.querySelector('#add-years')
let decreaseYears = document.querySelector('#sub-years')
let veganSwitch = document.querySelector('#vegan-switch')


let days = 0
let months = 0
let years = 0

let animals = 0
let carbon = 0
let forests = 0
let water = 0

let switcherType = 0

document.querySelector('#days').innerHTML = days
document.querySelector('#months').innerHTML = months 
document.querySelector('#years').innerHTML = years

document.querySelector('#animals-score').innerHTML = animals
document.querySelector('#carbon-score').innerHTML = carbon
document.querySelector('#forests-score').innerHTML = forests
document.querySelector('#water-score').innerHTML = water

//DAYS incrementation & decrementation//
increaseDays.addEventListener('click',() => {
    if(days < 31){
        document.querySelector('#days').innerHTML = ++days
        modeCheck()
    }
})

decreaseDays.addEventListener('click',() => {
    if(days > 0){
        document.querySelector('#days').innerHTML = --days
        modeCheck()
    }
})

//MONTHS incrementation & decrementation//
increaseMonths.addEventListener('click',() => {
    if(months < 12){
    document.querySelector('#months').innerHTML = ++months
    modeCheck()
    }
})

decreaseMonths.addEventListener('click',() => {
    if(months > 0){
    document.querySelector('#months').innerHTML = --months  
    modeCheck()
    }
})

//YEARS incrementation & decrementation//
increaseYears.addEventListener('click',() => {
    document.querySelector('#years').innerHTML = ++years
    modeCheck()
    }
)

decreaseYears.addEventListener('click',() => {
    if(years > 0){
    document.querySelector('#years').innerHTML = --years
    modeCheck()
    }
})

//Ipact//
function Animals() {
    animals = (1 * days) + (31 * months) + (365 * years) 
    document.querySelector('#animals-score').innerHTML = animals.toFixed(1)
}

function Carbon() {
    carbon = (9 * days) + (279 * months) + (3348 * years)
    document.querySelector('#carbon-score').innerHTML = carbon.toFixed(1)
}

function Forests() {
    forests = (3 * days) + (93 * months) + (1116 * years)
    document.querySelector('#forests-score').innerHTML = forests.toFixed(1)
    console.log('forest')
}

function Water() {
    water = (4164 * days) + (129084 * months) + (1549008 * years)
    document.querySelector('#water-score').innerHTML = water.toFixed(1)
}

//Vegetarian option//
function vegetarianAnimals() {
    animals = (0.5 * days) + (15.5 * months) + (182 * years) 
    document.querySelector('#animals-score').innerHTML = animals.toFixed(1)
}

function vegetarianCarbon() {
    carbon = (1.8 * days) + (54.8 * months) + (657.5 * years)
    document.querySelector('#carbon-score').innerHTML = carbon.toFixed(1)
}

function vegetarianForests() {
    forests = (0.6 * days) + (18.3 * months) + (219.2 * years)
    document.querySelector('#forests-score').innerHTML = forests.toFixed(1)
    console.log('forest')
}

function vegetarianWater() {
    water = (416.4 * days) + (12908 * months) + (154900 * years)
    document.querySelector('#water-score').innerHTML = water.toFixed(1)
}

//Function to check with mode is current//
function modeCheck(){
    if(switcherType == 1) {
        vegetarianAnimals()
        vegetarianCarbon()
        vegetarianForests()
        vegetarianWater()
    }else {
        Animals()
        Carbon()
        Forests()
        Water()
    }
}

veganSwitch.addEventListener('click', () => {
    if(switcherType == 0) {
        vegetarianAnimals()
        vegetarianCarbon()
        vegetarianForests()
        vegetarianWater()
        return switcherType = 1
    }else {
        Animals()
        Carbon()
        Forests()
        Water()
        return switcherType = 0
    }
})