import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

export const Equipo = sequelize.define(
    'Equipo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estadio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fundacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'equipos',
        timestamps: false
    }

)
