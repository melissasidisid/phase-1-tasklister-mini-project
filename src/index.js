document.addEventListener("DOMContentLoaded", () => {
  let addlist=document.getElementById('addlist');
let toDocontainet=document.getElementById('todoContainer');
let inpuField=document.getElementById('inputField');

addlist.addEventListener('click',function(){
    let list=document.createElement('list');
    list.innerText=inputField.value;

    toDocontainet.appendChild(list)
})


document.links[0].onclick= function(event){


    console.log(event)
    event.preventDefault();
  
  }
 
});
