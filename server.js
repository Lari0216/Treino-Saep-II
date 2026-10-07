import express from "express"; 
import  pool  from './db.js';
import cors from "cors";

const PORT = 3000
const app = express()


app.use(express.json())
app.use(cors())


app.get('/clientes', async (req, res) => {
    const clientes = await pool.query('SELECT clientes.id, clientes.nome, clientes.email, cpf.cpf FROM clientes JOIN cpf ON clientes.id = cpf.id_clientes')
    res.json(clientes.rows)
})

app.post('/clientes', async (req, res) => {
    const {nome, email, cpf} = req.body
    const queryCliente = 'INSERT INTO clientes (nome, email) VALUES (nome = $1, email = $2) * RETURNING'
    const resultadoCliente = await pool.query('INSERT INTO')
});


app.put('/clientes/:id', async (req, res) => {
    const {id} = req.params
    const {nome, email} = req.body
    const atualizarCliente = await pool.query('UPDATE clientes SET nome = $1, email = $2, WHERE id = $3 * RETURNINGN',[nome, email, id])
    res.json(atualizarCliente.rows[0])
})

// app.post('/clientes', async (req, res) => {
//     try {
//         const { nome, email, cpf } = req.body;

//         // 1. Executa o primeiro INSERT e usa RETURNING * para trazer o cliente criado
//         const queryCliente = 'INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING *;';
//         const resultadoCliente = await pool.query(queryCliente, [nome, email]);

//         // 2. Executa o segundo INSERT logo em seguida na tabela cpf
//         const queryCpf = 'INSERT INTO cpf (cpf, id_clientes) VALUES ($1, LASTVAL());';
//         await pool.query(queryCpf, [cpf]);

//         // 3. Pega o cliente inserido do primeiro comando e responde para a API
//         const novoCliente = resultadoCliente.rows[0];
//         res.status(201).json(novoCliente);

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ erro: 'Erro ao cadastrar cliente e CPF.' });
//     }
// });


app.listen(PORT, () =>{
    console.log("Rodando em http://localhost:3000")
})