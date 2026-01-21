const staff = [
    { name: "Mike Mills", position: "Secretary", location: "California" },
    { name: "Alice Aston", position: "Sales Manager", location: "Barcelona, Spain" },
    { name: "Jordan Lewis", position: "HR Manager", location: "Milan, Italy" },
    { name: "Mary Mills", position: "Boss", location: "Hamburg, Germany" },
    { name: "Philip Patterson", position: "Web Developer", location: "London, England" }
]

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("staff").innerHTML = generateHTML(staff);
});

function generateHTML(arr) {
    let html = `
    <table>
      <tr>
        <th> Name </th>
        <th> Position </th>
        <th> Location </th>
      </tr>`;
    for (const item of arr) {
        html += `
      <tr>
        <td> ${item.name} </td>
        <td> ${item.position} </td>
        <td> ${item.location} </td>
      </tr>`;
    }
    html += "</table>"
    return html;
}