const inputBox = document.getElementById("inputbox")
const addBtn = document.getElementById("button")

const listContainer = document.getElementById("list-container")
addBtn.addEventListener('click',function(addTask){
    if(inputBox.value === ""){
        document.querySelector(".error").style.display="block"
        document.querySelector(".list-container").style.display = "none"
    }
    else{
        document.querySelector(".error").style.display="none"
        //document.querySelector(".list-container").style.display = "block"

        let li = document.createElement('li')
        li.textContent = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.textContent = "\u00d7"
        li.appendChild(span)
        
    }
    inputBox.value = ""
    saveData()
})
listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
} 
function showList(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showList()