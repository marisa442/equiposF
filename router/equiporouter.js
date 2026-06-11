import { getAllequipos, getEquipoById } from '../controller/EquipoController.js';
import express from 'express';

const router = express.Router();

router.get('/equipos', getAllequipos);
router.get('/equipos/:id', getEquipoById);


export { router };