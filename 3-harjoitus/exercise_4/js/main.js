let products = [
  { id: 1, name: "coffee", price: 2.9 },
  { id: 2, name: "tea", price: 1.9 },
  { id: 3, name: "choclate cake", price: 3.9 },
  { id: 4, name: "strawberry cake", price: 4.9 },
  { id: 5, name: "orange juice", price: 2 },
];
let html = `<option value="" selected disabled hidden>Choose here</option>`;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("productsSelect").innerHTML = generateHTML(products);  
    checkSelectValue()
});

function generateHTML(arr) {
    
    for (const item of arr) {
        html += `<option name="${item.name}" id=${item.id}>${item.name}</option>`;
    }
    return html;
}

function checkSelectValue() {
    const optionSelect = document.getElementById("productsSelect");
    return optionSelect.options[optionSelect.selectedIndex].id-1
}

function showProductInfo() {
    document.getElementById("productInfo").style.display = "block"
    document.getElementById("productName").value = products[checkSelectValue()]["name"]
    document.getElementById("productPrice").value = products[checkSelectValue()]["price"]
}