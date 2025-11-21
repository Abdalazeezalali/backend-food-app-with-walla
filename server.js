const express = require('express');
const app = express();
//  npm i dotenv to use .env files
const dotenv = require('dotenv').config();
const connectDB=require('./config/connectionDB');
const PORT = process.env.PORT || 3000;
connectDB();
// npm i express to create server
app.use(express.json());
// npm i cors to connect front-end and back-end
const cors = require('cors');
app.use(cors({
  origin:"https://frontend-food-app-with-walla.vercel.app",
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}));

app.use("/recipe", require("./routes/recipe"));
app.use("/user", require("./routes/user"));
app.use("/public", express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});