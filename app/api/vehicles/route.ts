import { Router } from 'express';
import { getElectricVehicles } from '../db';

const router = Router();

// GET all electric vehicles
router.get('/electric', async (req, res) => {
    try {
        const vehicles = await getElectricVehicles();
        res.json({ success: true, data: vehicles });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;