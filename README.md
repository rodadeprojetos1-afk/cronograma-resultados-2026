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
- instalação como PWA em navegadores compatíveis;
- service worker com cache offline e permissão de notificações;
- lembretes locais enquanto o app estiver aberto.

## Como abrir

Abra `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor estático. Exemplo:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Próxima etapa recomendada

Mover os dados de `app.js` para uma planilha/API única, para que novas datas, participantes e valores possam ser atualizados sem editar a interface.

## Notificações push

O GitHub Pages hospeda apenas arquivos estáticos. Para enviar uma notificação mesmo quando o aplicativo estiver fechado, ainda é necessário conectar um serviço de Web Push com backend/scheduler, como Firebase Cloud Messaging, OneSignal ou um Worker com Web Push/VAPID. A instalação PWA, o service worker e a solicitação de permissão já estão preparados para essa próxima etapa.
