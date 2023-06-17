function filterProduct(value){
     
     let selects = document.querySelectorAll(".button-value");
     selects.forEach(button => {
         
            if(value.toUpperCase() == button.innerText.
           toUpperCase()) {
            button.classList.add("active");
           }
            else{
              button.classList.remove("active");
            };
     });
};


document.getElementById("search").addEventListener
("click", () => {
    
     let searchInput = document.getElementById("search-input").value;
     let element = document.querySelectorAll(".para-one")
     let content = document.querySelector(".content");
     
})