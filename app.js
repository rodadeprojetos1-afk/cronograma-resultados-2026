const editais = [
  { title:'Redes Bahia', date:'2026-09-28', condition:'R$ 100.000,00 por organização, durante 2 anos', folder:'Redes Bahia', site:'Redes Bahia', count:1, preview:['Associação dos Produtores Remanescentes Quilombolas de Volta Miúda — R$ 100.000,00'] },
  { title:'PNAB PE — Premiação a Pontos e Pontões de Cultura', date:'2026-09-29', condition:'R$ 3.000.000,00 no total; 100 premiações de R$ 30.000,00', folder:'Premiação Pontos de Cultura', site:'PNAB PE — Premiação', count:21, preview:['Associação Quilombola do Sítio Teixeira — R$ 30.000,00','Associação dos Moradores Quilombolas de Santana — R$ 30.000,00','Associação Comunitária Remanescente do Quilombo de Sambaquim de Cupira — R$ 30.000,00'] },
  { title:'MDA — Sociobiodiversidade e Plantas Medicinais', date:'2026-10-01', condition:'R$ 8.000.000,00 no total; propostas de R$ 50.000,00 a R$ 500.000,00', folder:'MDA - Plantas Med.', site:'MDA Plantas Medicinais', count:34, preview:['Associação Quilombola Rufinos — R$ 392.680,00','Associação do Território dos Remanescentes do Quilombo de Mocambo — R$ 307.450,00','Associação Comunidade Sambaquim — R$ 418.760,00'] },
  { title:'PNAB PE — Ações Continuadas', date:'2026-10-08', condition:'R$ 1.291.462,20 no total; R$ 92.247,30 por projeto', folder:'PNAB PE - Ações Cont.', site:'PNAB PE - Ações', count:2, preview:['Grupo Coco Negros e Negras — R$ 92.247,30','Zeza do Coco — R$ 92.247,30'] },
  { title:'PNAB PE — Fomento a Pontos de Cultura', date:'2026-10-13', condition:'R$ 4.400.000,00 no total; R$ 110.000,00 por projeto', folder:'Fomento a Pontos de Cultura', site:'PNAB PE — PONTOS', count:10, preview:['Associação de Moradores, Pequenos Produtores Rurais e Quilombolas Onze Negras do Engenho Trapiche — R$ 110.000,00','Associação Quilombola do Sítio Teixeira — R$ 110.000,00','Associação União das Mulheres Agricultoras e Pescadoras Quilombolas — R$ 110.000,00'] },
  { title:'PNAB GO — Artesanato', date:'2026-10-19', condition:'R$ 25.000,00 por projeto', folder:'PNAB GO - Audiovisual', site:'PNAB GO - Artesanato', count:1, preview:['Diraci Luís de Moura Sautos'] },
  { title:'PNAB GO — Audiovisual', date:'2026-10-19', condition:'R$ 120.000,00 por projeto', folder:'PNAB GO - Audiovisual', site:'PNAB GO - Artesanato', count:1, preview:['Celiomar Vidal'] },
  { title:'PNAB GO — Artes Visuais', date:'2026-10-19', condition:'R$ 100.000,00 por projeto', folder:'PNAB GO - Artes Visuais', site:'PNAB GO - Artes Visuais', count:1, preview:['Maria Helena Tuya Kalunga — Artes Visuais'] },
  { title:'MDA — Alimento no Prato', date:'2026-10-27', condition:'R$ 300.000,00 a R$ 800.000,00 por projeto', folder:'', site:'', count:17, preview:['Associação de Mulheres Jasmim do Estado do Amazonas — R$ 800.000,00','Associação Remanescente de Quilombo (Grito para a Liberdade) — R$ 800.000,00','Associação da Comunidade do Quilombo Urbano João Borges Vieira — R$ 800.000,00'] },
  { title:'Fundo Casa Mulheres', date:'2026-10-30', condition:'R$ 2.100.000,00 no total; até R$ 60.000,00 por projeto', folder:'Fundo Casa', site:'Fundo Casa - Mulheres', count:2, preview:['Associação Raízes de Dandara — Mulheres Quilombolas do Leitão da Carapuça — R$ 60.000,00','Associação Onze Negras do Trapiche — R$ 60.000,00'] },
  { title:'Funcultura PE — Patrimônio Cultural', date:'2026-11-10', condition:'R$ 3.510.000,00 no total; até R$ 150.000,00 por proposta', folder:'Funcultura Patrimônio', site:'Funcultura Patrimônio', count:1, preview:['Associação dos Moradores Quilombolas de Santana — R$ 90.000,00'] },
  { title:'Petrobras Cultural', date:'2026-11-30', condition:'R$ 270.000.000,00 no total; propostas entre R$ 500.000,00 e R$ 1.500.000,00', folder:'Petrobrás Cultural', site:'Petrobrás Cult.', count:18, preview:['Associação Eufrásia da Comunidade Quilombola Córrego do Sossego — R$ 600.000,00','Associação Clube de Jovens Senhor dos Pobres — R$ 500.000,00','Associação Comunitária Indígena Yrykaw — R$ 2.500.000,00'] },
  { title:'Prêmio Pacto Contra a Fome', date:'2026-11-30', condition:'R$ 100.000,00 por iniciativa; até 6 iniciativas', folder:'Prêmio Pacto Fome', site:'Prêmio Pacto Fome', count:1, preview:['Alimento Imperativo Ltda. — R$ 100.000,00'] },
  { title:'Fundo Ecos', date:'2026-11-30', condition:'Aproximadamente R$ 3.300.000,00 no total; até R$ 150.000,00 por projeto', folder:'Fundo Ecos', site:'Fundo Ecos', count:2, preview:['Associação Comunidade Quilombola Rio das Almas — R$ 150.000,00','Associação de Pequenos Produtores da Comunidade Quilombola Kalunga do Tocantins — R$ 150.000,00'] },
  { title:'PNAB SE — Novas Obras', date:'2026-09-09', dateLabel:'Após 09/09/2026', condition:'Até R$ 2.000.000,00 no total; R$ 50.000,00 a R$ 250.000,00 por projeto', folder:'PNAB - Novas Obras', site:'PNAB SE', count:3, preview:['Associação do Território dos Remanescentes do Quilombo de Mocambo do Município de Aquidabá — R$ 210.000,00','Associação Santa Cruz Remanescente de Quilombola do Povoado Forras — R$ 100.000,00','Associação da Comunidade Remanescente de Quilombo do Povoado Mocambo — R$ 100.000,00'] },
  { title:'Patrocínio Embratur', date:'2026-12-01', dateLabel:'Sem data fixa', condition:'Valor definido por projeto após análise do Comitê de Patrocínio', folder:'Patrocínio Embratur', site:'Patrocínio Embratur', count:1, preview:['Associação Quilombola Os Rufino — R$ 199.999,00'], flexible:true },
  { title:'ONU Mulheres', date:'2026-06-04', condition:'De R$ 80.000,00 a R$ 150.000,00 por proposta', folder:'ONU Mulheres', site:'ONU Mulheres', count:6, preview:['Associação Quilombola Onze Negras do Engenho Trapiche — R$ 150.000,00','Associação Quilombolas de Santa Rosa de Boa Vista — R$ 150.000,00','Associação de Mulheres Kalunga de Monte Alegre — R$ 150.000,00'], status:'past' },
  { title:'ProAC SP — Economia Criativa', date:'2026-12-15', dateLabel:'Sem data oficial exata', condition:'R$ 15.000.000,00 no total; R$ 500.000,00 ou R$ 250.000,00 por projeto', folder:'PROAC SP', site:'ProAC SP', count:1, preview:['Casa da Cultura Santa Tereza — R$ 500.000,00'], flexible:true }
];

