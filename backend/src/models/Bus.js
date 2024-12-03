const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Conductor = require("./Conductor");

const Bus = sequelize.define("Bus", {
    id_bus: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_conductor: {
        type: DataTypes.INTEGER,
        references: {
            model: Conductor,
            key: "id_conductor",
        },
    },
    capacidad_asientos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: "activo",
    },
}, {
    tableName: "buses",
    timestamps: false,
});

// Relaciones
Conductor.hasOne(Bus, { foreignKey: "id_conductor" });
Bus.belongsTo(Conductor, { foreignKey: "id_conductor" });

module.exports = Bus;
