import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
// import { } from 

class Patient extends Model {
    static init(sequelize) {
        return super.init(   {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            phone: DataTypes.STRING,
            
            email: {
                type: DataTypes.STRING,
            },
            
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
