import DatabaseService from "../services/database.service.mjs";


const db = await DatabaseService.connect();

// Controller for getting all the cities from the database.
const getAllCityViews = async (req, res) => {
    const [rows, fields] = await db.getAllCities();
    return res.render("cities", { rows, fields });
}

const getTopPopulatedCitiesViews = async (req, res) => {
    const [rows, fields] = await db.getTopPopulatedCities();
    return res.render("index", {rows, fields});
}

export {
    getAllCityViews,
    getTopPopulatedCitiesViews,
};
