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



function truncateDescription(text, wordLimit) {
    if(!text) {
        return "No description available.";
    }
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
} 


// Filter plants by category
function filterPlants(categoryName) {
    const filtered = [];
    for (let i = 0; i < allPlants.length; i++) {
        if (allPlants[i].category === categoryName) {
            filtered.push(allPlants[i]);
        }
    }
    loadPlants(filtered);
}
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
// Render cart items and total
function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price-quantity">৳${item.price} × 1</span>
            </div>
            <button onclick="removeFromCart(${i})" class="remove-button">✕</button>
        `;

        cartItems.appendChild(div);
    }

    cartTotal.textContent = `Total: ৳${total}`;
}


//spinner visibility 
function showSpinner() {
    loadingSpinner.style.display = "flex";
}
function hideSpinner() {
    loadingSpinner.style.display = "none";
}

async function init() { 
    showSpinner();
    try {
        const catRes = await fetch("https://openapi.programming-hero.com/api/categories");
        const catData = await catRes.json();
        loadCategories(catData.categories  || []);

        const plantRes = await fetch("https://openapi.programming-hero.com/api/plants");
        const plantData = await plantRes.json();
        allPlants = plantData.plants || [];
        loadPlants(allPlants);
    } catch(error) {
        console.log("API failed: ", error.message);
    } finally {
        hideSpinner();
    }
}

// Start app
init();