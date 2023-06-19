          
            // ARRAYS IS INSIDE AN OBJECT

let products = {
    data: [
        {
            productName: "Regular White T-Shirt",

            category: "Topwear",
            price: "30",
            image: "one.png",
        },
        {
            productName: "Beige Short Skirt",

            category: "Dress",
            price: "49",
            image: "two.png",
        },
        {
            productName: "Sporty SmartWatch",

            category: "Watch",
            price: "99",
            image: "three.png",
        },
        {
            productName: "Basic Knitted Top",

            category: "Topwear",
            price: "29",
            image: "one.png",
        },
        {
            productName: "Black Leather Jacket",

            category: "Jacket",
            price: "129",
            image: "two.png",
        },
        {
            productName: "Stylish Pink",

            category: "JACK",
            price: "129",
            image: "three.png",
        },
        {
            productName: "Brown Men's Jacket",

            category: "Jacket",
            price: "189",
            image: "three.png",
        },
        {
            productName: "Comfy Gray Pants",

            category: "Jacket",
            price: "49",
            image: "one.png",
        },
        {
            productName: "Comfy Gray Pants",

            category: "Jacket",
            price: "49",
            image: "one.png",
        },
    ]
};

                   // END OF ARRAYS INSIDE AN OBJECT

for(let i of products.data){
    //Create Card
    let card = document.createElement("div");
    //card should have category and should stay hidden initailly
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
 
    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}


    //Search button click
    document.getElementById("search").addEventListener
    ("click", () => {
       // initialization
       let searchInput = document.getElementById
       ("search-input").value;
       let elements = document.querySelectorAll(".product-name");
       let cards = document.querySelectorAll(".card");
    //    console.log(searchInput);

       //loop through all elements
       elements.forEach((element,index) => {
         //check if text includes the search value
         if(element.innerText.includes(searchInput.toUpperCase())){
             //display matching card
             cards[index].classList.remove("hide");
         }
            else {
                 //hide others
                 cards[index].classList.add("hide");
            }
       });
    });

//Initially display all products
window.onload = () => {
    filterProduct("all")
}

//parameter passed from button (parameter same as category)
function filterProduct(value){
     //Button class code
     let buttons = document.querySelectorAll(".button-value");
     buttons.forEach(button => {
          //check if value equals innerText
          if(value.toUpperCase() == button.innerText.
          toUpperCase()){
            button.classList.add("active");
          }
          else{
            button.classList.remove("active");
          }
     });

     //select all card
     let elements = document.querySelectorAll(".card");
     //loop through all cards
     elements.forEach((element) => {
        //display all card on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element on category
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
     });
}

