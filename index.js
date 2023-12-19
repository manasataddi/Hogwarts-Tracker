let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
let countEl = document.getElementById("count-el")
let count = 0
let countArray = [];

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countArray.push(count)
    saveEl.textContent = "Previous entries: " + (countArray.join(' - '));
    updateSum()
    count = 0
    countEl.textContent = count
}

function remove(){
    if (countArray.length <= 0) {
        return
    }

    countArray.pop()

    saveEl.textContent = "Previous entries: " + (countArray.join(' - '));
    updateSum()
}

function updateSum(){
    let sum = 0;
    for (let i = 0; i< countArray.length; i++){
        sum += countArray[i];
    }    

    
    sumEl.textContent = "Sum of entries: " +  sum
}