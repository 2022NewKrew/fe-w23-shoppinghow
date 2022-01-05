import express from 'express';
import { BannerItemController } from '../controllers/banner-item.js';

const router = express.Router();

router.get('/', BannerItemController.getBannerItems);

export default router;
