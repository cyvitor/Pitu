import { Router } from 'express';
import LinksControllers from '../controllers/links';

const router = Router();

router.post('/links', LinksControllers.postLink);

router.get('/links/:code', LinksControllers.hitLink);

router.get('/links/:code/stats', LinksControllers.getLink);

export default router;