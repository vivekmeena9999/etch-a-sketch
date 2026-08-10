let container = document.querySelector(".container")
for (let i=1; i<=256;i++){
    let div= document.createElement("div")
    div.style.width="31.25px"
    div.style.height="31.25px"
    div.style.border="1px solid"
    div.style.borderColor="black"
    div.style.boxSizing="border-box"
    
// For next vivek:- brother i am not able to understand the formula for a perfect fit, like the relation between the no. of grids that a user wants and the percentage to set fot it like for 16x16 the percentage is 5.5% like why and how?
// solved the box sizing property's value was set to borderBox instead of border-box
    
    div.classList.add(`_${i}`)
    container.appendChild(div)
}
function colorChange(event){
    console.log(event.target.classList)
elemClass= event.target.classList
if (elemClass!= "container"){
let elem = document.querySelector(`.${elemClass}`)
elem.style.backgroundColor="red";}
}
container.addEventListener("mouseover",colorChange )