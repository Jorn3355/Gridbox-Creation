const container = document.querySelector(".container")
const length = document.querySelector("#length")
const printBtn = document.querySelector("#print")

printBtn.addEventListener("click", () => {
    let boxCount = parseInt(length.value)
    if (Number.isInteger(boxCount)){
        for(let i = 0; i <= boxCount**2; i++){
            let newItem = document.createElement("div")
            newItem.classList.add("box")
            container.appendChild(newItem)
        }
    } else {
        alert("Moron, input a regular number.")
    
}})



