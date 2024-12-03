const { Rol } = require('../models');

const rolRepository = {
    findAll: async () => await Rol.findAll(),
    findById: async (id) => await Rol.findByPk(id),
    create: async (data) => await Rol.create(data),
    update: async (id, data) => await Rol.update(data, { where: {id_ruta: id } }),
    delete: async (id) => await Rol.destroy({ where: {id_ruta: id } }),
};

module.exports = rolRepository;
