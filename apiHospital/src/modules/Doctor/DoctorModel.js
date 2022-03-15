const { Model, DataTypes } = require('sequelize');
const db = require('../../config/database');

class Doctor extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4
                },
                firstname: DataTypes.STRING,
                lastname: DataTypes.STRING,
                phone: DataTypes.INTEGER,
                
                email: {
                    type: DataTypes.STRING,
                },
                
                password: DataTypes.STRING,
                officeAdress: DataTypes.STRING,
                priceConsultation: DataTypes.INTEGER,
                practiceHospital: DataTypes.BOOLEAN
            },
            { sequelize, modelName: 'Doctor' }
        );
    }
    static associate(models) {
        // this.hasMany(models.Speciality, {as: 'specilityId'}),
        // this.hasMany(models.Hospital, {as: 'hostpitalId'})
        // this.hasMany(models.Disponibility, {as: ''})
        return this;
    }
}

Doctor.init(db.sequelize);

module.exports = Doctor;



