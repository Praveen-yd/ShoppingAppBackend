const { addUser , loginUser,userProfile} = require('../controllers/userController');
const verifyToken = require('../middleware/auth');


const router = require('express').Router();
router.post('/register',addUser);
router.post('/login',loginUser)
router.post('/profile',verifyToken,userProfile)

module.exports = router;