const today = new Date('2026-09-23T12:00:00');
let activeFilter = 'upcoming';
let search = '';
const favorites = new Set(JSON.parse(localStorage.getItem('resultados-favoritos') || '[]'));

function dateObj(item){ return new Date(item.date + 'T12:00:00'); }
function daysUntil(item){ return Math.ceil((dateObj(item)-today)/86400000); }
function status(item){ if(item.status === 'past' || daysUntil(item) < 0) return 'past'; if(daysUntil(item) <= 14) return 'soon'; return 'later'; }
function formatDate(item){ if(item.dateLabel) return item.dateLabel; return dateObj(item).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}).replace('.',''); }
function monthLabel(item){ return dateObj(item).toLocaleDateString('pt-BR',{month:'long',year:'numeric'}).replace(/^./,x=>x.toUpperCase()); }
function moneyTotal(){ return 'R$ 1,3 bi'; }

function icon(name){ const paths={search:'M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z',calendar:'M7 3v4m10-4v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z',arrow:'M5 12h14m-6-6 6 6-6 6',star:'M12 3.5l2.6 5.25 5.8.84-4.2 4.1.99 5.78L12 16.75l-5.19 2.72.99-5.78-4.2-4.1 5.8-.84L12 3.5Z',external:'M14 5h5v5m0-5-7 7M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4'}; return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name]}"/></svg>`; }

