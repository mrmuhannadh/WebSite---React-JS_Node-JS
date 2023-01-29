const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const zip = require('express-zip');

require('dotenv').config();
const cloudinary = require('./cloudinary/cloudinary')


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kalundewa'
})

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.post("/main/insert", (req, res) => {

    const user_name = req.body.user_name
    const password = req.body.password

    const sqlQ = "INSERT INTO users (user_name,password) VALUES (?,md5(?))"
    db.query(sqlQ, [user_name, password], (err, result) => {
        console.log(result);
    })

});

app.post("/main/login", (req, res) => {
    const username = req.body.user_name;
    const pw = req.body.password;
    db.query(
        "SELECT * from users where user_name=? and password=md5(?)", [username, pw], (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "The user name and password not" });
            }
        }
    );
});


app.put("/main/changepw", (req, res) => {
    const username = req.body.user_name;
    const Oldpw = req.body.oldpassword;
    const newPw = req.body.newPassw;
    db.query(
        "UPDATE users SET password=md5(?) where user_name=? and password=md5(?)", [newPw, username, Oldpw], (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.affectedRows > 0) {
                res.send({ message: "The Password changed" });
            } else {
                res.send({ message: "The Password Not changed" });
            }
        }
    );
});

app.get("/main/gallery", (req, res) => {
    const sqlGallery = "SELECT * FROM gallery";
    db.query(sqlGallery, (err, result) => {
        res.send(result);
    })
});

app.get("/main/galleryShow/:cato", (req, res) => {
    const categ = req.params.cato;
    const sqlGallery = "SELECT * FROM gallery where img_category=?";
    db.query(sqlGallery, [categ], (err, result) => {
        res.send(result);
    })
});

app.post('/main/imageuploadNew/:cato', async (req, res) => {
    const { image } = req.body;
    const categ = req.params.cato;

    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    //const cateG=req.body.cato;
    
    let upPreset = '';
    if (categ == 'ATM') {
        upPreset = 'ATMOSPHERE';
    } else if (categ == 'Dining') {
        upPreset = 'DINING';
    } else if (categ == 'LifeStyle') {
        upPreset = 'LIFESTYLE';
    }

    const uploadedImage = await cloudinary.uploader.upload(image,
        {
            upload_preset: upPreset,
            public_id: random_number,
            allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']

        },
        function (error, result) {
            if (error) {
                console.log(error);
            }
            //can get the link from here
            const sqlQ = "insert into gallery(img_path,img_name,img_category) values(?,?,?)";
            db.query(sqlQ, [result.url, random_number, categ], (err, result) => {
                if (err) throw err;
                res.json("UPLOADED");
            });
        });

    try {
        //res.status(200).json(uploadedImage)
    } catch (err) {
        console.log(err)
    }
})

app.post('/main/offerUpload', async (req, res) => {
    const { image } = req.body;
    

    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    //const cateG=req.body.cato;
    
    let upPreset = 'offers';


    const uploadedImage = await cloudinary.uploader.upload(image,
        {
            upload_preset: upPreset,
            public_id: random_number,
            allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']

        },
        function (error, result) {
            if (error) {
                console.log(error);
            }
            res.send(result);
        });

    try {
        //res.status(200).json(uploadedImage)
    } catch (err) {
        console.log(err)
    }
})

app.delete("/main/gallery/delete/:id", (req, res) => {
    const img_id = req.params.id;
    db.query(
        "delete from gallery where img_id=? ", img_id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }


        }
    );
});



app.get("/main/offers", (req, res) => {
    const sqlOffers = "SELECT * FROM offers ORDER BY post_date DESC";
    db.query(sqlOffers, (err, result) => {
        res.send(result);
    })
});


app.delete("/main/offer/delete/:id", (req, res) => {
    const offer_id = req.params.id;
    db.query(
        "delete from offers where offer_id=? ", offer_id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }


        }
    );
});


app.listen(3001, () => {
    console.log('Running on port 3001');
})