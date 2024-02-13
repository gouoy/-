let TaskInput = document.getElementById("task-input")
console.log(TaskInput)
let AddButton = document.getElementById("AddButton")
let TaskList = []
AddButton.addEventListener("click", addTask)

function addTask(){
   let TaskContent = TaskInput.value;
   TaskList.push(TaskContent);
   console.log(TaskList);
}
function render() {
    let resultHTML = ``;
    for(let i=0;i<TaskList.length;i++){
        resultHTML += `<div class="task">
        <div>${TaskList[i]}</div>
        <div>
            <button>check</button>
            <button>delete</button>
        </div>
    </div>`
    }
 document.getElementById("task-board").innerHTML = resultHTML;

} 
        
addTask(render);
   