function render(){
  const filtered=editais.filter(item=>{
    const matchesFilter=(activeFilter==='upcoming'&&status(item)!=='past')||(activeFilter==='past'&&status(item)==='past')||(activeFilter==='soon'&&status(item)==='soon')||(activeFilter==='later'&&status(item)==='later')||(activeFilter==='favorites'&&favorites.has(item.title));
    const q=search.toLowerCase(); const allNames=participantLists[item.title]||item.preview; return matchesFilter && (!q || `${item.title} ${allNames.join(' ')}`.toLowerCase().includes(q));
  }).sort((a,b)=>dateObj(a)-dateObj(b));
  const next=editais.filter(x=>status(x)!=='past').sort((a,b)=>dateObj(a)-dateObj(b))[0];
  document.getElementById('app').innerHTML=`
    <header class="topbar"><div class="brand"><span class="brand-mark">↗</span><div><strong>RESULTADOS</strong><small>EDITAIS 2026</small></div></div><div class="top-actions"><button class="install-btn" id="installBtn">Instalar APP</button><button class="icon-btn" id="notifyBtn" aria-label="Ativar notificações">${icon('calendar')}</button></div></header>
    <main class="shell">
      <section class="hero"><div class="eyebrow">PAINEL DE ACOMPANHAMENTO</div><div class="next-callout"><div><span class="mini-label">PRÓXIMO RESULTADO</span><strong>${next.title}</strong><span>${formatDate(next)} · ${next.count} participante${next.count>1?'s':''}</span></div><div class="days"><b>${Math.max(0,daysUntil(next))}</b><span>dias</span></div></div></section>
      <section class="stats"><div><b>${editais.length}</b><span>editais</span></div><div><b>${editais.filter(x=>status(x)!=='past').length}</b><span>em aberto</span></div><div><b>${moneyTotal()}</b><span>em disputa</span></div></section>
      <section class="toolbar"><div class="searchbox">${icon('search')}<input id="search" placeholder="Buscar edital ou participante" value="${search}" /></div><div class="filters"><button class="filter ${activeFilter==='upcoming'?'active':''}" data-filter="upcoming">A acompanhar <small>${editais.filter(x=>status(x)!=='past').length}</small></button><button class="filter ${activeFilter==='soon'?'active':''}" data-filter="soon">Próximos <small>${editais.filter(x=>status(x)==='soon').length}</small></button><button class="filter ${activeFilter==='later'?'active':''}" data-filter="later">Depois <small>${editais.filter(x=>status(x)==='later').length}</small></button><button class="filter ${activeFilter==='past'?'active':''}" data-filter="past">Encerrados <small>${editais.filter(x=>status(x)==='past').length}</small></button><button class="filter star-filter ${activeFilter==='favorites'?'active':''}" data-filter="favorites">${icon('star')} Salvos</button></div></section>
      <section class="schedule-head"><div><span class="eyebrow">CRONOGRAMA</span><h2>${activeFilter==='past'?'Resultados encerrados':'Resultados a acompanhar'}</h2></div><span class="result-count">${filtered.length} exibido${filtered.length!==1?'s':''}</span></section>
      <section class="timeline">${filtered.length?filtered.map(card).join(''):`<div class="empty"><span>⌕</span><strong>Nenhum resultado encontrado</strong><p>Tente buscar por outro nome ou altere o filtro.</p></div>`}</section>
    </main>
    <nav class="bottom-nav"><button class="selected">${icon('calendar')}<span>Cronograma</span></button><button id="savedNav">${icon('star')}<span>Salvos</span></button></nav>
    <div id="toast" class="toast"></div>`;
  bind();
}

