const button = document.querySelector('button')
const firstNameButton =  document.querySelector('#butt2')
const submitBtn  = document.querySelector('#textFieldBtn')
const form =document.querySelector('form')
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
header.textContent = "Chris Evans"
else
header.textContent = "Chris Hemsworth"
count2++
}


const submitF  =  function(){
    
    const textField = document.querySelector("#textField")
    const textField2  =  document.querySelector("#textField2")
    
    event.preventDefault()

    const list =  document.querySelector('#flicks')
    const item =  document.createElement('li')
    item.textContent =  textField.value
    list.appendChild(item)
    list2(textField2.value)


    form.reset()
    
}

const list2 = function(child){

const item =   document.createElement('li')
item.textContent = child
const list = document.querySelector('#year')
list.appendChild(item)


}


button.addEventListener('click',update)
firstNameButton.addEventListener('click',updateFirstName)
submitBtn.addEventListener('click',submitF)


  
