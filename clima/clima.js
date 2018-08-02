const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=72a13f27655ecf01190057851b31b8f9`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}