import express from "express";
import DatabaseService from "./services/database.service.mjs";
import cityRouter from './routes/city.mjs';
import { getTopPopulatedCitiesViews } from "./controller/city.mjs";


const app = express();
const PORT = 3000;
//middle
app.set("view engine", "pug");
app.use(express.static("static"));
app.use('/cities', cityRouter);


app.get("/", getTopPopulatedCitiesViews);


app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
