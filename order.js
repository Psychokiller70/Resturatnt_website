// Food items data (25 items with images, category, price, rating)
const foodItems = [
  {
    id: 1,
    name: "Butter Chicken",
    category: "Indian",
    description:
      "Chicken cooked in creamy tomato gravy, rich in spices and flavor.",
    price: 250,
    rating: 4.6,
    img: "img/Butter-Chicken.jpg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Indian",
    description:
      "Cottage cheese cubes marinated in tandoori spices and grilled to perfection.",
    price: 180,
    rating: 4.3,
    img: "img/Paneer Tikka.jpg",
  },
  {
    id: 3,
    name: "Veg Biryani",
    category: "Indian",
    description:
      "Fragrant basmati rice cooked with fresh vegetables and aromatic spices.",
    price: 200,
    rating: 4.5,
    img: "img/veg biryani.jpg",
  },
  {
    id: 4,
    name: "Chole Bhature",
    category: "Indian",
    description:
      "Punjabi-style spicy chickpeas served with fluffy fried bread.",
    price: 120,
    rating: 4.2,
    img: "img/Chole Bhature.jpg",
  },
  {
    id: 5,
    name: "Masala Dosa",
    category: "South Indian",
    description:
      "Crispy rice crepe filled with spicy potato masala, served with chutneys.",
    price: 110,
    rating: 4.7,
    img: "img/Masala Dosa.jpg",
  },
  {
    id: 6,
    name: "Idli Sambar",
    category: "South Indian",
    description:
      "Steamed rice cakes served with tangy sambar and coconut chutney.",
    price: 90,
    rating: 4.5,
    img: "img/Idli Sambar.jpg",
  },
  {
    id: 7,
    name: "Vada Pav",
    category: "Fast Food",
    description: "Spicy potato fritter sandwiched in a soft bread bun.",
    price: 50,
    rating: 4.1,
    img: "img/Vada Pav.jpg",
  },
  {
    id: 8,
    name: "Burger",
    category: "Fast Food",
    description: "Classic beef burger with lettuce, cheese, and special sauce.",
    price: 150,
    rating: 4.3,
    img: "img/Burger.jpg",
  },
  {
    id: 9,
    name: "Pizza",
    category: "Fast Food",
    description: "Wood-fired pizza topped with fresh mozzarella and basil.",
    price: 350,
    rating: 4.8,
    img: "img/Pizza.jpg",
  },
  {
    id: 10,
    name: "Fried Rice",
    category: "Chinese",
    description: "Wok-tossed rice with vegetables and soy sauce.",
    price: 180,
    rating: 4.1,
    img: "img/Fried Rice.jpg",

  },
  {
    id: 11,
    name: "Manchurian",
    category: "Chinese",
    description: "Deep-fried vegetable balls tossed in spicy sauce.",
    price: 160,
    rating: 4.4,
    img: "img/Manchurian.jpg",

  },
  {
    id: 12,
    name: "Spring Rolls",
    category: "Chinese",
    description: "Crispy rolls stuffed with veggies and served with dip.",
    price: 130,
    rating: 4.2,
    img: "img/Spring Rolls.jpg",
  },
  {
    id: 13,
    name: "Paneer Butter Masala",
    category: "Indian",
    description: "Soft paneer cubes cooked in rich buttery tomato gravy.",
    price: 220,
    rating: 4.5,
    img: "img/Paneer Butter Masala.jpg",
  },
  {
    id: 14,
    name: "Dal Makhani",
    category: "Indian",
    description: "Creamy black lentils cooked slowly with butter and spices.",
    price: 190,
    rating: 4.6,
    img: "img/Dal Makhani.jpg",
  },
  {
    id: 15,
    name: "Masala Fries",
    category: "Fast Food",
    description: "Crispy fries tossed in Indian masalas and herbs.",
    price: 100,
    rating: 4.0,
    img: "img/Masala Fries.jpg",
  },
  {
    id: 16,
    name: "Chicken Shawarma",
    category: "Fast Food",
    description: "Middle Eastern wrap with spiced chicken and fresh veggies.",
    price: 200,
    rating: 4.4,
    img: "img/Chicken Shawarma.jpg",
  },
  {
    id: 17,
    name: "Schezwan Noodles",
    category: "Chinese",
    description: "Spicy stir-fried noodles with vegetables and soy sauce.",
    price: 180,
    rating: 4.3,
    img: "img/Schezwan Noodles.jpg",
  },
  {
    id: 18,
    name: "Momos",
    category: "Chinese",
    description: "Steamed dumplings served with spicy chutney.",
    price: 140,
    rating: 4.4,
    img: "img/Momos.jpg",          
  },
  {
    id: 19,
    name: "Pani Puri",
    category: "Indian",
    description: "Crispy hollow puris filled with spicy tangy water.",
    price: 80,
    rating: 4.3,
    img: "img/Pani Puri.jpg",          
  },
  {
    id: 20,
    name: "Idiyappam",
    category: "South Indian",
    description: "Steamed rice noodle cakes, soft and fluffy.",
    price: 100,
    rating: 4.1,
    img: "img/Idiyappam.jpg",          
  
  },
  {
    id: 21,
    name: "Chicken 65",
    category: "South Indian",
    description: "Spicy deep-fried chicken chunks with curry leaves.",
    price: 210,
    rating: 4.5,
    img: "img/Chicken 65.jpg",          

  },
  {
    id: 22,
    name: "Egg Roll",
    category: "Fast Food",
    description: "Flaky paratha rolled with egg and veggies.",
    price: 90,
    rating: 4.0,
    img: "img/Egg Roll.jpg",          

  },
  {
    id: 23,
    name: "Vegetable Manchurian Dry",
    category: "Chinese",
    description: "Deep-fried veggie balls tossed in dry Manchurian sauce.",
    price: 160,
    rating: 4.1,
    img: "img/Vegetable Manchurian Dry.jpg",          

  },
  {
    id: 24,
    name: "Tandoori Chicken",
    category: "Indian",
    description: "Marinated chicken grilled in tandoor, smoky and juicy.",
    price: 280,
    rating: 4.7,
    img: "img/Tandoori Chicken.jpg",          

  },
  {
    id: 25,
    name: "Masala Chai",
    category: "Indian",
    description: "Classic Indian spiced tea with milk and cardamom.",
    price: 30,
    rating: 4.6,
    img: "img/Masala Chai.jpg",          

  },
];

