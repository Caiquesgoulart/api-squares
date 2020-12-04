const mongoose = require('mongoose')
const mongoosePag = require('mongoose-paginate')
const square = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    start: { 
        x: {
            type: Number,
            required: true
    },
        y: {
            type: Number,
            required: true
        },
    },
    end: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
    },
    area: {
        type: Number,
        required: false,
        default: 2500
    },
    paintedArea: {
        type: Number,
        required: false,
        default: 0
    }
})

square.plugin(mongoosePag)
mongoose.model('square', square)