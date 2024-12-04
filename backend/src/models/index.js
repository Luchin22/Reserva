const Usuario = require('./Usuario');
const Bus = require('./Bus');
const Asiento = require('./Asiento');
const Ruta = require('./Ruta');
const Horario = require('./Horario');
const Reserva = require('./Reserva');
const Pago = require('./Pago');
const HistorialReserva = require('./HistorialReserva');
const Rol = require('./Rol');
const Conductor = require('./Conductor');

// Relaciones

// Relación Rol - Usuario
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

// Relación Usuario - Reserva
Usuario.hasMany(Reserva, { foreignKey: 'usuario_id' });
Reserva.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación Usuario - HistorialReserva
Usuario.hasMany(HistorialReserva, { foreignKey: 'usuario_id' });
HistorialReserva.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación Reserva - HistorialReserva
Reserva.hasMany(HistorialReserva, { foreignKey: 'id_reserva' });
HistorialReserva.belongsTo(Reserva, { foreignKey: 'id_reserva' });

// Relación Reserva - Pago
Reserva.hasOne(Pago, { foreignKey: 'id_reserva' });
Pago.belongsTo(Reserva, { foreignKey: 'id_reserva' });

// Relación Bus - Asiento
Bus.hasMany(Asiento, { foreignKey: 'id_bus' });
Asiento.belongsTo(Bus, { foreignKey: 'id_bus' });

// Relación Ruta - Horario
Ruta.hasMany(Horario, { foreignKey: 'id_ruta' });
Horario.belongsTo(Ruta, { foreignKey: 'id_ruta' });

// Relación Horario - Reserva
Horario.hasMany(Reserva, { foreignKey: 'id_horario' });
Reserva.belongsTo(Horario, { foreignKey: 'id_horario' });

// Relación Bus - Conductor
Bus.hasMany(Conductor, { foreignKey: 'id_bus' });
Conductor.belongsTo(Bus, { foreignKey: 'id_bus' });

// Relación Conductor - Usuario
Conductor.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasOne(Conductor, { foreignKey: 'usuario_id' });

module.exports = {
  Usuario,
  Rol,
  Bus,
  Asiento,
  Ruta,
  Horario,
  Reserva,
  Pago,
  HistorialReserva,
  Conductor,
};