// Cart object {id: {item, qty}}
let cart = {};

// Elements
const menuGrid = document.getElementById("menu-grid");
const categoryNav = document.getElementById("category-nav");
const searchInput = document.getElementById("search-input");
const cartBar = document.getElementById("cart-bar");
const cartCountElem = document.getElementById("cart-count");
const cartTotalPriceElem = document.getElementById("cart-total-price");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items-container");
const orderNowBtn = document.getElementById("order-now-btn");
const orderModal = document.getElementById("order-modal");
const orderForm = document.getElementById("order-form");
const orderCloseBtn = orderModal.querySelector(".close-btn");

// Render menu items based on filter and search
function renderMenuItems(category = "all", searchText = "") {
  menuGrid.innerHTML = "";

  const filteredItems = foodItems.filter((item) => {
    const matchCategory = category === "all" || item.category === category;
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filteredItems.length === 0) {
    menuGrid.innerHTML =
      '<p style="text-align:center; font-weight:600; color:#d35400;">No items found.</p>';
    return;
  }

  filteredItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
        <div class="menu-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          <button class="add-to-cart-btn" title="Add to Cart" aria-label="Add ${item.name} to cart">+</button>
        </div>
        <div class="menu-details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="menu-price-rating">
            <div class="menu-price">₹${item.price}</div>
            <div class="menu-rating" aria-label="Rating: ${item.rating}">${item.rating} ⭐</div>
          </div>
        </div>
      `;
    // Add to cart button event
    div
      .querySelector(".add-to-cart-btn")
      .addEventListener("click", () => addToCart(item));
    menuGrid.appendChild(div);
  });
}

// Add item to cart or increment qty
function addToCart(item) {
  if (cart[item.id]) {
    cart[item.id].qty++;
  } else {
    cart[item.id] = { item, qty: 1 };
  }
  updateCartBar();
}

// Update the cart bar count and price
function updateCartBar() {
  const totalCount = Object.values(cart).reduce((acc, ci) => acc + ci.qty, 0);
  const totalPrice = Object.values(cart).reduce(
    (acc, ci) => acc + ci.qty * ci.item.price,
    0
  );
  if (totalCount > 0) {
    cartBar.style.display = "flex";
    cartCountElem.textContent = totalCount;
    cartTotalPriceElem.textContent = totalPrice.toFixed(0);
  } else {
    cartBar.style.display = "none";
  }
}

// Show cart modal with items
function showCartModal() {
  cartItemsContainer.innerHTML = "";
  if (Object.keys(cart).length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalPriceElem.textContent = "0";
    cartModal.classList.add("show");
    return;
  }
  Object.values(cart).forEach((ci) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
        <div>${ci.item.name}</div>
        <div class="cart-qty">x${ci.qty}</div>
        <div>₹${ci.qty * ci.item.price}</div>
        <button class="remove-btn" title="Remove ${
          ci.item.name
        } from cart">&times;</button>
      `;
    // Remove button event
    div.querySelector(".remove-btn").addEventListener("click", () => {
      delete cart[ci.item.id];
      updateCartBar();
      showCartModal();
    });
    cartItemsContainer.appendChild(div);
  });
  // Total
  const totalPrice = Object.values(cart).reduce(
    (acc, ci) => acc + ci.qty * ci.item.price,
    0
  );
  document.getElementById(
    "cart-total"
  ).textContent = `Total: ₹${totalPrice.toFixed(0)}`;
  cartModal.classList.add("show");
}

