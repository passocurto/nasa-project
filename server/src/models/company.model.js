const axios = require('axios');

const companyDatabase = require('./company.mongo');

const SPACEX_API_URL = 'https://api.spacexdata.com/v4/launches/query';

async function loadedInforCompany() {
    console.warn('Donwload infor Company');
    const response = await axios(SPACEX_API_URL, {
    query: {},
        options: {
        pagination: false,
        populate: [
            {
            path: 'company',
            select: {
                name: 1
            }
            },
            {
            path: 'payloads',
            select: {
                'company': 1
            }
            }
        ]
        }
    });

    if (response.status !== 200) {
        console.log('Problem downloading company data');
        throw new Error('company data download failed');
    }

    // console.log( `Load company here ${response.data.docs}`);
   // await saveLaunch(launch);
}

module.exports = {
    loadedInforCompany,
};