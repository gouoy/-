// 유저가 값을 입력한다
// + 버튼을 누르면, 할 일이 추가된다.
// delete 버튼을 누르면 할 일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑 줄이 간다. 
//1. check 버튼을 클릭하는 순간 true false 
//2. true면 끝난 걸로 간주하고 밑줄 보여주기
//3. False면 안 끝난 걸로 간주하고 그대로 
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남 탭은, 끝난 아이템만, 진행중 탭은 진행중 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴 

let TaskInput = document.getElementById("task-input");
console.log(TaskInput);
let AddButton = document.getElementById("AddButton");

let TaskList = []
AddButton.addEventListener("click", addTask)

function addTask() {
   let task = {
     id: RandomIDGenerate(),
     TaskContent: TaskInput.value, 
     isComplete:false
   }
   TaskList.push(task);
   console.log(TaskList);
   render(); 
}

function render() {
    let resultHTML = ``;
    for(let i=0;i<TaskList.length;i++){
        if (TaskList[i].isComplete==true){
            resultHTML += `<div class="task">
         <div class="taskDone">${TaskList[i].TaskContent}</div>
         <div>
            <button onclick="toggleComplete('${TaskList[i].id}')"><i onclick="myFunction(this)" class="fa-thumbs-up"></i></button>
            <button onclick="deleteTask('${TaskList[i].id}')">delete</button>
         </div>;`
        }
        else{
          resultHTML += `<div class="task">
          <div> ${TaskList[i].TaskContent}</div>
          <div>
             </div><button onclick="toggleComplete('${TaskList[i].id}')"></button>
             <button onclick="deleteTask('${TaskList[i].id}', x.classList.toggle("fa-thumbs-down"))">delete</button> 
            
          </div>
          </div>`;   
        }
    } 
    document.getElementById("task-board").innerHTML = resultHTML; 
} 

//체크하는 거 
function toggleComplete(id){
    for(let i=0;i<TaskList.length;i++){
        if(TaskList[i].id ==id){
            TaskList[i].isComplete= !TaskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(TaskList);
}

function RandomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);
}

function deleteTask(id){
    TaskList = TaskList.filter(task => task.id !== id);
    render();
    console.log("Task deleted:", id);
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }