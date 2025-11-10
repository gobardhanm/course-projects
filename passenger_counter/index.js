let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;

function increment(){

    count += 1;
    countEl.textContent = count
}

function save(){
    let entries = count + " - "
    saveEl.textContent += entries
    console.log(count)
    countEl.textContent = 0
    count = 0

}
