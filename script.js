const form = document.querySelector('#form-habits'),
nlwSetup = new NLWSetup(form),
button = document.getElementById("add")

function add() {
    const date = new Date(),
    today = date.toLocaleDateString('pt-br').slice(0, -5),
    dayExists = nlwSetup.dayExists(today)
    if(dayExists) {
        alert(`🔴 Dia ${today} já incluso!`)
        return
    }
    nlwSetup.addDay(today)
    alert(`🟢 Dia ${today} adicionado!`)
}

function save() {
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

button.addEventListener('click', add)
form.addEventListener("change", save)

nlwSetup.setData(data)
nlwSetup.load()