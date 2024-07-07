const { Router } = require("express");
const Resources = require("../models/Resources");

const router = Router();

router.post("/add", async (req, res) => {
    const {
        name,
        age,
        address,
        location,
        remote,
        technologies,
        projects,
        techLevel,
        engLevel,
        facebookLink,
    } = req.body;
    try{
        const resources = new Resources({
            name,
            age,
            address,
            location,
            remote,
            technologies,
            projects,
            techLevel,
            engLevel,
            facebookLink,
        });
        await resources.save();
        res.json(resources);
    }catch (error){
        console.log(error);
    }
});

router.get("/allResources",async (req, res) => {
    try{
        const resources = await Resources.find();
        res.json(resources);
    }catch (error) {
        console.log(error);
    }
});

router.get("/resource/:id",async (req, res) => {
    try{
        const resource =
            await Resources.find({_id: req.params.id});
        console.log(resource);
        res.json(resource);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;