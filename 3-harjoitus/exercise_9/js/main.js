const url = "https://jsonplaceholder.typicode.com/todos/"

document.addEventListener("DOMContentLoaded", (event) => {

});

function loadTodosToTable(todos) {
    const keys = Object.keys(todos[0]);
    
    let html = '<table><tr>'; 
    keys.forEach(key => html += `<th>${key}</th>`);
    html += '</tr>';
    
    todos.forEach(item => {
        html += '<tr>';
        keys.forEach(key => html += `<td>${item[key]}</td>`);
        html += '</tr>';
    });
    html += '</table>';
    document.getElementById("todostable").innerHTML = html;
}

async function getData() {
    try {
        const response = await fetch(url)
        const parsedResponse = await response.json()
        return parsedResponse;
    } catch(error) {
        console.log(error)
    }
}

getData().then(result => {
    loadTodosToTable(result)
})



/*
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => data = json)
*/