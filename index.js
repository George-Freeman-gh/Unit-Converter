const metersEl = document.getElementById("meters")
const litersEl = document.getElementById("liters")
const kilosEl = document.getElementById("kilos")
const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("convert-btn")

let inputValue = 20

inputEl.value = 20



metersEl.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`

    litersEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`

    kilosEl.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`








buttonEl.addEventListener("click", () => {
    inputValue = inputEl.value
    metersEl.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`

    litersEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`

    kilosEl.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`
})




