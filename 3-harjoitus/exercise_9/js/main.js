async function getTodosData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    return todos;
}

function loadTodosToTable(todos) {
    if (!todos || todos.length === 0) return; // Guard against empty data
    const keys = Object.keys(todos[0]);
    let html = '<table><tr>'; // Header row
    keys.forEach(key => html += `<th>${key}</th>`);
    html += '</tr>'; // End header
    
    todos.forEach(item => {
        html += '<tr>';
        keys.forEach(key => html += `<td>${item[key]}</td>`);
        html += '</tr>';
    });
    html += '</table>';
    document.getElementById("todostable").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const todos = await getTodosData();
        console.log(todos);
        loadTodosToTable(todos);
    } catch (error) {
        console.error('Failed to load todos:', error);
    }
});
