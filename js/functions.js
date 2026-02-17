let allPlants = [];
let cart = [];
//DOM elements
const categoryList = document.getElementById("category-list")
const loadingSpinner = document.getElementById("loading-spinner");
const treeCardsContainer = document.getElementById("tree-cards-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const plantModal = document.getElementById("plant-modal");
const closeModalButton = document.querySelector(".close-button");
const modalDetails = document.getElementById("modal-details");
const treesDisplayArea = document.getElementById("trees-display-area");

// Load Categories 
function loadCategories(categories) {
    categoryList.innerHTML = "";

    const allLi = document.createElement("li");
    allLi.textContent = "All Trees";
    allLi.classList.add("category-item", "active");
    allLi.addEventListener("click", function() {
        setActiveCategory(allLi);
        loadPlants(allPlants);
    });
    categoryList.appendChild(allLi);

    for(let i = 0; i <categories.length; i++) {
        const li = document.createElement("li");
        li.textContent = categories[i].category_name;
        li.classList.add("category-item");
        li.addEventListener("click", function() {
            setActiveCategory(li);
            filterPlants(categories[i].category_name);
        });
        categoryList.appendChild(li);
    }
}
function loadPlants(plants) {

    treeCardsContainer.innerHTML = "";

  
    plants.forEach(plant => {
   
        const card = document.createElement('div');
  
        card.classList.add('tree-card');    
        
        card.innerHTML = ` 
        <img src="${plant.image}" alt="${plant.name}">
            <h4 class="tree-card-name">${plant.name}</h4>
            <p class="tree-card-description">${truncateDescription(plant.description, 10)}</p>
            <div class="card-details-wrapper">
                <div class="card-info-top">
                    <span class="card-category-tag">${plant.category || "Tree"}</span>
                    <span class="card-price">৳${plant.price}</span>
                </div>
                <button class="add-to-cart-button" onclick="addToCart(${plant.id})">Add to Cart</button>
            </div>
        `;

        card.querySelector('.tree-card-name').addEventListener('click', () => {
            showPlantDetails(plant.id);
        });
     
  treeCardsContainer.appendChild(card);
    });
}