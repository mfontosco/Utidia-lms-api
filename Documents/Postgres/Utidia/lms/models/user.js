import  {sequelizeconnection} from '../config/db.js';
import Sequelize from 'sequelize';
const {DataTypes} =Sequelize


export const User = sequelizeconnection.define('User', {
  // Model attributes are defined here
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},
username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
        this.setDataValue('email', value.toLowerCase());
    },
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
// designation: {
//     type: DataTypes.STRING,
//     allowNull: true,
// },
// created_by: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
// },
// active: {
//     type: DataTypes.BOOLEAN,
//     allowNull: true,
//     default: true,
// },
// otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
// },
}, {
createdAt: 'created_at',
updatedAt: 'updated_at',
deletedAt: 'deleted_at',
tableName: 'oauth_users',
timestamps: true,
paranoid: true,
underscored: true,
});


// `sequelize.define` also returns the model
     User.sync({force:true}).then((data)=>{
console.log("synced user")
     }).catch((error)=>{
    console.log("error occurred",error)
     });
    // Code here
console.log("USER",User === sequelizeconnection.models.User); // true