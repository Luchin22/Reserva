const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Rol = require("./Rol");

const Usuario = sequelize.define("Usuario", {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: "rol_id",
        },
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
        refresh_token: { type: DataTypes.TEXT },
        reset_token: { type: DataTypes.STRING }, // Token para recuperación de contraseña
        reset_token_expiration: { type: DataTypes.DATE }, // Expiración del token de recuperación
        fechaNacimiento: { 
            type: DataTypes.DATE 
        },
        estado: { 
            type: DataTypes.BOOLEAN, 
            defaultValue: true 
        },
},

{
    tableName: "usuarios",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_modificacion",
});

// Relaciones
Rol.hasMany(Usuario, { foreignKey: "rol_id" });
Usuario.belongsTo(Rol, { foreignKey: "rol_id" });

module.exports = Usuario;
