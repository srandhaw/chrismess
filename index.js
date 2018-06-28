var count = 0
var count2  = 0



class App{

constructor(){
    

    //  Variables
    const button = document.querySelector('button')
const firstNameButton =  document.querySelector('#butt2')
const submitBtn  = document.querySelector('#textFieldBtn')
this.form =document.querySelector('form')
const span1 =  document.querySelector('#flick')
    const span2 =  document.querySelector('#year')


this.listArray = []
this.favoriteArray = []

//Event listeners
button.addEventListener('click',this.update)
    firstNameButton.addEventListener('click',this.updateFirstName)
    submitBtn.addEventListener('click',(ev)=>{
        ev.preventDefault()
    this.submitF(ev)
    })

}




update(){
    const header = document.querySelector('h1')
    if(count%2==0)
    header.textContent = "Christmas"
    else
    header.textContent = "Chrismess"
    count++
}



    updateFirstName(){
const header  = document.querySelector("#firstName")
if(count2%2==0)
header.textContent = "Chris Evans"
else
header.textContent = "Chris Hemsworth"
count2++
}


submitF(){
    
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

    

    const item = this.addList(cspan1,cspan2)

    const favoriteBtn  = document.createElement('button')
    favoriteBtn.textContent = "Favorite"
    item.appendChild(favoriteBtn)
    
    favoriteBtn.addEventListener('click',(ev)=>{
        this.form.reset()
        var favAdd  = true
            favAdd = item.classList.toggle('fav')
            if(favAdd==false){
                var k=0
                var del=0
            this.favoriteArray.forEach(function(element){
                
                if(element == cspan1.textContent + cspan2.textContent){

del=k
                }
                k++
            })
            this.favoriteArray.splice(del,1)
            }
        
if(favAdd){
        this.favoriteArray.forEach(function(element){
            
            if(element == (cspan1.textContent + cspan2.textContent) ){
                
                favAdd = false
            }
        })
    }
        if(favAdd){this.favoriteArray.push(cspan1.textContent + cspan2.textContent)}
        
        console.log(this.favoriteArray)
    
    
    })

    const delBtn = document.createElement('button')
    delBtn.textContent = "Delete"
    delBtn.addEventListener('click',(ev)=>{
        this.form.reset()
        const itemTemp = document.createElement('li')
        itemTemp.appendChild(cspan1)
        itemTemp.appendChild(cspan2)
        itemTemp.appendChild(delBtn)
        itemTemp.appendChild(favoriteBtn)
        this.listArray.splice(this.listArray.indexOf(cspan1.textContent + cspan2.textContent),1)
        console.log(this.listArray)
        try{
        
            mainList.removeChild(mainList.childNodes[this.listArray.indexOf(cspan1.textContent + cspan2.textContent)])
        }catch(err){

        }
        
        
        return
    })
    item.appendChild(delBtn)  

    

    
    
    
    mainList.appendChild(item)


    this.form.reset()
    
}

addList(span1, span2){
    const item =  document.createElement('li')
    item.appendChild(span1)
    item.appendChild(span2)
    this.listArray.push(item.textContent)
    console.log(this.listArray)
    
    return item
}


}

const app = new App()











