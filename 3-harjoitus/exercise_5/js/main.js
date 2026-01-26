let products = [
  { id: 1, name: "coffee", price: 2.9 },
  { id: 2, name: "tea", price: 1.9 },
  { id: 3, name: "choclate cake", price: 3.9 },
  { id: 4, name: "strawberry cake", price: 4.9 },
  { id: 5, name: "orange juice", price: 2 },
];

function evaluateProducts(arr) {
    let maxPrice = document.getElementById("maxPrice").value
    let table = `
    <table>
      <tr>
        <th> ID </th>
        <th> Name </th>
        <th> Price </th>
      </tr>`;
    for (const product of arr) {
        if (product.price <= maxPrice) {
            table += `
            <tr>
              <td> ${product.id} </td>
              <td> ${product.name} </td>
              <td> ${product.price} </td>
            </tr>`;
        }
    }
    table += "</table>"
    document.getElementById("maxPriceTable").innerHTML = table
}

