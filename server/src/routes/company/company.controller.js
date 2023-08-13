const { 
    loadedInforCompany,
} = require('../../models/company.model');

const {
    getPagination,
} = require('../../services/query');

async function httpGetInforCompany(req, res) {
    const company = await loadedInforCompany();
    console.log('Estou aqui');
    return res.status(200).json(company);
}

module.exports = {
    httpGetInforCompany,
}
