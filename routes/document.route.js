const { Router } = require("express");
const Todo = require("../models/Todo");

const router = Router();

router.post("/add", async (req, res) => {
    const { text, userId } = req.body;
    try{
        const todo = new Todo({
            text,
            owner:userId,
            completed:false,
            important:false,
            counter:0,
        });
        await todo.save();
        res.json(todo);
    }catch (error){
        console.log(error);
    }
});

router.get("/all_todos",async (req, res) => {
    try{
        const { userId } = req.query;
        const todo = await Todo.find({owner: userId});
        res.json(todo);
    }catch (error) {
        console.log(error);
    }
});

router.delete("/delete/:id",async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete({_id: req.params.id});
        res.json(todo);
    }catch (error) {
        console.log(error);
    }
});

router.put("/warning/:id",async (req, res) => {
    try{
        console.log(req.params.id);
        const todo = await Todo.findOne({_id: req.params.id});
        todo.important = !todo.important;
        await todo.save();
        res.json(todo);
    }catch (error) {
        console.log(error);
    }
});

router.put("/completed/:id",async (req, res) => {
    try{
        const todo = await Todo.findOne({_id: req.params.id});
        todo.completed = !todo.completed;
        todo.counter = todo.counter + 1;
        await todo.save();
        res.json(todo);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;