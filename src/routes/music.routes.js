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

router.get('/' , middleware.authuser ,musiccontroller.GetAllMusic );

router.get('/Albums' , middleware.authuser , musiccontroller.GetAllAlbums);

router.get('/Albums/:AlbumId',middleware.authuser , musiccontroller.GetAlbumbyId );


module.exports= router;
