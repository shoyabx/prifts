const products = [
  {
    name: "Classic Leather Wallet",
    price: 2999,
    image: "images/Walllet.jpg",
    category: "Accessories",
    trending: true
  },
  {
    name: "Urban Messenger Bag",
    price: 7499,
    image: "images/backpack-category.jpg",
    category: "Bags",
    trending: true
  },
  {
    name: "Executive Laptop Tote",
    price: 12999,
    image: "images/laptop-bag-category.jpg",
    category: "Office",
    trending: true
  },
  {
    name: "Minimalist Card Holder",
    price: 1499,
    image: "images/wallet-category.jpg",
    category: "Accessories",
    trending: false
  },
  {
    name: "Travel Duffel",
    price: 8999,
    image: "images/backpack-category.jpg",
    category: "Bags",
    trending: false
  },
  {
    name: "Leather Belt",
    price: 1999,
    image: "images/wallet-category.jpg",
    category: "Clothing",
    trending: false
  },
  {
    name: "Gift Set",
    price: 4999,
    image: "images/wallet-category.jpg",
    category: "Gift",
    trending: false
  }
];

function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img"/>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">₹${product.price}</p>
      </div>
    </div>
  `).join('');
}

function renderTrending() {
  const trending = products.filter(p => p.trending).slice(0, 3);
  renderProducts(trending, 'trending-products');
}

function renderCatalogue() {
  let filtered = [...products];
  const category = document.getElementById('categoryFilter').value;
  const sortBy = document.getElementById('sortBy').value;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'priceLow') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHigh') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered, 'catalogue-products');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTrending();
  renderCatalogue();

  document.getElementById('categoryFilter').addEventListener('change', renderCatalogue);
  document.getElementById('sortBy').addEventListener('change', renderCatalogue);
});
