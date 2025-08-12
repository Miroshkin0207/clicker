function back() {
    window.location.href = "https://miroshkin0207.github.io/miroshkin"
}

function buttonClick() {
    let total = document.querySelector("#total").innerHTML++
}

const names = []
const scores = []

for (let i = 0; i < names.length; i++) {
    let line = document.createElement("div")
    line.classList.add("line")

    let name = document.createElement("div")
    name.classList.add("names")
    name.innerHTML = i + 1 + ". " + names[i]  
    line.appendChild(name)

    let score = document.createElement("div")
    score.classList.add("scores")
    score.innerHTML = scores[i]
    line.appendChild(score)
    
    document.querySelector(".rect").appendChild(line)

}
