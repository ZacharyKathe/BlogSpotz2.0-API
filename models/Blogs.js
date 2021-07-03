const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {}

Blogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        blog_type: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }
)