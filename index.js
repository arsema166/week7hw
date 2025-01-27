
const coffeeShopInventory = [
    { id: 1, name: 'Espresso', price: 3, quantity: 50, category: 'Beverage' },
    { id: 2, name: 'Latte', price: 4, quantity: 30, category: 'Beverage' },
    { id: 3, name: 'Muffin', price: 2.5, quantity: 100, category: 'Snack' },
    { id: 4, name: 'Croissant', price: 3, quantity: 80, category: 'Snack' },
  ];
  

  function listProducts() {
    coffeeShopInventory.forEach(product => {
      console.log(`Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`);
    });
  }
  

  function addProduct(id, name, price, quantity, category) {
    const newProduct = { id, name, price, quantity, category };
    coffeeShopInventory.push(newProduct);
  }
 
  function updateQuantity(id, quantity) {
    const product = coffeeShopInventory.find(product => product.id === id);
    if (product) {
      product.quantity = quantity;
      console.log(`Updated ${product.name}'s quantity to ${quantity}`);
    } else {
      console.log('Product not found');
    }
  }
  
  function deleteProduct(id) {
    const index = coffeeShopInventory.findIndex(product => product.id === id);
    if (index !== -1) {
      const deletedProduct = coffeeShopInventory.splice(index, 1);
      console.log(`Deleted product: ${deletedProduct[0].name}`);
    } else {
      console.log('Product not found');
    }
  }
 
function filterByCategory(category) {
    const filteredProducts = coffeeShopInventory.filter(product => product.category === category);
    console.log(`Products in category ${category}:`);
    filteredProducts.forEach(product => {
      console.log(`- ${product.name}, Price: $${product.price}`);
    });
  }
  
  
function calculateTotalRevenue() {
    const totalRevenue = coffeeShopInventory.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    console.log(`Total potential revenue: $${totalRevenue}`);
  }
  

function sortByPrice() {
    const sorted = coffeeShopInventory.sort((a, b) => a.price - b.price);
    console.log('Products sorted by price:');
    sorted.forEach(product => {
      console.log(`${product.name}: $${product.price}`);
    });
  }
  
