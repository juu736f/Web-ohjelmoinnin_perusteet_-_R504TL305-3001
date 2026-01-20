const staff = [
    { name: "Mike Mills", position: "Secretary" },
    { name: "Alice Aston", position: "Sales Manager" },
    { name: "Jordan Lewis", position: "HR Manager" },
    { name: "Mary Mills", position: "Boss" },
    { name: "Philip Patterson", position: "Web Developer"}
]

document.addEventListener("DOMContentLoaded", (event) => {
    load_name_and_position_to_ul(staff, "staff")
});

function load_name_and_position_to_ul(array, ulName) {
    const ul = document.getElementById(ulName)
    for (var key in array) {
        const li = document.createElement("li")
        li.innerHTML = array[key]["name"] + ", " + array[key]["position"]
        ul.appendChild(li)
    }
}




