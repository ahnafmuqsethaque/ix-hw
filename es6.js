// ES6 Classes

// Task Class
class Task {
  constructor(name) {
    this.name = name;
  }
}

// UI Class
class UI {
  addTask(task) {
    const list = document.getElementById("task-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${task.name}</td>
        <td><i data-action="edit-task" class="fa fa-pencil-square-o edit" style="cursor: pointer;"></i></td>
      `;

    list.appendChild(row);
  }

  clearFields() {
    document.getElementById("name").value = "";
  }

  clickEdit(target) {
    //const textInput = document.getElementById("name").innerHTML;
    const tdField = target.parentElement.parentElement.childNodes;
    const targetField = tdField[1];

    targetField.innerHTML = document.getElementById("name").value;

    document.getElementById("editDiv").remove();


  }

  editTask(target) {
    if (target.className === "fa fa-pencil-square-o edit") {
      //target.parentElement.parentElement.remove();
      const tdField = target.parentElement.parentElement.childNodes;
      console.log(tdField);
      const targetField = tdField[1];
      console.log(targetField);
      document.getElementById("name").value = targetField.innerHTML;

      const editDiv = document.createElement("div");
      editDiv.setAttribute("id", "editDiv");
      editDiv.innerHTML = `
        <button type="submit" class="btn btn-primary">Edit Task</button>
        `;
      document.getElementById("task-form").appendChild(editDiv);

      document.getElementById("editDiv").addEventListener("click", function (e) {
        const ui = new UI();
        // ui.editTask(e.target);

        ui.clickEdit(target);

        e.preventDefault();
      });
    }
  }



}



// Event Listeners
document.getElementById("task-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;


  const task = new Task(name);

  const ui = new UI();
  ui.addTask(task);
  ui.clearFields();

  e.preventDefault();
});

// Edit task
document.getElementById("task-list").addEventListener("click", function (e) {
  const ui = new UI();
  console.log("HEREHRERHEHREH   " + e.target);
  ui.editTask(e.target);
  e.preventDefault();
});