function card(item){ const s=status(item), isFav=favorites.has(item.title); const badge=s==='past'?'encerrado':s==='soon'?'em breve':'programado'; const details=item.preview.map((x,i)=>`<li><span>${i+1}</span><b>${x}</b></li>`).join(''); return `<article class="result-card ${s==='past'?'past':''}" data-title="${item.title}"><div class="date-rail"><span class="month">${monthLabel(item).split(' ')[0].slice(0,3).toUpperCase()}</span><strong>${dateObj(item).getDate().toString().padStart(2,'0')}</strong><span class="weekday">${dateObj(item).toLocaleDateString('pt-BR',{weekday:'short'}).replace('.','')}</span></div><div class="card-main"><div class="card-top"><span class="status ${s}"><i></i>${badge}</span><button class="save ${isFav?'saved':''}" data-save="${item.title}" aria-label="${isFav?'Remover dos salvos':'Salvar edital'}">${icon('star')}</button></div><h3>${item.title}</h3><p class="condition"><small>VALOR / CONDIÇÕES</small>${item.condition}</p><div class="links">${item.folder?`<span>${item.folder}</span>`:''}${item.site?`<span>${item.site} ${icon('external')}</span>`:''}</div><div class="participants"><div class="participant-title"><span>${icon('arrow')} ${item.count} participante${item.count>1?'s':''}</span><button class="toggle">ver lista</button></div><ul>${details}${item.count>item.preview.length?`<li class="more"><span>+</span><b>Mais ${item.count-item.preview.length} participantes no documento original</b></li>`:''}</ul></div></div></article>`; }
function bind(){ document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;render()}); const input=document.getElementById('search'); input?.addEventListener('input',e=>{search=e.target.value;render();const el=document.getElementById('search');el.focus();el.setSelectionRange(search.length,search.length)}); document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{const t=b.dataset.save; favorites.has(t)?favorites.delete(t):favorites.add(t);localStorage.setItem('resultados-favoritos',JSON.stringify([...favorites]));toast(favorites.has(t)?'Edital salvo para acompanhar':'Edital removido dos salvos');render()}); document.getElementById('savedNav')?.addEventListener('click',()=>{activeFilter='favorites';render()}); document.getElementById('notifyBtn')?.addEventListener('click',()=>toast('Lembretes serão adicionados na próxima etapa')); }
function toast(msg){const t=document.getElementById('toast'); if(!t)return; t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
const expanded = new Set();
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt = event; const button=document.getElementById('installBtn'); if(button) button.hidden=false; });
window.addEventListener('appinstalled', () => { deferredInstallPrompt=null; const button=document.getElementById('installBtn'); if(button) button.hidden=true; });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js?v=10').catch(() => {});

function scheduleLocalReminders(){
  if (Notification.permission !== 'granted') return;
  const now = Date.now();
  editais.filter(item => status(item) !== 'past').forEach(item => {
    const when = dateObj(item).getTime();
    const key = `reminder-${item.title}-${item.date}`;
    if (when > now && !localStorage.getItem(key)) {
      const delay = when - now;
      if (delay < 2147483647) setTimeout(() => { navigator.serviceWorker.ready.then(reg => reg.showNotification(`Resultado: ${item.title}`, { body:`A data prevista é ${formatDate(item)}. Toque para abrir o cronograma.`, icon:'./icon.svg', tag:key })); localStorage.setItem(key,'1'); }, delay);
    }
  });
}

async function enableNotifications(){
  if (!('Notification' in window)) { toast('Este navegador não oferece notificações'); return; }
  const permission = await Notification.requestPermission();
  if (permission === 'granted') { scheduleLocalReminders(); toast('Notificações ativadas neste celular'); }
  else toast('Permissão de notificações não concedida');
}

