import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors(
    {
        origin: "http://localhost:5147", // Adjust this to your frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));
app.use(express.json());

// Routes

// Authentication routes (Login, Register, etc.)
app.use("api/auth",)

app.get("/", (req, res) => {
    res.send("Welcome to the PlanBro Event Planning API!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});