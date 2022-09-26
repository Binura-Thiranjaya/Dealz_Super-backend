import express from 'express';
//import route files!
import productRoutes from './product.route.js';
const apiRouter = express.Router();

// Path: routes/users.routes.js
apiRouter.use('/product', productRoutes);


export default apiRouter;