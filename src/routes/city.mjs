import express from "express";
import getAllCityViews from '../controller/city.mjs';

const router = express.Router();

router.get("/", getAllCityViews);

export default router;