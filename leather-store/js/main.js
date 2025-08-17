/*
This script provides filtering and sorting functionality for the product list.
*/

document.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('categoryFilter');
  const sortBy = document.getElementById('sortBy');
  const productSections = document.querySelectorAll('.products');

  const filterAndSortProducts = () => {
    const selectedCategory = categoryFilter.value;

    productSections.forEach(section => {
      const products = Array.from(section.getElementsByClassName('product-card'));

      // Filter by category
      products.forEach(product => {
        if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });

      // Sort products
      const sortValue = sortBy.value;
      const sortedProducts = products.sort((a, b) => {
        const nameA = a.querySelector('h2').textContent.trim();
        const nameB = b.querySelector('h2').textContent.trim();
        const priceA = parseFloat(a.querySelector('p').textContent.replace('₹', ''));
        const priceB = parseFloat(b.querySelector('p').textContent.replace('₹', ''));

        if (sortValue === 'name') {
          return nameA.localeCompare(nameB);
        } else if (sortValue === 'priceLow') {
          return priceA - priceB;
        } else if (sortValue === 'priceHigh') {
          return priceB - pricea;
        }
      });

      // Re-append sorted products
      sortedProducts.forEach(product => {
        section.appendChild(product);
      });
    });
  };

  categoryFilter.addEventListener('change', filterAndSortProducts);
  sortBy.addEventListener('change', filterAndSortProducts);
});
