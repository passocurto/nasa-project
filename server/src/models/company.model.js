const axios = require('axios');

const companyDatabase = require('./company.mongo');

const SPACEX_API_URL = 'https://api.spacexdata.com/v4/company';

async function loadedInforCompany() {
    console.log('Donwload infor Company...');
    const response = await axios.get(SPACEX_API_URL);

    if (response.status !== 200) {
        console.log('Problem downloading company data');
        throw new Error('company data download failed');
    }

    const company = { companyNumber:response.id, ...response.data };


    // console.log( `Load company here ${response.data.docs}`);
    await saveCompany(company);
}

async function saveCompany(company) {
  await companyDatabase.findOneAndUpdate({
    companyNumber: company.id,
  }, company, {
    upsert: true,
  });
}

module.exports = {
    loadedInforCompany,
};