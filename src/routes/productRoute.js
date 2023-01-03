const { getProductList, addProduct, getProductById } = require('../controllers/productController');

const router = require('express').Router();


router.get('/',getProductList);
router.post('/addProduct',addProduct)
router.get('/productDetails',getProductById)
module.exports = router;