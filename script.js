const box=document.getElementById("box");
const task=document.getElementById("task");

function addTask(){
    if(box.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = box.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    box.value = "";
    saveData();
}

task.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", task.innerHTML);
}

function showTask(){
    task.innerHTML = localStorage.getItem("data");
}

showTask();