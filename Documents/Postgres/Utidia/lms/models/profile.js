import  {sequelizeconnection} from '../config/db.js';
import Sequelize from 'sequelize';
const {DataTypes} =Sequelize


export const Profile = sequelizeconnection.define('Profile', {
  // Model attributes are defined here
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},
user_id: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
},
full_name: {
    type: DataTypes.STRING,
    allowNull: true,
   
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
        this.setDataValue('email', value.toLowerCase());
    },
},
old_password: {
    type: DataTypes.STRING,
    allowNull: false,
},
new_password: {
    type: DataTypes.STRING,
    allowNull: false,
},
confirm_password: {
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
tableName: 'oauth_profiles',
timestamps: true,
paranoid: true,
underscored: true,
});


// `sequelize.define` also returns the model
     Profile.sync({force:true}).then((data)=>{
console.log("synced Profile")
     }).catch((error)=>{
    console.log("error occurred",error)
     });
    // Code here
console.log("Profile",Profile === sequelizeconnection.models.Profile); // true