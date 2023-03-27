import express from "express";
import DatabaseService from "./services/database.service.mjs";
import cityRouter from './routes/city.mjs';


const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(express.static("static"));
app.use('/cities', cityRouter);


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
