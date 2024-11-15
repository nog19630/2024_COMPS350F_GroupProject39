const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/menuPage', (req, res) => customerController.renderMenuPage(req, res));

router.post('/addToCart', (req, res) => customerController.addToCart(req, res));

router.get('/cartPage', (req, res) => customerController.renderCartPage(req, res));

router.post('/checkoutPage', (req, res) => customerController.renderCheckoutPage(req, res));

router.post('/removeFromCart', (req, res) => customerController.removeFromCart(req, res));

router.post('/paymentPage', (req, res) => customerController.renderPaymentPage(req, res));

router.post('/payment', (req, res) => customerController.payment(req, res));

router.get('/orderConfirmationPage', (req, res) => customerController.renderOrderConfirmationPage(req, res));

router.get('/orderHistoryPage', (req, res) => customerController.renderOrderHistoryPage(req, res));

module.exports = router;
