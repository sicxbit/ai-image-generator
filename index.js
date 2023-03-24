const express = require("express");
const dotenv = require("dotenv").config();
const { generateImage } = require("./controllers/openaiController");
const port = process.env.PORT;
const app = express();
// Enable body parser


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", generateImage);

app.listen(port, () => console.log(`server started on port ${port}`));
