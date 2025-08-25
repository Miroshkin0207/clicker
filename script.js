function back() {
    window.location.href = "https://miroshkin0207.github.io/miroshkin"
}

function buttonClick() {
    let total = document.querySelector("#total").innerHTML++
}

const table = [
    { name: "Итачи", score: 1000 },
    { name: "Обито", score: 485 },
    { name: "Кагуя", score: 1581 },
    { name: "Мадара", score: 1500 },
    { name: "Хамура", score: 898 }
]
table.sort((a, b) => b.score - a.score)

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