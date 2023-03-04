console.log("welcome to notes app");
showNotes(); // to show notes when page opened first time 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log(notesObj)
    showNotes();
})

// function to show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (Element, index) {
        html += `
        <div class=" noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${Element} </p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Please add your notes`
    }
}

// function to show notes
function deleteNote(index) {
    // console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1); // used to remove from start indec to no of element(eg-1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// search function
let search= document.getElementById("searchTxt");
search.addEventListener('input',function(){
    let inputVal=search.value
    // console.log('Input event fired',inputVal);
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardtxt=document.getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
        if(cardtxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})


// Need To improve more
/*
1.Add Title 
2. Mark a Note As Important
3. Separate Notes by user
4. Sync and host to web server
*/