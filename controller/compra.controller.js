const Compra = require('../model/Compra')

// Cadastro
const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Compra.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar as compras!',err)
        res.status(500).json({message: 'Erro ao cadastrar as compras!'})
    }
}

// Listagem
const listar = async (req,res)=>{
    try{
    const dados = await Compra.findAll()
    res.status(200).json(dados)    
    }catch(err){
    console.error('Erro ao listar as compras!',err)
    res.status(500).json({message: 'Erro ao listar as compras!'})
    }
}

// Apagar
const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const valor = await Compra.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor === null) {
            console.log('O código do produto não existe!')
            res.status(404).json({ message: 'O código da compra o não existe!' })
        } else {
            await Compra.destroy({ where: { id: id } })
            console.log('Dados excluídos com sucesso!')
            res.status(200).json({ message: 'Dados excluídos com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível apagar a compra', err)
        res.status(500).json({ mesage: 'Não foi possível apagar a compra' })
    }
}

// Atualização
const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)
    try {
        const valor = await Compra.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor) {
            await Compra.update(valores, { where: { id: id } })
            const dados = await Compra.findByPk(id)
            console.log('Dados atualizados com sucesso!')
            res.status(200).json(dados)
        } else {
            console.log('O código da compra não existe!')
            res.status(404).json({ message: 'O código da compra não existe!' })
        }
    } catch (err) {
        console.error('Não foi possível atualizar a compra', err)
        res.status(500).json({ mesage: 'Não foi possível atualizar a compra' })
    }

}


module.exports = { cadastrar, listar, apagar, atualizar }
