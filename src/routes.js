import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
	return res.json({ rota: 'Index' });
});

export default routes;
