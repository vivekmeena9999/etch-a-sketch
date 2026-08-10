let container = document.querySelector(".container")
let btn = document.getElementById("grid-set")
btn.addEventListener("click", ()=>{setGrid(true)})
let passesArr= []
function gridMaker(num) {
    passesArr= Array((num*num)).fill(null)
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
        let elemID= elemClass[0].slice(1);
        if(passesArr[elemID] <10 ){
        passesArr[elemID] += 1
        }
        let elem = document.querySelector(`.${elemClass}`)
        elem.style.backgroundColor = randomColorGenerator(elemID);
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
function randomColorGenerator(index){
    let factor = (10 - passesArr[index])/10
    if(factor >= 0){
    return `rgb( ${getRandomInt(0,255) *factor}
     , ${getRandomInt(0,255)* factor}
     ,${getRandomInt(0,255)* factor} )`
    }
    return 'rgb(0,0,0)'
}
setGrid(false)
container.addEventListener("mouseover", colorChange)