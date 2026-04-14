const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hola Mundo - DevOps</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: white;
          }
          .container {
            text-align: center;
          }
          h1 { font-size: 3rem; margin-bottom: 10px; }
          p  { font-size: 1.2rem; color: #a0aec0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Hola Mundo!</h1>
          <p>Práctica DevOps - Node.js + Docker</p>
          <p>Contenedor corriendo correctamente ✅</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
