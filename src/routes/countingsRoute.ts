import express from 'express';
import { countings } from '../controllers/countings';

const router = express.Router();

router.get('/countings', countings);
export default router;
