import mysql from "mysql2/promise";


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

        return new DatabaseService(conn);
    }

    async getAllCities() {
        try {
            const query = `SELECT * FROM City;`;
            const cities = await this.conn.execute(query);
            return cities;
        } catch (error) {
            console.error(err);
            return [];
        }
    }
}