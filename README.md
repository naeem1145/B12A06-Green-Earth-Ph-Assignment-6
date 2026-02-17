# GreenEarth

Green Earth is a fully responsive web application that allows users to browse, explore, and plant trees. Users can view tree categories, see details for each plant, add trees to a cart, and track the total price. The app features dynamic data loading from a public API, modals for details, and interactive cart functionality.  

---

## Features Implemented

- Responsive navigation bar with logo, menu items, and "Plant a Tree" button  
- Hero banner with background image, title, subtitle, and a call-to-action button  
- About Campaign section with image and text layout  
- Our Impact section showing 3 cards with campaign statistics  
- Plant a Tree Today section with a functional form (Name, Email, Number of Trees)  
- Footer with copyright info  
- Fully responsive design for mobile, tablet, and desktop 

---

Functionalities

- **Dynamic Category Loading:** Tree categories are loaded from the API on the left side  
- **Category Click → Tree Display:** Trees for the selected category load dynamically in a 3-column card layout  
- **Card Contents:** Each card shows image, name, short description, category, price, and Add to Cart button  
- **Modal on Card Click:** Clicking a tree name opens a modal with full tree details  
- **Add to Cart:** Adds tree to the cart and displays the tree name  
- **Total Price Calculation:** Automatically calculates total price of items in the cart  
- **Remove from Cart:** Remove tree from cart and deducts price  
- **Loading Spinner:** Displays while data is being fetched  
- **Active Button State:** Highlights the selected category

---

## Tech Stack

- **Frontend:** HTML, CSS (Vanilla / Tailwind / DaisyUI), JavaScript  
- **API:** [Programming Hero Open API](https://openapi.programming-hero.com/)  
- **Dependencies:** None (Vanilla JS only)

---

## 1) Difference between var, let, and const

- var: Old way to declare variables. It’s function-scoped and can be redeclared or updated.

- let: Modern variable. Block-scoped and can be updated but not redeclared in the same block.

- const: Also block-scoped, cannot be reassigned after declaration (but object content can change).

## 2) Difference between map(), forEach(), and filter()

- forEach() — runs a function on each item, doesn’t return a new array.

- map() — runs a function on each item and returns a new array with transformed values.

- filter() — keeps only items that pass a test and returns a new filtered array.

## 3) What are arrow functions in ES6?

- Arrow functions are a shorter way to write functions using =>.
- They also inherit the surrounding this (no own this). Example:

- const add = (a, b) => a + b;

## 5) What are template literals in ES6?

- Template literals are strings written with backticks (`) instead of quotes.