const button = document.querySelector('button')
const firstNameButton =  document.querySelector('#butt2')
const submitBtn  = document.querySelector('#textFieldBtn')
var count = 0
var count2  = 0


const update = function(){
    const header = document.querySelector('h1')
    if(count%2==0)
    header.textContent = "Christmas"
    else
    header.textContent = "Chrismess"
    count++
}



const updateFirstName = function(){
const header  = document.querySelector("#firstName")
if(count2%2==0)
header.textContent = "Sehaj"
else
header.textContent = "Sehajbir"
count2++
}


const submitF  =  function(){
    const header = document.querySelector("#lastName")
    const textField = document.querySelector("#textField")
    header.textContent = textField.value
    event.preventDefault()
}


button.addEventListener('click',update)
firstNameButton.addEventListener('click',updateFirstName)
submitBtn.addEventListener('click',submitF)


  
