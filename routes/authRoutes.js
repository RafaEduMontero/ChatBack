const {Router} = require('express');
const authCotroller = require('../controllers/authController');
const router = Router();
router.post('/signup',authCotroller.signup);
router.post('/login',authCotroller.login);
router.get('/logout',authCotroller.logout);

module.exports = router;