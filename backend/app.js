const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

/**
 * IMPORTANDO DADOS
 */
const aeroportos = require('./data/aeroportos');
const rotas = require('./data/rotas');

app.use(express.json());

app.use(cors());

/**
 * ENDPONIT: Teste API ONLINE
 */
app.get('/', (req, res) => {
  res.send(`API ONLINE: ${port}`)
});

/**
 * ENDPONIT: LISTA TODOS OS AEROPORTOS
 */
app.get('/list/all/aeroportos/', (req, res) => {
  res.json(aeroportos);
});

const smallPrice = (origem, destino) => {
  const visit = [];
  const paths = []; // Armazena todas as rotas válidas

  // Adiciona o ponto inicial na lista de visitação
  visit.push({ current: origem, cost: 0, path: [origem] });

  // Executa enquanto houver nós para visitar
  while (visit.length > 0) {
    const { current, cost, path } = visit.shift();

    // Verifica se o destino foi alcançado
    if (current === destino) {
      paths.push({ path, cost });
      continue;
    }

    // Filtra rotas que partem do ponto atual
    const next = rotas.filter((rota) => rota.origem === current);

    next.forEach((item) => {
      visit.push({
        current: item.destino,
        cost: cost + Number(item.valor), // Soma o custo acumulado
        path: [...path, item.destino], // Adiciona o destino ao caminho
      });
    });
  }

  // Ordena os caminhos encontrados pelo custo (do menor para o maior)
  return paths.sort((a, b) => a.cost - b.cost);
}

app.post('/rotas', (req, res) => {
  const { origem, destino } = req.body;

  // Busca as rotas ordenadas
  console.log(req.body);
  const allRoutes = smallPrice(origem, destino);


  if (allRoutes.length > 0) {
    res.status(200).json(allRoutes);
  } else {
    res.status(404).json([{
      error: `Nenhuma rota encontrada para o destino selecionado. ORIGEM: ${origem} DESTINO: ${destino}`,
    }]);
  }
});


app.post('/create', (req, res) => {
  const novaRota = req.body;

  // Gerar um ID incremental
  const id = rotas.length > 0 ? rotas[rotas.length - 1].id + 1 : 1;
  const rotaComId = { id, ...novaRota };

  rotas.push(rotaComId);

  console.log("rotas", rotas);
  console.log("novaRota", novaRota);

  res.status(201).json([{ mensagem: "Dados cadastrados com sucesso!", rotaComId }]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
