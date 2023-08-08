document.querySelector('#btn').onclick = function(){
    if(document.querySelector ('#todo input').value.length == 0){
        alert("Please Enter your Task")
    }

    else{
        document.querySelector('#todos').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#todo input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash-arrow-up"></i>
                </button>
            </div>
        `;

        var current_todos = document.querySelectorAll(".delete");
        for(var i=0; i<current_todos.length; i++){
            current_todos[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        document.querySelector("#todo input").value = "";
    }
}