import mysql from "mysql2/promise";
import City from "../models/city.mjs";
import Country from "../models/country.mjs";


export default class DatabaseService {
    conn;

    constructor(conn) {
        this.conn = conn;
    }

    static async connect() {
        const conn = await mysql.createConnection({
            host: process.env.DATABASE_HOST || "localhost",
            user: "root",
            password: "",
            database: "world",
        });

        if (conn) {
            console.log('Connected');
        }

        return new DatabaseService(conn);
    }

    getAllCities = async () => {
        try {
            const query = `SELECT * FROM City;`;
            const cities = await this.conn.execute(query);
            return cities;
        } catch (error) {
            console.error(err);
            return [];
        }
    }


    getNPopulatedCountries = async (N) => {
        try {
            const query = `SELECT Code, Name, Continent, Region, Population, Capital
                                FROM country
                                ORDER BY Population DESC
                                LIMIT ${N};`;
            const cities = await this.conn.execute(query);
            return cities;
        } catch (error) {
            console.error(err);
            return [];
        }
    }


  async getCityById(cityId) {
    const sql = `
        SELECT city.*, country.Name AS Country, country.Region, country.Continent, country.Population as CountryPopulation
        FROM city
        INNER JOIN country ON country.Code = city.CountryCode
        WHERE city.ID = ${cityId}
    `;
    const [rows, fields] = await this.conn.execute(sql);
   
    const data = rows[0];

    const country = new Country(
      data.Code,
      data.Country,
      data.Continent,
      data.Region,
      data.CountryPopulation
    );

    const city = new City(
        data.ID,
        data.Name,
        data.CountryCode,
        data.District,
        data.Population
      );

    city.country = country;
    return city;
  }
  async getTopPopulatedCities() {
    try {
        const query = " SELECT Name AS City, Population FROM city ORDER BY Population DESC LIMIT 10;";
        const cities = await this.conn.execute(query);
        return cities;
    }catch(error) {
        console.error(error);
        return [];
    }
}

}
