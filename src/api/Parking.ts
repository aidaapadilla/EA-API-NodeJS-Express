import parkingController from '../controller/parkingController';
import { Router } from 'express';

const router = Router();

router.post('/booking', parkingController.parking);
router.delete('/cancel', parkingController.cancel);
router.get('/', parkingController.getall);

export default router;