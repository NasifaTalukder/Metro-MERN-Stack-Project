import {Router} from "express";
const router = Router();
import "dotenv/config";
import * as controller from '../controllers/appController.js';
// ---------MIDDLEWARE--------
import { requireSignIn } from "../middlewares/Middleware.js";
// ----------SECRET KEY----------
const SECRET_KEY = process.env.SECRET_KEY;

// ____________USER ACCOUNT ROUTES_____________
// --------------USER ACCOUNT REGISTRATION-------------
router.route('/signup').post(controller.signup);
// --------------USER ACCOUNT LOGIN/SIGNIN-----------
router.route("/signin").post(controller.signin);
// -----------USER DATA GET-------------
router.route('/user/:userName').get(controller.userDataGet);
// -------PROTECTED ROUTE TOKEN BASE-----------
router.route('/user-auth').get(requireSignIn,controller.userAuth);

// ______________PRODUCT ROUTES______________
// ------PRODUCT VIEW REQUEST BY GET METHOD--------
router.route("/").get(controller.AllProductsView);
// ------PRODUCT ADD USING POST METHOD-----------
router.route("/productAdd").post(controller.productAdd);
// -------PRODUCT DETAILS UPDATE USING PUT METHOD------
router.route("/updateProduct").put(controller.productUpdate);
// ------PRODUCT DELETE USING DELETE METHOD-------
router.route("/:id").delete(controller.productDelete);









export default router;
