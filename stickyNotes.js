let tc = document.querySelector(".input-box").children;

let btn = document.querySelector("button");

let list = document.querySelector(".notes-list");

let btn2 = document.querySelectorAll(".btn2");

btn.addEventListener("click", () => {
   let colorVal = tc[1].children[0].value;
   if(tc[0] === ""){
      alert("!! Enter something as sticky note !!");
      return;
   }

   makeNote(tc[0].value, colorVal);
      tc[0].value = "";
      document.querySelector(".no-note").style.display="none";
});

function removeNote(){
   let rc = document.querySelector(".right-container");

   rc.addEventListener("click", (e) => {
      // if(e.target.innerText === "X"){
      if(e.target.classList.contains("btn2")){   
         e.target.parentElement.remove();
      }
   });
}

function makeNote(text, color){
   let div = document.createElement("div");
   div.innerHTML = `<p> ${text} </p>
   <button class = "btn2"> X </button>`;
   div.style.backgroundColor = color;
   list.appendChild(div);
   removeNote();
}

removeNote();
