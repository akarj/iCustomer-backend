const productServices = require("../services/products.services");
const { StatusCodes } = require('http-status-codes');

module.exports = {
   getProduct: async (req, res) => {
      try {
         const productId = parseInt(req.params.productId, 10);
         const product = await productServices.getProductById(productId);
         if (product) {
            return res.status(StatusCodes.OK).send({ data: product, message: "Product fetched successfully" });
         } else {
            return res.status(StatusCodes.NOT_FOUND).send({ message: "Product not found", data: {} });
         }
      } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message, data: {} });
      }
   },

   getAllProducts: async (req, res) => {
      try {
         const { limit = 10, page = 1, search = '' } = req.query;
         const limitNumber = parseInt(limit, 10);
         const pageNumber = parseInt(page, 10);
         const skip = (pageNumber - 1) * limitNumber;

         const { total, products } = await productServices.getAllProducts(limitNumber, skip, search);

         return res.status(StatusCodes.OK).send({
            data: products,
            total,
            message: "Products fetched successfully",
            success: true
         });
      } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message, data: {}, success: false });
      }
   },
};
