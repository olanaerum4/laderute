import express from 'express';
import axios from 'axios';

const router = express.Router();

// GET endpoint to fetch nearby charging stations
router.get('/charging-stations', async (req, res) => {
    const { latitude, longitude, radius } = req.query;

    // Validate query parameters
    if (!latitude || !longitude || !radius) {
        return res.status(400).json({ error: 'Please provide latitude, longitude, and radius.' });
    }

    try {
        const response = await axios.get(`https://api.nobil.no/charging-stations`, {
            params: { latitude, longitude, radius }
        });
        return res.json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while fetching charging stations.' });
    }
});

export default router;