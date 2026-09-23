# Cronograma de Resultados 2026

Protótipo web responsivo criado a partir do PDF `CRONOGRAMA DE RESULTADOS ATUALIZADO (2).pdf`.

## O que já funciona

- painel responsivo para celular e desktop;
- destaque automático do próximo resultado;
- busca por edital ou participante;
- filtros de todos, próximos, programados e salvos;
- cartões com data, condições, pasta/site e participantes de referência;
- favoritos persistidos no navegador com `localStorage`;
- navegação inferior no celular.

## Como abrir

Abra `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor estático. Exemplo:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Próxima etapa recomendada

Mover os dados de `app.js` para uma planilha/API única, para que novas datas, participantes e valores possam ser atualizados sem editar a interface.
