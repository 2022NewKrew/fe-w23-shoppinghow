import express from 'express';
import { SpecialExhibitionController } from '../controllers/special-exhibition.js';

const router = express.Router();

router.get('/', SpecialExhibitionController.getSpecialExhibition);
router.get('/main', SpecialExhibitionController.getMainSpecialExhibition);
export default router;
