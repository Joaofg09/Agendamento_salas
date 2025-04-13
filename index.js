const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para ler JSON vindo do front
app.use(express.json());

// Servir arquivos estáticos (como login.html)
app.use(express.static('public'));

// Simulação de usuários cadastrados
const usuarios = [
  { id: 1, username: 'admin', password: '1234' },
  { id: 2, username: 'joao', password: 'abcd' }
];

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  
  if (usuario) {
    res.json({ success: true, userId: usuario.id });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
