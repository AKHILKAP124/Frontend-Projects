let code = ` <div class="note  lg:w-[1080px] relative">
                    <p contenteditable="true" class="notetext min-h-40 lg:w-[1080px] bg-cyan-100 p-4 text-xl rounded-md outline-none"></p>
                    <img src="../assets/images/delete.png" alt="delete logo" class="delete absolute bottom-2 right-2 w-8 cursor-pointer">
                </div>`;

let notes = document.querySelector(".note-text");

function CreateNote() {
  notes.innerHTML = notes.innerHTML + code;
  storedata();
  console.log(pre);
}

notes.onclick = (i) => {
  if (i.target.tagName === "IMG") {
    i.target.parentElement.remove();
    storedata();
  } else if (i.target.tagName === "P") {
    let note_text = document.querySelectorAll(".notetext");
    note_text.forEach((n) => {
      n.onkeyup = function () {
        storedata();
      };
    });
  }
};

function storedata() {
  localStorage.setItem("note", notes.innerHTML);
}

function getdata() {
  notes.innerHTML = localStorage.getItem("note");
}
getdata();

