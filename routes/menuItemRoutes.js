const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem.js');



router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('MenuItem data saved');
        res.status(200).json({message: "MenuItem created successfully", data:response });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server is not working"});
        
    }
})

router.get('/', async (req, res) => {
    try {
        const data =   await  MenuItem.find();
        console.log('data fetched');
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error server"})
        
        
    }

})

router.get('/:taste', async(req, res) => {
    try {
        const taste = req.params.taste;
        //validation
        if(taste == "sweet" || taste == "spicy" || taste == "sour"){
            const response = await MenuItem.find({taste: taste});
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid taste type"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server is not respond"})
        
    }
});

router.put('/:id', async(req, res) => {
    try {
        const menuitemId = req.params.id;
        const updatedMenuItemData = req.body;

        const response = await MenuItem.findByIdAndUpdate(
            menuitemId,
            updatedMenuItemData,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!response) {
            return res.status(404).json({ error: "MenuItem is  not found" });
          }
      
          console.log("data updated");
          res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server is not working"})
        
    }
})


module.exports = router;