const button = document.querySelector('button')
const firstNameButton =  document.querySelector('#butt2')
const submitBtn  = document.querySelector('#textFieldBtn')
const form =document.querySelector('form')
const span1 =  document.querySelector('#flick')
    const span2 =  document.querySelector('#year')

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

    const mainList =  document.querySelector('#mainList')
    
    const cspan1 = document.createElement('span')
    const cspan2 = document.createElement('span')

    
    cspan1.textContent =  textField.value + " "
    cspan1.style.color = "blue" 
    cspan2.textContent = textField2.value + " "
    cspan2.style.color="red"

    

    const item = addList(cspan1,cspan2)

    
   
    
    mainList.appendChild(item)


    form.reset()
    
}

function  addList(span1, span2){
    const item =  document.createElement('li')
    item.appendChild(span1)
    item.appendChild(span2)
    return item
}




button.addEventListener('click',update)
firstNameButton.addEventListener('click',updateFirstName)
submitBtn.addEventListener('click',submitF)


  
