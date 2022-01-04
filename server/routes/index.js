import { Router } from 'express';

import ItemRouter from './item.js';
import BannerItemRouter from './banner-item.js';
import SpecialExhibitionRouter from './special-exhibition.js';
import MenuRouter from './menu.js';

const ApiRouter = Router();

ApiRouter.use('/item', ItemRouter);
ApiRouter.use('/menu', MenuRouter);
ApiRouter.use('/banner-item', BannerItemRouter);
ApiRouter.use('/special-exhibition', SpecialExhibitionRouter);

export default ApiRouter;
