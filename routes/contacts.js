const express = require('express');
 const router = express.Router();


//@route GET api/contacts
//@description Get all user contacts
//@access Private

router.get('/', (req, res) => {
    res.send('Get all the user');
});

//@route POST api/contacts
//@description Add new contacts
//@access Private

router.post('/', (req, res) => {
    res.send('Add contacts');
});

//@route PUT api/contacts/:id
//@description Update a contact
//@access Private

router.put('/:id', (req, res) => {
    res.send('Update particular contact');
});

//@route DELETE api/contacts/:id
//@description Delete a contact
//@access Private

router.delete('/:id', (req, res) => {
    res.send('Delete a particular contact');
});

module.exports = router;