import Router from '@koa/router';
import * as Controller from '../controllers/home';

const router: Router = new Router();

router.get('/', Controller.get);
router.post('/', Controller.post);

export { router as HomeRouter };
