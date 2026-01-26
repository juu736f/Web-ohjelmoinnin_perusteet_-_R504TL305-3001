let products = [
  {id: 1, name: "coffee", price: 2.90, category: "drink", discount: false},
  {id: 2, name: "tea", price: 1.90, category: "drink", discount: false},
  {id: 3, name: "choclate cake", price: 3.90, category: "bakery", discount: true},
  {id: 4, name: "strawberry cake", price: 4.90, category: "bakery", discount: false},
  {id: 5, name: "orange juice", price: 2, category: "drink", discount: true}
]

let html = `<option value="" selected disabled hidden>Choose here</option>`;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("categories").innerHTML = generateOptions(products); 
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

function evaluateUserOptions() {
    let maxPrice = document.getElementById("maxPrice").value
    let discountsStatus = document.getElementById("discounts").checked
    let selectedCategory = document.getElementById("categories").value
    let sort = document.getElementById("sortbyprice").checked
    document.getElementById("maxPriceTable").innerHTML = generateHTML(generateArray(products, maxPrice, selectedCategory, discountsStatus, sort))
}

function generateArray(arr, price, category, discount, sort) {
    let result = arr
    if (category != "all" && category != "" ) {
        result = result.filter(p => p.category === category);
    }
    if (discount == true) {
        result = result.filter(p => p.discount === true);
    }
    if (price != "" && price != NaN && price != null) {
        result = result.filter(p => p.price <= price)
    }
    if (sort != false) {
        result.sort(function (a, b) {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          })
    }
    else {
        result.sort(function (a, b) {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
    }
    return result
    
}

function generateOptions(arr) {
    let categories = []
    for (const products of arr) {
        categories.push(products.category)
    }
    uniqueCategories = [...new Set(categories)]
    for (i in uniqueCategories) {
        html += `<option name="${uniqueCategories[i]}" id=${uniqueCategories[i]}>${uniqueCategories[i]}</option>`;
    }
    return html += `<option name="any" id="any">all</option>`
}
