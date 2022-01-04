import express from 'express';
import { MenuController } from '../controllers/menu.js';

const router = express.Router();

router.get('/', MenuController.getMenus);

export default router;
