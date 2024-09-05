import { Router } from "express";

const emocoesRoutes = Router();
let emocoes = [
    {
        id: 1,
        nome: 'Nojinho',
        cor: 'Verde'
    },
    {
        id: 2,
        nome: 'Alegria',
        cor: 'Amarelo'
    },
    {
        id: 3,
        nome: 'Raiva',
        cor: 'Vermelho' 
    }
];
//rota para buscar todas as emoções
emocoesRoutes.get ('/', (req, res) => {
    return res.status(200).send(emocoes)
});
//rota para criar uma nova emoção
emocoesRoutes.post ('/', (req, res) => {
    const{ nome, cor} = req.body
    const newEmotion = {
        id:emocoes.length +1,
        nome: nome,
        cor:CryptoKey
    }
    emocoes.push(newEmotion)
    return res.status(201).send(emocoes)
});

//rota para buscar emoções por id
emocoesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const emocao = emocoes.find((emotion) => emotion.id == id)
    if (!emocao){
        return res.status(404).send({
            message: "emoção não encontrada"
        })
    }
    //console.log(id);
    return res.status(200).send(emocao)
});

export default emocoesRoutes