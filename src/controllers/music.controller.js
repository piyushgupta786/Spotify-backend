const musicModel = require("../models/music.model");
const AlbumModel = require("../models/Album.model");
const {uploadFile} = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function CreateMusic(req,res) {

     const { title , artist} = req.body;
     const file = req.file;

     const result = await uploadFile(file.buffer.toString('base64'));

     const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.userid,
     })
     res.status(201).json({
        message :"Music created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist:music.artist,
        }
     })

}

async function CreateAlbum(req, res) {

    const { title , musics } = req.body ;

    const Album = await AlbumModel.create({
        title,
        musics : musics,
        artist: req.user.userid,
    })

    res.status(201).json({
        message : "Album created successfully",
        Album:{
            id:Album.id,
            title: Album.title,
            musics : Album.musics,
            artist: Album.artist,
        }
    })

}

async function GetAllMusic(req, res) {

    const musics = await musicModel.find()

    res.status(201).json({
        message : " musics fetched successfully ",
        musics : musics 
    })
}

module.exports = {CreateMusic ,CreateAlbum , GetAllMusic };