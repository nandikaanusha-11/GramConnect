const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

app.get("/grievances/search", (req, res) => {

    const { category } = req.query;

    const sql = `
        SELECT *
        FROM grievances
        WHERE category LIKE ?
        ORDER BY grievance_id DESC
    `;

    db.query(sql, [`%${category}%`], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

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
        title,
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
    (complainant,title, ward, category, department, description, location, status, user_id)
    VALUES (?, ?,?, ?, ?, ?, ?, ?, ?)
`;

    db.query(
        sql,
        [
        complainant,
        title,
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



app.post("/admin/signup", async (req, res) => {

    const { name, email, password } = req.body;

    const checkAdmin =
        "SELECT * FROM admins WHERE email = ?";

    db.query(checkAdmin, [email], async (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });

        }

        if (result.length > 0) {

            return res.status(400).json({
                message: "Admin already exists"
            });

        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const sql =
            "INSERT INTO admins(name,email,password) VALUES(?,?,?)";

        db.query(
            sql,
            [name, email, hashedPassword],
            (err) => {

                if (err) {

                    console.log(err);

                    return res.status(500).json({
                        message: "Signup Failed"
                    });

                }

                res.status(201).json({
                    message: "Admin Registered Successfully"
                });

            }
        );

    });

});



app.post("/admin/login", (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });

        }

        if (result.length === 0) {

            return res.status(404).json({
                message: "Admin Not Found"
            });

        }

        const admin = result[0];

        const isMatch =
            await bcrypt.compare(password, admin.password);

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(  //jwt.sign()-create a new jwt

            {//paylload-info to store inside the token(non-sensitive info)
                admin_id: admin.admin_id,
                email: admin.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d" //token valid only for one day
            }

        );

        res.status(200).json({

            message: "Login Successful",

            token,

            admin: {

                admin_id: admin.admin_id,

                name: admin.name,

                email: admin.email

            }

        });

    });

});

  
app.put("/grievances/:id", (req, res) => {

    const grievanceId = req.params.id;

    const { status } = req.body;

    const sql = `
        UPDATE grievances
        SET status = ?
        WHERE grievance_id = ?
    `;

    db.query(
        sql,
        [status, grievanceId],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Failed to update grievance status"
                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({
                    message: "Grievance not found"
                });

            }

            res.status(200).json({
                message: "Status updated successfully"
            });

        }
    );

});






const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});