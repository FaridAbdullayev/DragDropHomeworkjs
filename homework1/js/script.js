let doneList = document.getElementById("doneTaskList");

let listItems = document.querySelectorAll(".task-list li");

let dropAreas = document.querySelectorAll(".drop-area");

let todoList = document.getElementById("todoTaskList");


listItems.forEach((elem,index )=>{
    elem.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("index", index)
    })
})


dropAreas.forEach(elem =>{
    elem.addEventListener("dragover",function(e){
        e.preventDefault();
        
    })
})


dropAreas.forEach(elem => {
    elem.addEventListener("drop", function (e) {
       
        let index = e.dataTransfer.getData("index");
        elem.querySelector("ul").appendChild(listItems[index])

        // let index = e.dataTransfer.getData("index");
        // let draggedItem = listItems[index];

        // if (elem === doneList) {
        //     draggedItem.classList.add("red-bg");
        // } else if (elem === todoList) {
        //     draggedItem.classList.remove("red-bg");
        // }

        // elem.querySelector("ul").appendChild(draggedItem);
      
    })
})











let icon = document.getElementById("iconmessage");
let inputmultiple = document.getElementById("fileInput");
icon.addEventListener("click",function(){
    inputmultiple.click();
})