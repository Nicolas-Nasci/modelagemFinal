const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    percentualDeDesconto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto