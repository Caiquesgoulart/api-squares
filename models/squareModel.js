const mongoose = require('mongoose')
const square = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    start: { 
        x: {
            type: Number,
            require: true
    },
        y: {
            type: Number,
            require: true
        }
    },
    end: {
        x: {
            type: Number,
            require: true
        },
        y: {
            type: Number,
            require: true
        }
    },
    area: {
        type: Number,
        require: false,
        default: 2500
    },
    paintedArea: {
        type: Number,
        require: false
    }
})

mongoose.model('square', square)