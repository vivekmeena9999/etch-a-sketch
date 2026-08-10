let container = document.querySelector(".container")
let btn = document.getElementById("grid-set")
btn.addEventListener("click", ()=>{setGrid(true)})

function gridMaker(num) {
    for (let i = 1; i <= (num * num); i++) {
        let div = document.createElement("div")
        div.style.width = `${650 / num}px`
        div.style.height = `${650 / num}px`
        //div.style.border = "0.5px solid"
        //div.style.borderColor = "white"
        div.style.boxSizing = "border-box"



        div.classList.add(`_${i}`)
        container.appendChild(div)
    }
}
function cleaner(){
    
    container.replaceChildren()


}
function colorChange(event) {
   
    elemClass = event.target.classList
    if (elemClass != "container") {
        let elem = document.querySelector(`.${elemClass}`)
        elem.style.backgroundColor = randomColorGenerator();
    }
}
function setGrid(bool) {
    if (bool) {
        cleaner()
        let num = prompt("Provide the desired Square per Grid")
        if (num > 100) {
            let num = prompt("Value must be smaller than 100, enter again")

        }
        gridMaker(Number(num));
    }
    else{
        gridMaker(16);
    }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomColorGenerator(){
    return `rgb( ${getRandomInt(0,255)} , ${getRandomInt(0,255)},${getRandomInt(0,255)} )`
}
setGrid(false)
container.addEventListener("mouseover", colorChange)