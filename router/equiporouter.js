import { getAllequipos } from '../controller/EquipoController.js';
import express from 'express';

const router = express.Router();

router.get('/equipos', getAllequipos);

export { router };