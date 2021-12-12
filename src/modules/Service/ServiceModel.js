const { Model, DataTypes } = require('sequelize');
const db = require('../../config/database');

class Service extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4
                },
                title: DataTypes.STRING,
                description: DataTypes.STRING,
             
            },
            { sequelize, modelName: 'Service' }
        );
    }
    static associate(models) {
        return this;
    }
}
Service.init(db.sequelize);

module.exports = Service;



