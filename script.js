
document.addEventListener("DOMContentLoaded", function(){
   
   // Add event listener to the "Add Note" button
   document.getElementById("add").addEventListener("click", function() {
      addNote();
   });

   // Function to add a new sticky note
   function addNote(){
      // Get user input values
      var title = document.getElementById("title").value;
      var content = document.getElementById("txt-box").value;
      var color = document.getElementById("color").value;

      // Create a new note element
      var note = document.createElement("div");
      note.classList.add("notes");
      note.style.backgroundColor = color;

      // Add title and content to the note
      var noteContent = document.createElement("div");
      noteContent.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
      note.appendChild(noteContent);

      // Add delete button to the note
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.classList.add("delete");
      deleteButton.addEventListener("click", function() {
         note.remove();
      });
      note.appendChild(deleteButton);

      // Append the note to the lower-container
      var notesContainer = document.getElementById("notes-container");
      notesContainer.appendChild(note);
   }
});
