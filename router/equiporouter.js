import { getAllequipos, getEquipoById, createEquipo } from '../controller/EquipoController.js';
import express from 'express';

const router = express.Router();

router.get('/equipos', getAllequipos);
router.get('/equipos/:id', getEquipoById);
router.post('/equipos', createEquipo);

export { router };