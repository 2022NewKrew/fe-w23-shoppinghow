import express from 'express';
import { ItemController } from '../controllers/item.js';

const router = express.Router();

router.get('/', ItemController.getItems);
router.get('/hot-items', ItemController.getHotItems);
router.get('/hot-items-name', ItemController.getHotItemsName);
router.get('/hot-deal', ItemController.getHotDealItems);
router.get('/autocomplete', ItemController.getAutocompleteList);

export default router;
