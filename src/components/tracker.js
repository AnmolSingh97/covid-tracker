import React from 'react';
import axios from 'axios';

function tracker() {

    const params = {
        // key: 'c5371861b5714ad183b81959212905',
        // q: '',
        // days: 3,
        // aqi: 'yes'
        // forecast_days: 1,
        // hourly: 1 
    }
    
    axios.get('https://api.covid19india.org/v4/min/data-all.min.json', {params})
    .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse);
    }).catch(error => {
        console.log(error);
});
    return (
        <div>
           apiResponse
        </div>
    )
}

export default tracker
