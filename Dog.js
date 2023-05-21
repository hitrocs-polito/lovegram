// Create the Dog class here
import {dogs} from "/data.js" 
class Dog{
    constructor(data){
        Object.assign(this, data);
    }
    
    getDogHtml(){
        const {name, avatar, age, bio} = this
        return `
        <img class="main-photo" src="${avatar}">
        <div class="user-info">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
        </div>
        <div class="liked-comment" id="liked-comment">
            <span>LIKE</span>
        </div>
        
        <div class="rejected-comment" id="rejected-comment">
            <span>NOPE</span>
        </div>`
        }   
}

export {Dog}
