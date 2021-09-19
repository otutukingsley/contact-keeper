const express = require('express');
 const router = express.Router();


//@route GET api/auth
//@description Get Logged in user information
//@access Private


router.get('/', (req, res) => {
    res.send('Get Logged in user information');
});


//@route POST api/auth
//@description Auth user & get token
//@access Public

router.post('/', (req, res) => {
    res.send('Login in the User');
});

module.exports = router;