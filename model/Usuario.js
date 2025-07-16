const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario',{
    codUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    primeiroNome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    segundoNome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }

},{
    tableName: 'usuarios',
    timestamps: false
})

module.exports = Usuario