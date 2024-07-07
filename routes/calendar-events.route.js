const { Router } = require("express");
const Todo = require("../models/Todo");
const CalendarEvents = require("../models/CalendarEvents");

const router = Router();

router.post("/calendar-events", async (req, res) => {
    const { date, title } = req.body;
    try{
        const calendarEvents = new CalendarEvents({
            date,
            title,
        });
        await calendarEvents.save();
        res.json(calendarEvents);
    }catch (error){
        console.log(error);
    }
});

router.get("/calendar-events",async (req, res) => {
    try{
        const calendarEvents = await CalendarEvents.find();
        res.json(calendarEvents);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;