const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    musics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"music"
    }],

    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    }

})

const AlbumModel = mongoose.model("Album", AlbumSchema);

module.exports = AlbumModel;