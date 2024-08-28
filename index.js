
const inputbox=document.getElementById("inputbox")
const container=document.getElementById("list")

function task(){
    if (inputbox.value==='')
    {
        alert("Please Enter Something.....")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value;
        container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    savedata();
}
container.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",container.innerHTML);
}
function showtask(){
    container.innerHTML =localStorage.getItem("data");
}

showtask();