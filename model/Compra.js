const { Sequelize } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('compras',{
    codCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    codUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'codUsuario'
        }
    },

    codProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },

    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },

    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    descontoAplicado: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    precoFinal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    formaDePagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },

    statusDeCompra: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'usuarios',
    timestamps: false
})

module.exports = Compra