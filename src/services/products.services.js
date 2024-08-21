const products = require("../fixtures/products.json");

module.exports = {
   getAllProducts: async (limit = 10, skip = 0, search = '') => {
      let filteredProducts = products;

      if (search) {
         filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.data_category.toLowerCase().includes(search.toLowerCase())
         );
      }

      const totalProducts = filteredProducts.length;
      const paginatedProducts = filteredProducts.slice(skip, skip + limit);

      return {
         total: totalProducts,
         products: paginatedProducts
      };
   },

   getProductById: async (id) => {
      const product = products.find((product) => product.id === id);
      return product;
   },
};

