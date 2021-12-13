// console.log("This is my Project of Notes Application ");
showItem();

// Adding Event Listeners to the addBtn
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
    // console.log("Adding Item");
    let addTitle=document .getElementById('addTitle');
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
   
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push([addTitle.value,addTxt.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value="";
    addTxt.value = "";
    // console.log(notesObj);
    showItem();

})

function showItem() {
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(localStorage.getItem("notes"));
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                 <div class="card-body">
                      <h5 class="card-title">${element[0]}</h5>
                          <p class="card-text">${element[1]}</p>
                          <button  id="${index}"  onclick="deleteItem(this.id)"
                     class="btn btn-primary">Delete Node</button>
                  </div>
            </div>`
    })
    let Elem=document.getElementById("notes");
    if(notesObj.length!=0){
        Elem.innerHTML=html;
    }
    else{
        Elem.innerHTML=`<p class="fw-bolder fs-4"> 😔 Sorry ! No Notes Saved </p>`;
    }

}

// adding event for delete button
function deleteItem(index) {
    // console.log("Deleting Node"+ index);
    let notes = localStorage.getItem("notes");
   
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showItem();
}
//
let search=document.getElementById("searchTxt");

search.addEventListener("input",function(e){
  let inputText=search.value;
    // console.log("Event is fired"+ inputText);
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){

          let cardText=element.getElementsByTagName("p")[0].innerText;

          if(cardText.includes(inputText))
          {
              element.style.display="block";
          }
          else{
              element.style.display="none";
          }
        //   console.log(cardText);

    })
})



