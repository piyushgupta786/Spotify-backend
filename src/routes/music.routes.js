const express = require("express");
const musiccontroller = require("../controllers/music.controller");
const middleware = require("../middlewares/auth.middleware");

const multer = require("multer");

const upload = multer({
    storage : multer.memoryStorage()
});

const router = express.Router();

router.post('/upload' ,middleware.authArtist , upload.single("music") , musiccontroller.CreateMusic);

router.post('/Album',  middleware.authArtist , musiccontroller.CreateAlbum);

router.post('/' , musiccontroller.GetAllMusic );


module.exports= router;
