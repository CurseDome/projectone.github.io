const addText=document.getElementById("Add-text");
const listContainer=document.querySelector(".list-container");
const addButton=document.querySelector(".add-button");

addButton.addEventListener("click",function(){
    if(addText.value ===''){
        alert("You must write something");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=addText.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    addText.value="";
    saveData();
})

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
};
showData();