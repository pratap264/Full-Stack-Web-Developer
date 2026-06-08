const grid = document.getElementById("productGrid");
let products = [];

async function fetchProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        products = data;
        renderProducts(products);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        grid.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
}

fetchProducts();

function renderProducts(products) {
    grid.innerHTML = "";

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;

        grid.appendChild(card);
    });
}


const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

/*
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const query = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );

  renderProducts(filteredProducts);
});

*/

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );

  renderProducts(filtered);
});



const sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", (e) => {
  const value = e.target.value;

  let sortedProducts = [...products];

  if (value === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (value === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (value === "name-asc") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (value === "name-desc") {
    sortedProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  renderProducts(sortedProducts);
});

