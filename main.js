"use strict"
{
    const text=document.getElementById("text");
    const add=document.getElementById("add");
    const remove=document.getElementById("remove");
    const save=document.getElementById("save");

    if(localStorage.getItem("memo")===null){
        text.value="";
    }

    else{
        text.value=localStorage.getItem("memo");
    }

    add.addEventListener("click",()=>{
        // console.log("OK");
        localStorage.setItem("memo",text.value);
        setTimeout(function() {
            save.classList.remove("hidden");
        }, 1000); 
        save.classList.add("hidden");
    });

    remove.addEventListener("click",()=>{
        // console.log("re");
        if(confirm("remove?")){
            localStorage.removeItem("memo");
            text.value="";
        }
    });
}