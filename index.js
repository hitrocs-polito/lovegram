// Remember to import the data and Dog class!
import {dogs} from "/data.js" 
import {Dog} from "/Dog.js" 

document.getElementById('liked').addEventListener('click', function(){
    document.getElementById("liked-comment").style.display = "flex"
    setTimeout(()=>{
        newDog = getNewDog()
        render()
        document.getElementById("liked-comment").style.display = "none"
        },1500)
    
})

document.getElementById('rejected').addEventListener('click', function(){
    document.getElementById("rejected-comment").style.display = "flex"
    setTimeout(()=>{
        newDog = getNewDog()
        render()
        document.getElementById("rejected-comment").style.display = "none"
        },1500)
})

function getNewDog() {
    if (dogs.length === 0){
        document.getElementById('main-section').innerHTML = `<h3>There are no more dogs in your area</h3>`
        document.getElementById('like-cross-button').style.display = 'none'
    }
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function render(){
    document.getElementById('main-section').innerHTML = newDog.getDogHtml()

}

let newDog = getNewDog()

render()

