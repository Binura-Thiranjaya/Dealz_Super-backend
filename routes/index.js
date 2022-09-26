import express from 'express';
//import route files!

const apiRouter = express.Router();

// Path: routes/users.routes.js
apiRouter.use('/users', usersRouter);
// Path: routes/sales.routes.js
apiRouter.use('/sales', salesRouter);
// Path: routes/inventory.routes.js
apiRouter.use('/inventory', inventoryRouter);
// Path: routes/supplier.routes.js
apiRouter.use('/supplier', salesRouter);
// Path: routes/products.routes.js
apiRouter.use('/products', productsRouter);


export default apiRouter;