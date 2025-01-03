const express = require('express');
const router = express.Router();
const menu = require('./../models/menu'); // Import the menu model

// POST route to create a menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menu(data); // Use 'menu' instead of 'Menu'
        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT route to update a menu item
router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id; // Get menu id from the request
        const updatedMenuData = req.body; // Get updated data from request body

        const response = await menu.findByIdAndUpdate(menuId, updatedMenuData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu data updated');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
// DELETE route to delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id; // Get menu id from the request

        // Find and delete the menu item by its ID
        const response = await menu.findByIdAndDelete(menuId);

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu item deleted');
        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
