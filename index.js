const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para ler JSON vindo do front
app.use(express.json());

// Servir arquivos estáticos (como login.html)
app.use(express.static('public'));

// Simulando banco de usuários
const usuarios = [
  { usuario: 'joao', senha: '123', setor: 'TI', tipoUsuario: 'supervisor' },
  { usuario: 'maria', senha: 'abc', setor: 'RH', tipoUsuario: 'funcionario' },
  { usuario: 'jana', senha: '456', setor: 'Marketing', tipoUsuario: 'supervisor' },
  { usuario: 'paulo', senha: 'xyz', setor: 'Financeiro', tipoUsuario: 'funcionario' }
];

// Rota de login
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    res.json({
      success: true,
      usuario: user.usuario,
      setor: user.setor,
      tipoUsuario: user.tipoUsuario
    });
  } else {
    res.json({ success: false, message: 'Usuário ou senha inválidos' });
  }
});
app.post('/agendar', (req, res) => {
    const { usuario, tipoUsuario, setor, sala, inicio, fim } = req.body;
  
    if (tipoUsuario !== 'supervisor') {
      return res.json({ success: false, message: 'Apenas supervisores podem agendar salas.' });
    }
  
    // Aqui você pode salvar ou simular o agendamento
    console.log('Agendamento recebido:', req.body);
  
    res.json({ success: true });
  });
  


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
