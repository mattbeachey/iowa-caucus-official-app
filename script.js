


const sanders = document.getElementById("sanders")
const warren = document.getElementById("warren")
const biden = document.getElementById("biden")
const buttegieg = document.getElementById("buttegieg")
const uncommited = document.getElementById("uncommited")


const sandersT = document.getElementById("sandersT")
const warrenT = document.getElementById("warrenT")
const bidenT = document.getElementById("bidenT")
const buttegiegT = document.getElementById("buttegiegT")
const uncommitedT = document.getElementById("uncommitedT")

valueSanders = 0
valueWarren = 0
valueBiden = 0
valueButtegieg = 0
valueUncommited = 0

function addSanders () {
valueSanders--
sandersT.innerText = `Sanders: ${valueSanders}`
}
function addWarren() {
warrenT.innerText = `Warren: 3`
}
function addBiden () {
valueBiden += 10
bidenT.innerText = `Biden: ${valueBiden}`
}
function addButtegieg () {
valueButtegieg += 20
buttegiegT.innerText = `Buttegieg: ${valueButtegieg}`
}
function addUncommited () {
valueSanders--
sandersT.innerText = `Sanders: ${valueSanders}`
}