// Hide cart modal
function hideCartModal() {
  cartModal.classList.remove("show");
}

// Show order modal
function showOrderModal() {
  orderModal.classList.add("show");
}

// Hide order modal
function hideOrderModal() {
  orderModal.classList.remove("show");
}

// Handle category button click
categoryNav.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // Remove active from all
    [...categoryNav.children].forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    renderMenuItems(e.target.getAttribute("data-category"), searchInput.value);
  }
});

// Handle search input
searchInput.addEventListener("input", () => {
  const activeCatBtn = categoryNav.querySelector("button.active");
  const category = activeCatBtn
    ? activeCatBtn.getAttribute("data-category")
    : "all";
  renderMenuItems(category, searchInput.value);
});

// Cart bar click shows cart modal
cartBar.addEventListener("click", () => {
  showCartModal();
});

// Order Now button click
orderNowBtn.addEventListener("click", () => {
  hideCartModal();
  showOrderModal();
});

// Close order modal
orderCloseBtn.addEventListener("click", () => {
  hideOrderModal();
});

// Order form submit
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = orderForm.name.value.trim();
  const phone = orderForm.phone.value.trim();
  const address = orderForm.address.value.trim();

  if (!name || !phone || !address) {
    alert("Please fill all required fields!");
    return;
  }
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
    hideOrderModal();
    return;
  }

  // Prepare WhatsApp message
  let message = `*New Order from Delicious Bites*\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n*Order Details:*\n`;
  Object.values(cart).forEach((ci) => {
    message += `${ci.item.name} x${ci.qty} - ₹${ci.qty * ci.item.price}\n`;
  });
  const totalPrice = Object.values(cart).reduce(
    (acc, ci) => acc + ci.qty * ci.item.price,
    0
  );
  message += `\n*Total: ₹${totalPrice.toFixed(0)}*`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  // WhatsApp number (replace with actual business number)
  const waNumber = "918791144733";
  const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

  // Open WhatsApp chat
  window.open(waUrl, "_blank");

  // Clear cart and form
  cart = {};
  updateCartBar();
  hideOrderModal();
  orderForm.reset();
});

// Initial render
renderMenuItems();
