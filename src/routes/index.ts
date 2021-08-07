import { combineRouters } from '../middleware/combine-routers';
import { HomeRouter } from './home';

const router = combineRouters(HomeRouter);

export default router;
