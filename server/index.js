const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("App connected to backend");
});

app.get("/grievances", (req, res) => {

    const sql = "SELECT * FROM grievances";
//send the sql query to mysql
    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);

    });

});

app.get("/grievances/:id", (req, res) => {

    const grievanceId = req.params.id;

    const sql = "SELECT * FROM grievances WHERE grievance_id = ?";

    db.query(sql, [grievanceId], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Grievance Not Found"
            });
        }

        res.status(200).json(result[0]);

    });

});

app.post("/grievances", (req, res) => {

    const {
        complainant,
        ward,
        category,
        department,
        description,
        location,
        date_raised,
        user_id,
        status
    } = req.body;

    const sql = `
    INSERT INTO grievances
    (complainant, ward, category, department, description, location, status, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

    db.query(
        sql,
        [
        complainant,
        ward,
        category,
        department,
        description,
        location,
        "Pending",
        user_id
        ],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Failed to submit grievance"
                });
            }

            res.status(201).json({
                message: "Grievance submitted successfully",
                grievance_id: result.insertId
            });

        }
    );

});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});