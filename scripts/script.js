document.addEventListener("DOMContentLoaded", function () {
  const weekdayElement = document.getElementById("weekday");
  const dateElement = document.getElementById("date");
  const today = new Date();

  weekdayElement.textContent = today.toLocaleDateString("en-US", { weekday: "long" });
  dateElement.textContent = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  let taskToDo = document.getElementById("task-toDo");
  let taskBaki = parseInt(taskToDo.innerText);
  let taskBtn = document.getElementsByClassName("task-button");
  let taskHoiche = document.getElementById("task-completeCount");
  let taskDid = parseInt(taskHoiche.innerText);

  let logsDiv = document.createElement("div");
  logsDiv.id = "logs";
  let rightBody = document.getElementById('right-body');
  rightBody.appendChild(logsDiv);

  let clearHistoryButton = document.getElementById('clearHistory');
  clearHistoryButton.addEventListener('click', function () {
    logsDiv.innerHTML = '';
  });

  for (let button of taskBtn) {
    button.addEventListener('click', function () {
      if (!this.classList.contains('cursor-not-allowed')) {
        let taskTitle = this.parentNode.parentNode.querySelector('.task-title');
        let taskName = taskTitle.innerText;
        alert('Board Updated Successfully!');

        taskBaki--;
        taskDid++;
        taskToDo.innerText = taskBaki;
        taskHoiche.innerText = taskDid;

        this.innerText = "Completed";
        this.style.opacity = "0.5";
        this.disabled = true;

        let timestamp = new Date().toLocaleString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        let logEntry = document.createElement("p");
        logEntry.className = "w-[95%] mx-auto p-2 m-2 bg-slate-100 rounded-lg text-gray-600 text-base";
        logEntry.textContent = `You have completed the task ${taskName} at ${timestamp}.`;

        logsDiv.appendChild(logEntry);

        if (taskBaki == 0) {
          alert('Congrats! You have completed all the current tasks.')
        }
      }
    });
  }
});
