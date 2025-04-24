let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let todo = document.createElement("ul");
        todo.innerHTML = `${inputs.value}<i class="fa-solid fa-trash" style="color: #FFD43B;"></i>`;
        text.appendChild(todo);
        inputs.value = "";
        todo.querySelector("i").addEventListener("click", remove);
        function remove() {
            todo.remove()
        }
    }
}