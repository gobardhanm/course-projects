const input = document.getElementById("input")
const btn = document.getElementById("btn")
const lengthUnit = document.getElementById("length-unit")
const volumeUnit = document.getElementById("volume-unit")
const massUnit = document.getElementById("mass-unit")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

lengthUnit.textContent = "No Input"
volumeUnit.textContent = "No Input"
massUnit.textContent = "No Input"

btn.addEventListener("click", function(){
    lengthUnit.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value /3.281).toFixed(3)} meters`

    volumeUnit.textContent = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters`

    massUnit.textContent = `${input.value} kilograms = ${(input.value * 2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilograms`
})

