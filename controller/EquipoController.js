import { Equipo } from '../model/equipoModel.js';

export const getAllequipos = async (req, res) => {
    try {
        const equipos = await equipo.findAll();
        res.json(equipos);
    } catch (error) {
        console.error('Error al obtener los equipos:', error);
        return res.status(500).json({ error: 'Error al obtener los equipos' });
    }
}

