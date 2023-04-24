import express from "express";
import cityController from '../controller/city.mjs';

const router = express.Router();

router.get("/", cityController.getAllCityViews);

router.get("/top-countries/:N", cityController.getNPopulatedCountries);

router.get("/:id", cityController.getCityByID);

export default router;
