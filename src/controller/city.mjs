import DatabaseService from "../services/database.service.mjs";


const db = await DatabaseService.connect();

// Controller for getting all the cities from the database.
const getAllCityViews = async (req, res) => {
    const [rows, fields] = await db.getAllCities();
    return res.render("cities", { rows, fields });
}

const getNPopulatedCountries = async (req, res) => {
    const N = req.params.N;

    const [rows, fields] = await db.getNPopulatedCountries(N);
    return res.render('populated', { rows, fields });

}


const getCityByID = async (req, res) => {
    const cityId = req.params.id;
    const city = await db.getCityById(cityId);

    return res.render("city", { city });
}


export default {getAllCityViews, getNPopulatedCountries, getCityByID};
