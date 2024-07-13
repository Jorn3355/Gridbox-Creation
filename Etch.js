const container = document.querySelector(".container")
const printBtn = document.querySelector("#print")
const resetBtn = document.querySelector("#reset")
const contWidth = container.clientWidth
const contHeight = container.clientHeight

printBtn.addEventListener("click", () => {
    const boxCount = parseInt(prompt("Choose your grid size all the way up to 64"))
    if (boxCount > 64){
        alert("The maximum number of boxes we can generate is 64.")
    } else {
        if (Number.isInteger(boxCount)){
            for(let i = 1; i <= boxCount*boxCount; i++){
                let newItem = document.createElement("div")
                newItem.classList.add("box")
                newItem.setAttribute("style", `width:${contWidth/boxCount}px;`)
                container.appendChild(newItem)
            }
        } else {
            alert("Moron, input a regular number.")
        }
    }
})

container.addEventListener("mouseover", (item) => {
    if (item.target.matches('.box')) {
        item.target.classList.add('active')
    }
})

resetBtn.addEventListener("click", () => {
    while(container.firstChild){
        container.removeChild(container.lastChild)
    }
})
