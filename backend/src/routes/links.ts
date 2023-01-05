import { Router } from 'express';
import LinksControllers from '../controllers/links';

const router = Router();

router.post('/links', LinksControllers.postLink);

router.get('/link/:code', LinksControllers.hitLink);

router.get('/link/:code/stats', LinksControllers.getLink);

export default router;