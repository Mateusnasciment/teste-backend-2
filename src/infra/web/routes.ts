import { Router } from 'express';

import employeesRouter from '@infra/web/employees/routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    title: 'API de cadastro de funcionários',
    description: 'Boa sorte no teste. :)'
  })
});
routes.use('/', employeesRouter);

export default routes;
