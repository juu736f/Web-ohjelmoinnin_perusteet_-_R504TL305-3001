const staff = ["Mike Mills", "Alice Aston", "Jordan Lewis", "Mary Mills", "Philip Patterson"]

document.addEventListener("DOMContentLoaded", (event) => {
    load_array_to_ul(staff, "staff")
});

function load_array_to_ul(array, ulName) {
    const ul = document.getElementById(ulName)
    for (i = 0; i <= array.length-1; i++) {
        const li = document.createElement("li")
        li.innerHTML = array[i]
        ul.appendChild(li)
    }
}

