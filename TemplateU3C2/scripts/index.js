let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getFoodlist(){
    try{
        let res = await fetch (url);

        let response = await res.json();
        console.log(response);

        let Food = response.meals;

        appendFood(Food);
        console.log("Food:",Food);
    }catch(err){
        console.log("err:",err);
    }
}
getFoodlist();

function appendFood(arr){
    arr.map(function(user){

    var card = document.createElement("div");
    card.setAttribute("class","card");

    let image = document.createElement("img");
    image.setAttribute("src",user.strMealThumb);
    image.setAttribute("class","pic");

    let name = document.createElement("p");
    name.innerHTML = user.strMeal;
    name.setAttribute("class","name");

    let price = document.createElement("p");
    var cost = Math.floor(Math.random()* 501);
    price.innerHTML = "₹ "+cost;
    price.setAttribute("class","price");
  user.price = cost;

    let button = document.createElement("button");
    button.innerHTML = "ADD TO CART";
    button.setAttribute("class","btn");

    button.onclick = function(event){
        addtocart(user);
    }

    card.append(image,name,price,button);
    document.querySelector("#user").append(card)
    })
}

function addtocart(data){
    console.log(data);

    cart.push(data)
    localStorage.setItem("cart",JSON.stringify(cart));
}
var cart = [];