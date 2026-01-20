const staff = [
    {name: "Mike Mills", position: "Secretary", location: "California"},
    {name: "Alice Aston", position: "Sales Manager", location: "Barcelona, Spain"},
    {name: "Jordan Lewis", position: "HR Manager", location: "Milan, Italy"},
    {name: "Mary Mills", position: "Boss", location: "Hamburg, Germany"},
    {name: "Philip Patterson", position: "Web Developer", location: "London, England"}
]

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded")
    load_data_to_table(staff)
});

function load_data_to_table(array, table) {
    for (var key in array) {
        console.log(array[key]["name"] + ", " + array[key]["position"] + ", " + array[key]["location"])
    }
}




