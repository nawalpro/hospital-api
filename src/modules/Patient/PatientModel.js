const { Model, DataTypes } = require('sequelize');
const db = require('../../config/database');

class Patient extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4
                },
                first_name: DataTypes.STRING,
                last_name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
             
            },
            { sequelize, modelName: 'Patient' }
        );
    }
    static associate(models) {
        return this;
    }
}
Patient.init(db.sequelize);

module.exports = Patient;



