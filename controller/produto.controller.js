const Produto = require('../model/Produto')

// Cadastro
const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Produto.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os produtos!',err)
        res.status(500).json({message: 'Erro ao cadastrar os produtos!'})
    }
}

// Listagem
const listar = async (req,res)=>{
    try{
    const dados = await Produto.findAll()
    res.status(200).json(dados)    
    }catch(err){
    console.error('Erro ao listar os produtos!',err)
    res.status(500).json({message: 'Erro ao listar os produtos!'})
    }
}

// Apagar
const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const valor = await Produto.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor === null) {
            console.log('O código do produto não existe!')
            res.status(404).json({ message: 'O código do produto o não existe!' })
        } else {
            await Produto.destroy({ where: { id: id } })
            console.log('Produto excluído com sucesso!')
            res.status(200).json({ message: 'Produto excluído com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível apagar o produto', err)
        res.status(500).json({ mesage: 'Não foi possível apagar o produto' })
    }
}

// Atualização
const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)
    try {
        const valor = await Produto.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor) {
            await Produto.update(valores, { where: { id: id } })
            const dados = await Produto.findByPk(id)
            console.log('Produto atualizado com sucesso!')
            res.status(200).json(dados)
        } else {
            console.log('O código do produto não existe!')
            res.status(404).json({ message: 'O código do produto não existe!' })
        }
    } catch (err) {
        console.error('Não foi possível atualizar o produto', err)
        res.status(500).json({ mesage: 'Não foi possível atualizar o produto' })
    }

}

const consultarId = async (req, res) => {
    const produtoId = req.params.id

    try {
        const produto = await Produto.findByPk(produtoId)

        if (produto) {
            res.status(200).json(produto)
        } else {
            res.status(404).json({ message: "Produto com o ID " + produtoId + " não encontrado." })
        }
    } catch (err) {
        console.error('Erro ao buscar o produto!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = {cadastrar, listar, apagar, atualizar, consultarId}