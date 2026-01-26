async function loadTodos() {
    console.log(fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json()))
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('I will execute after todos begins loading')
    const todos = async function(a, b) { 
        await loadTodos()
        console.log('I will execute after todos get either resolved/rejected')
    }
});

function loadTodosToTable(todos) {
    console.log(todos)
    const keys = Object.keys(todos[0]);
    let html = `<table>`
    for (const key in keys) {
        console.log(keys[key])
        html += `<th>${keys[key]}</th>`
        for (const item of todos) {
            html += `
          <tr>
            <td> ${todos.keys[key]} </td>
          </tr>`;
        }
    }
    html += "</table>"
    document.getElementById("todostable").innerHTML = html
}