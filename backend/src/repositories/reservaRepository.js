const { Pago } = require('../models');

const pagoRepository = {
    findAll: async () => await Pago.findAll(),
    findById: async (id) => await Pago.findByPk(id),
    create: async (data) => await Pago.create(data),
    update: async (id, data) => await Pago.update(data, { where: {id_reserva: id } }),
    delete: async (id) => await Pago.destroy({ where: {id_reserva: id } }),
};

module.exports = pagoRepository;
