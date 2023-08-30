import { DataTypes } from 'sequelize';
import sequelize from '../../config/db';// Path to your config.js

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profilePicture: {
        type: DataTypes.STRING(1234),
        allowNull: true,
    },
});

export default User;