function card(item){
  const s=status(item), isFav=favorites.has(item.title), full=participantLists[item.title] || item.preview, open=expanded.has(item.title), urls=editalLinks[item.title]||{};
  const badge=s==='past'?'encerrado':s==='soon'?'em breve':'programado';
  const rows=(open?full:item.preview).map((x,i)=>`<li><span>${i+1}</span><b>${x}</b></li>`).join('');
  const remaining=full.length-item.preview.length;
  return `<article class="result-card ${s==='past'?'past':''}" data-title="${item.title}"><div class="date-rail"><span class="month">${monthLabel(item).split(' ')[0].slice(0,3).toUpperCase()}</span><strong>${dateObj(item).getDate().toString().padStart(2,'0')}</strong><span class="weekday">${dateObj(item).toLocaleDateString('pt-BR',{weekday:'short'}).replace('.','')}</span></div><div class="card-main"><div class="card-top"><span class="status ${s}"><i></i>${badge}</span><button class="save ${isFav?'saved':''}" data-save="${item.title}" aria-label="${isFav?'Remover dos salvos':'Salvar edital'}">${icon('star')}</button></div><h3>${item.title}</h3><p class="condition"><small>VALOR / CONDIÇÕES</small>${item.condition}</p><div class="links">${urls.folder?`<a class="resource" href="${urls.folder}" target="_blank" rel="noopener"><small>PASTA</small>Google Drive ${icon('external')}</a>`:''}${urls.site?`<a class="resource site-resource" href="${urls.site}" target="_blank" rel="noopener"><small>SITE</small>Portal do resultado ${icon('external')}</a>`:''}</div><div class="participants ${open?'expanded':''}"><div class="participant-title"><span>${icon('arrow')} ${full.length} participante${full.length>1?'s':''}</span><button class="toggle ${open?'open':''}" data-expand="${item.title}">${open?'ocultar lista ↑':'ver lista completa ↓'}</button></div><ul>${rows}${!open&&remaining>0?`<li class="more"><span>+</span><b>Mais ${remaining} participantes — toque para abrir a lista completa</b></li>`:''}</ul></div></div></article>`;
}

function bind(){
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;render()});
  const input=document.getElementById('search');
  input?.addEventListener('input',e=>{search=e.target.value;render();const el=document.getElementById('search');el.focus();el.setSelectionRange(search.length,search.length)});
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{const t=b.dataset.save;favorites.has(t)?favorites.delete(t):favorites.add(t);localStorage.setItem('resultados-favoritos',JSON.stringify([...favorites]));render()});
  document.querySelectorAll('[data-expand]').forEach(b=>b.onclick=()=>{const t=b.dataset.expand;expanded.has(t)?expanded.delete(t):expanded.add(t);render()});
  document.getElementById('savedNav')?.addEventListener('click',()=>{activeFilter='favorites';render()});
  document.getElementById('notifyBtn')?.addEventListener('click',enableNotifications);
  const install=async()=>{if(!deferredInstallPrompt){toast('Use o menu do navegador: Instalar app ou Adicionar à Tela de Início');return} deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null;};
  document.getElementById('installBtn')?.addEventListener('click',install);
  document.getElementById('installHero')?.addEventListener('click',install);
  scheduleLocalReminders();
}
let approvedYear='all';
let approvedQuery='';
const approvedOpen=new Set();
const approvedGroupOpen=new Set();

function approvedCard(item){
  const key=`${item.year}-${approvedData.indexOf(item)}`, open=approvedOpen.has(key);
  return `<article class="approved-card ${open?'open':''}"><div class="approved-card-head"><div><span class="approved-year">${item.year}</span><h3>${item.name}</h3><p>${item.edital}</p></div><button class="approved-toggle" data-approved-open="${key}">${open?'ocultar':'ver detalhes'} ${open?'↑':'↓'}</button></div>${open?`<div class="approved-detail"><span>CATEGORIA E VALOR DA PREMIAÇÃO</span><strong>${item.award}</strong></div>`:''}</article>`;
}

