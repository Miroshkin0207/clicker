function back() {
    window.location.href = "https://miroshkin0207.github.io/miroshkin"
}

let button = document.querySelector("#mainButton")
button.addEventListener("touchstart", touchStart)
button.addEventListener("mousedown", touchStart)
button.addEventListener("touchend", touchEnd)
button.addEventListener("mouseup", touchEnd)

function touchStart() {
    button.style.backgroundColor = "rgb(90, 116, 51)"
}

function touchEnd() {
    button.classList.remove("buttonClicked")
    button.style.backgroundColor = "greenyellow"
    document.querySelector("#total").innerHTML++
}

const table = [

]
table.sort((a, b) => b.score - a.score)

const help = document.querySelector(".help")
document.querySelector(".rect").removeChild(help)
for (let i = 0; i < table.length; i++) {
    let line = document.createElement("div")
    line.classList.add("line")

    let name = document.createElement("div")
    name.classList.add("names")
    name.innerHTML = i + 1 + ". " + table[i].name
    line.appendChild(name)

    let score = document.createElement("div")
    score.classList.add("scores")
    score.innerHTML = table[i].score
    line.appendChild(score)
    
    document.querySelector(".rect").appendChild(line)
}
document.querySelector(".rect").appendChild(help)