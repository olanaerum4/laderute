// NOBIL API Client

const axios = require('axios');

class NobilAPI {
    constructor() {
        this.baseURL = 'https://api.nobil.no/'; // Replace with the actual NOBIL API base URL
    }

    async getChargingStations(latitude, longitude, radius) {
        try {
            const response = await axios.get(`${this.baseURL}chargingstations`, {  // Replace with the actual API endpoint
                params: {
                    latitude,
                    longitude,
                    radius
                }
            });
            return response.data; // Assuming response.data is an array of ChargingStation objects
        } catch (error) {
            console.error('Error fetching charging stations:', error);
            throw error;
        }
    }
}

module.exports = NobilAPI;