function renderApproved(){
  const panel=document.getElementById('approvedPanel'); if(!panel)return;
  const q=approvedQuery.toLowerCase();
  const filtered=approvedData.filter(item=>(approvedYear==='all'||String(item.year)===approvedYear)&&(!q||`${item.name} ${item.edital} ${item.award}`.toLowerCase().includes(q)));
  const groups=[...new Set(filtered.map(item=>item.edital))].map(edital=>({edital,items:filtered.filter(item=>item.edital===edital)}));
  const groupedHtml=groups.map(group=>{
    const groupKey=`${group.items[0].year}-${group.edital}`;
    const open=approvedGroupOpen.has(groupKey)||Boolean(approvedQuery);
    return `<section class="approved-group ${open?'open':''}"><button class="approved-group-toggle" data-approved-group="${groupKey}" aria-expanded="${open}"><span><span class="approved-year">${group.items[0].year}</span><strong>${group.edital}</strong><small>${open?'Ocultar aprovados':'Ver aprovados'}</small></span><b>${group.items.length} aprovado${group.items.length!==1?'s':''} ${open?'↑':'↓'}</b></button><div class="approved-group-list" ${open?'':'hidden'}>${group.items.map(item=>approvedCard(item)).join('')}</div></section>`;
  }).join('');
  panel.innerHTML=`<div class="approved-wrap"><div class="approved-intro"><span class="eyebrow">HISTÓRICO DE RESULTADOS</span><h2>Proponentes aprovados</h2><p>Consulte os aprovados separados por edital, categoria e valor.</p></div><div class="approved-tools"><div class="searchbox">${icon('search')}<input id="approvedSearch" placeholder="Buscar aprovado ou edital" value="${approvedQuery}" /></div><div class="approved-filters"><button class="filter ${approvedYear==='all'?'active':''}" data-approved-year="all">Todos <small>${approvedData.length}</small></button><button class="filter ${approvedYear==='2025'?'active':''}" data-approved-year="2025">2025 <small>${approvedData.filter(x=>x.year===2025).length}</small></button><button class="filter ${approvedYear==='2026'?'active':''}" data-approved-year="2026">2026 <small>${approvedData.filter(x=>x.year===2026).length}</small></button></div></div><div class="approved-count">${filtered.length} aprovado${filtered.length!==1?'s':''} em ${groups.length} edital${groups.length!==1?'is':''}</div><div class="approved-list">${filtered.length?groupedHtml:`<div class="empty"><span>⌕</span><strong>Nenhum aprovado encontrado</strong><p>Tente buscar por outro nome ou edital.</p></div>`}</div></div>`;
  panel.querySelectorAll('[data-approved-year]').forEach(button=>button.onclick=()=>{approvedYear=button.dataset.approvedYear;approvedOpen.clear();renderApproved();bindApproved()});
  panel.querySelectorAll('[data-approved-open]').forEach(button=>button.onclick=()=>{const key=button.dataset.approvedOpen;approvedOpen.has(key)?approvedOpen.delete(key):approvedOpen.add(key);renderApproved();bindApproved()});
  panel.querySelectorAll('[data-approved-group]').forEach(button=>button.onclick=()=>{const key=button.dataset.approvedGroup;approvedGroupOpen.has(key)?approvedGroupOpen.delete(key):approvedGroupOpen.add(key);renderApproved();bindApproved()});
  const searchInput=panel.querySelector('#approvedSearch'); searchInput?.addEventListener('input',event=>{approvedQuery=event.target.value;renderApproved();bindApproved();const next=panel.querySelector('#approvedSearch');next.focus();next.setSelectionRange(approvedQuery.length,approvedQuery.length)});
}

function bindApproved(){ document.querySelectorAll('[data-approved-year],[data-approved-open]').forEach(()=>{}); }

function bind(){
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;render()});
  const input=document.getElementById('search'); input?.addEventListener('input',e=>{search=e.target.value;render();const el=document.getElementById('search');el.focus();el.setSelectionRange(search.length,search.length)});
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{const t=b.dataset.save;favorites.has(t)?favorites.delete(t):favorites.add(t);localStorage.setItem('resultados-favoritos',JSON.stringify([...favorites]));render()});
  document.querySelectorAll('[data-expand]').forEach(b=>b.onclick=()=>{const t=b.dataset.expand;expanded.has(t)?expanded.delete(t):expanded.add(t);render()});
  document.getElementById('savedNav')?.addEventListener('click',()=>{activeFilter='favorites';render()});
  document.getElementById('notifyBtn')?.addEventListener('click',enableNotifications);
  const install=async()=>{if(!deferredInstallPrompt){toast('Use o menu do navegador: Instalar app ou Adicionar à Tela de Início');return} deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null;};
  document.getElementById('installBtn')?.addEventListener('click',install);
  const shell=document.querySelector('.shell');
  if(shell&&!document.getElementById('viewTabs')) shell.insertAdjacentHTML('beforebegin',`<div class="view-tabs" id="viewTabs"><button class="view-tab active" id="scheduleTab">Cronograma</button><button class="view-tab" id="approvedTab">Aprovados <small>${approvedData.length}</small></button></div><section class="approved-panel" id="approvedPanel" hidden></section>`);
  const scheduleTab=document.getElementById('scheduleTab'), approvedTab=document.getElementById('approvedTab'), approvedPanel=document.getElementById('approvedPanel');
  scheduleTab?.addEventListener('click',()=>{shell.hidden=false;approvedPanel.hidden=true;scheduleTab.classList.add('active');approvedTab.classList.remove('active')});
  approvedTab?.addEventListener('click',()=>{shell.hidden=true;approvedPanel.hidden=false;scheduleTab.classList.remove('active');approvedTab.classList.add('active');renderApproved()});
  scheduleLocalReminders();
}
render();
