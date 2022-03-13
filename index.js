let counter = 0
let previousEl = document.getElementById("previous-el")
function increment(){
    counter+= 1
    document.getElementById("count").innerText=counter
}
function save(){
    let savedStr = " " + counter + " - "
    previousEl.innerText += savedStr 

    document.getElementById("count").innerText= counter = 0
    }