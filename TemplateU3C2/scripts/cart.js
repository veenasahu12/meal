let cart = localStorage.getItem("cart");
if(!cart){
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
}else{
    cart = JSON.parse(cart);
}

// printing the total value

let total = cart.reduce(function(acc,curr){
    return acc+curr.price;
},0)

let container = document.getElementById("container");

// create table and tablehead

let table = document.createElement("table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");

let th1 = document.createElement("th");
th1.innerHTML = "IMAGE";

let th2 = document.createElement("th");
th2.innerHTML = "MEALS";

let th3 = document.createElement("th");
th3.innerHTML = "PRICE";

tr.append(th1,th2,th3);
thead.append(tr);
 
let tbody = document.createElement("tbody");

cart.map(function(prod){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
     let prodImg = document.createElement("img");
    prodImg.src = prod.strMealThumb;
    td1.append(prodImg);

    let td2 = document.createElement("td");
    td2.innerHTML = prod.strMeal;

    let td3 = document.createElement("td");
    td3.innerHTML = prod.price;

    tr.append(td1,td2,td3);
    tbody.append(tr);

});

table.append(thead,tbody);
container.append(table);

function displaytotal(total) {
    let displaytotal = document.getElementById("displaytotal");
    displaytotal.innerHTML = "Total : ₹"+total;
    console.log(total);
}
displaytotal(total);
