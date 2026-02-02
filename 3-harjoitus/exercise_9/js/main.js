const url = "https://jsonplaceholder.typicode.com/todos/"
let todos = []

document.addEventListener("DOMContentLoaded", (event) => {
    resetUserInputs()
});

function generateTableForTodos(todos) {
    if (!Array.isArray(todos) || todos.length === 0) {
        return '<p>No results</p>';
    }
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
    return html;
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

function generateOptions(arr) {
    let html = `<option value="" selected disabled hidden>Choose here</option>`;
    let userIds = []
    for (const item of arr) {
        userIds.push(item.userId)
    }
    unique_userIds = [...new Set(userIds)]    
    for (ids in unique_userIds) {
        html += `<option name="${unique_userIds[ids]}" id=${unique_userIds[ids]}>${unique_userIds[ids]}</option>`
    }
    html += `<option name="all" id="all">all</option>`
    document.getElementById("userselect").innerHTML = html
}

function resetUserInputs() {
    document.getElementById("titlequery").value = ""
    document.getElementById("completedcheck").checked = false
    document.getElementById("userselect").value = ""
}

function getUserInput() {
    let query = document.getElementById("titlequery").value
    let completed = document.getElementById("completedcheck").checked
    let uid = document.getElementById("userselect").value
    return [query, completed, uid]
}

function updateTable() {
    let result = todos
    const arr = getUserInput()
    const query = arr[0]      
    const completed = arr[1]  // ok
    const uid = arr[2]        // ok

    if (completed !== false) {
        result = result.filter(p => p.completed === completed);
    }
    
    if (uid !== null && uid !== "" && uid !== "all") {
        result = result.filter(p => p.userId === Number(uid))
    }
    
    if (uid === "all") {
        result = result.filter(p => p.userId !== null)
    }

    if (query !== "" && query !== null) {
        const q = query.toLowerCase();
        result = result.filter(p => String(p.title).toLowerCase().includes(q));
    }
    document.getElementById("todostable").innerHTML = generateTableForTodos(result)
}

getData().then(result => {
    console.log(result)
    todos = result
    generateOptions(result)
    document.getElementById("todostable").innerHTML = generateTableForTodos(result)
})


document.addEventListener("DOMContentLoaded", () => {
});

