const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/todo", require("./routes/todo.route"));

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.l1n9ua4.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connectToDB();