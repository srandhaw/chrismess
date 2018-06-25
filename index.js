const button = document.querySelector('button')
var count = 0

const update = function(){
    const header = document.querySelector('h1')
    if(count%2==0)
    header.textContent = "changed"
    else
    header.textContent = "Chrismess"
    count++
}

button.addEventListener('click',update)