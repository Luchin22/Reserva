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
Reserva.hasMany(HistorialReserva, { foreignKey: 'reserva_id' });
HistorialReserva.belongsTo(Reserva, { foreignKey: 'reserva_id' });

// Relación Reserva - Pago
Reserva.hasOne(Pago, { foreignKey: 'reserva_id' });
Pago.belongsTo(Reserva, { foreignKey: 'reserva_id' });

// Relación Bus - Asiento
Bus.hasMany(Asiento, { foreignKey: 'bus_id' });
Asiento.belongsTo(Bus, { foreignKey: 'bus_id' });

// Relación Ruta - Horario
Ruta.hasMany(Horario, { foreignKey: 'ruta_id' });
Horario.belongsTo(Ruta, { foreignKey: 'ruta_id' });

// Relación Horario - Reserva
Horario.hasMany(Reserva, { foreignKey: 'horario_id' });
Reserva.belongsTo(Horario, { foreignKey: 'horario_id' });

// Relación Bus - Conductor
Bus.hasMany(Conductor, { foreignKey: 'bus_id' });
Conductor.belongsTo(Bus, { foreignKey: 'bus_id' });

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
