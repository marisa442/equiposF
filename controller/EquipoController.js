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

export const getEquipoById = async (req, res) => {
    try {
        const { id } = req.params;
        const equipo = await Equipo.findByPk(id);
        if (!equipo) {
            return res.status(404).json({ message: "Equipo no encontrado" });
        }
        res.json(equipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};