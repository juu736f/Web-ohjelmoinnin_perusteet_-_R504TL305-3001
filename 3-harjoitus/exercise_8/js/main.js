let products = [
    { id: 1, name: "coffee", price: 2.90, category: "drink", discount: false },
    { id: 2, name: "tea", price: 1.90, category: "drink", discount: false },
    { id: 3, name: "choclate cake", price: 3.90, category: "bakery", discount: true },
    { id: 4, name: "strawberry cake", price: 4.90, category: "bakery", discount: false },
    { id: 5, name: "orange juice", price: 2, category: "drink", discount: true }
]

let html = `<option value="" selected disabled hidden>Choose here</option>`;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("category").innerHTML = generateOptions(products);
});

function generateHTML(arr) {
    let table = `
    <table>
      <tr>
        <th> ID </th>
        <th> Name </th>
        <th> Price </th>
        <th> Category </th>
        <th> Discount </th>
      </tr>`;
    for (const product of arr) {
        table += `
        <tr>
            <td> ${product.id} </td>
            <td> ${product.name} </td>
            <td> ${product.price} </td>
            <td> ${product.category} </td>
            <td> ${product.discount} </td>
        </tr>`;
    }
    table += "</table>"
    return table
}


function generateOptions(arr) {
    const keys = Object.keys(products[0]);
    for (let key in keys) {
        html += `<option name="${keys[key]}" id=${keys[key]}>${keys[key]}</option>`;
    }
    return html
}


function generateTable() {
    let result = products
    let sortby = document.getElementById("category").value
    if (sortby !== "") {
        result.sort(function (a, b) {
            if (a[sortby] < b[sortby]) {
                return -1;
            }
            if (a[sortby] > b[sortby]) {
                return 1;
            }
            return 0;
        })
    }

    document.getElementById("productstable").innerHTML = generateHTML(result)

}