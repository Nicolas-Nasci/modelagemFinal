const Usuario = require('../model/Usuario')

// Cadastro
const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Usuario.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os usuarios!',err)
        res.status(500).json({message: 'Erro ao cadastrar os usuarios!'})
    }
}

// Listagem
const listar = async (req,res)=>{
    try{
    const dados = await Usuario.findAll()
    res.status(200).json(dados)    
    }catch(err){
    console.error('Erro ao listar os usuarios!',err)
    res.status(500).json({message: 'Erro ao listar os usuarios!'})
    }
}

// Apagar
const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const valor = await Usuario.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor === null) {
            console.log('O código do usuario não existe!')
            res.status(404).json({ message: 'O código do usuario o não existe!' })
        } else {
            await Usuario.destroy({ where: { id: id } })
            console.log('Usuario excluído com sucesso!')
            res.status(200).json({ message: 'Usuario excluído com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível apagar o usuario', err)
        res.status(500).json({ mesage: 'Não foi possível apagar o usuario' })
    }
}

// Atualização
const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)
    try {
        const valor = await Usuario.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor) {
            await Usuario.update(valores, { where: { id: id } })
            const dados = await Usuario.findByPk(id)
            console.log('Usuario atualizado com sucesso!')
            res.status(200).json(dados)
        } else {
            console.log('O código do usuario não existe!')
            res.status(404).json({ message: 'O código do usuario não existe!' })
        }
    } catch (err) {
        console.error('Não foi possível atualizar o usuario', err)
        res.status(500).json({ mesage: 'Não foi possível atualizar o usuario' })
    }

}

const consultarId = async (req, res) => {
    const UsuarioId = req.params.id

    try {
        const usuario = await Usuario.findByPk(UsuarioId)

        if (usuario) {
            res.status(200).json(usuario)
        } else {
            res.status(404).json({ message: "Usuario com o ID " + UsuarioId + " não encontrado." })
        }
    } catch (err) {
        console.error('Erro ao buscar o usuario!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = {cadastrar, listar, apagar, atualizar, consultarId}