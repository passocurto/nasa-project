const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyNumber:{
        type:String,
        require: true,
    },
    ceo:{
        type:String,
        require: true,
    },
    coo:{
        type: String,
        require: true,
    },
    cto:{
        type: String,
        require: true,
    },
    cto_propulsion:{
        type: String,
        require: true,
    },
    employees:{
        type: Number,
        require: true,
    },
    founded:{
        type: Number,
        require: true,
    },
    founder:{
        type: String,
        require: true,
    },
    headquarters: {
        type: Object,
        require: true,
    },
    launch_sites:{
        type: Number,
        require: true,
    },
    links: {
        type: Object,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    summary:{
        type: String,
        require: true,
    },
    test_sites:{
        type: Number,
        require: true,
    },
    valuation:{
        type: String,
        require: true,
    },
    vehicles:{
        type: Number,
        require: true,
    }

});

// Connects companySchema with the "company" collection
module.exports = mongoose.model('Company', companySchema);