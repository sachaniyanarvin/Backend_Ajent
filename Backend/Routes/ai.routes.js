import { Router } from 'express';
import * as aiController from '../Controllers/ai.controller.js';
const router = Router();

router.get('/get-result', aiController.getResult)


export default router;