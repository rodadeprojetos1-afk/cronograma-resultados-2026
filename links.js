// Links extraídos dos próprios campos clicáveis do PDF original.
const editalLinks = {
  'Redes Bahia': { folder:'https://drive.google.com/drive/folders/1RLJ11sa00mi8KjSgSixedscSzdqHqnjK', site:'https://editais.movimentobemmaior.org.br/2026/' },
  'PNAB PE — Premiação a Pontos e Pontões de Cultura': { folder:'https://drive.google.com/drive/folders/1VKlw5K--zsPdEF5OYDU43tUu-svd-Fsd', site:'https://www.mapacultural.pe.gov.br/oportunidade/3263/' },
  'MDA — Sociobiodiversidade e Plantas Medicinais': { folder:'https://drive.google.com/drive/folders/1-HTUr4ggC7DNQnqLbwvbk8kO4sjKnA38', site:'https://www.gov.br/mda/pt-br/acesso-a-informacao/participacao-social/Editais-de-chamamento-publico/2026/edital-sfdt-no-02-2026-estruturacao-e-fortalecimento-de-cadeias-produtivas-da-sociobiodiversidade-e-de-plantas-medicinais-aromaticas-e-condimentares' },
  'PNAB PE — Ações Continuadas': { folder:'https://drive.google.com/drive/folders/1QJzuuqFZg4VDKSGxSfVwtzSF-ESyn4qx', site:'https://www.mapacultural.pe.gov.br/oportunidade/2829/' },
  'PNAB PE — Fomento a Pontos de Cultura': { folder:'https://drive.google.com/drive/folders/1h_P3maWw8p907gsk8u9zN3rtb64PPos3', site:'https://www.mapacultural.pe.gov.br/oportunidade/3261/' },
  'PNAB GO — Artesanato': { folder:'https://drive.google.com/drive/folders/1HnYukzx3uitwlEDBM-lWALInGMIbLdNQ?usp=drive_link', site:'https://goias.gov.br/cultura/pnab/edital-2026-pnab/' },
  'PNAB GO — Audiovisual': { folder:'https://drive.google.com/drive/folders/1HnYukzx3uitwlEDBM-lWALInGMIbLdNQ?usp=drive_link', site:'https://goias.gov.br/cultura/pnab/edital-2026-pnab/' },
  'PNAB GO — Artes Visuais': { folder:'https://drive.google.com/drive/folders/1WDiiVGlXlHofo8c3uXvUeEXbBh1rwD0b?usp=drive_link', site:'https://goias.gov.br/cultura/pnab/edital-2026-pnab/' },
  'Fundo Casa Mulheres': { folder:'https://drive.google.com/drive/folders/1VXtesJnMowBxghDIFMYMQjdstweTiK88', site:'https://casa.org.br/chamadas/mulheres-que-transformam-o-futuro-apoio-a-solucoes-comunitarias-para-a-resiliencia-climatica-e-a-justica-socioambiental/' },
  'Funcultura PE — Patrimônio Cultural': { folder:'https://drive.google.com/drive/folders/1ZoP-KUn7fzgQVLnUmuCwn_oBluDH3H9W?usp=drive_link', site:'https://www.mapacultural.pe.gov.br/oportunidade/2946/' },
  'Petrobras Cultural': { folder:'https://drive.google.com/drive/folders/16Bq9EYlgPQth24yq7UolzFm4gK-VJr1s', site:'https://petrobras.com.br/cultural/selecoes-publicas-culturais' },
  'Prêmio Pacto Contra a Fome': { folder:'https://drive.google.com/drive/folders/1eG1QjFktDMk83MM3SIeLkQzRYBlB8IFv', site:'https://pactocontrafome.org/premio-pacto-contra-a-fome-2026/' },
  'Fundo Ecos': { folder:'https://drive.google.com/drive/folders/1onENpSpCyGQDO7SPLRGs6XnpB9n5NjwK', site:'https://fundoecos.org.br/edital/edital-49o-3o-2026-para-apoio-a-organizacoes-na-amazonia-legal/' },
  'PNAB SE — Novas Obras': { folder:'https://drive.google.com/drive/folders/12XOyPAPQPjpfiA1OGCPk-LtR9ExN2Zii', site:'https://aldirblanc.se.gov.br/publicacoes' },
  'Patrocínio Embratur': { folder:'https://drive.google.com/drive/folders/1BNI9rXDV9jqu5Zf_Fpz4ZvqIMwQMMcrR', site:'https://patrocinio.embratur.com.br/' },
  'ONU Mulheres': { folder:'https://drive.google.com/drive/folders/1DiTeTgR9HK4mK5iO8MErKxT9fnO1UndW', site:'https://padlet.com/mulheresejusticaclimatica/chamada-001-2026-mulheres-e-justica-climatica-lwfsxlog2yfwszqf' },
  'ProAC SP — Economia Criativa': { folder:'https://drive.google.com/drive/folders/1sNW3IVyYxwYFD_t71UwK6g93RrDYgKm6a', site:'https://www.cultura.sp.gov.br/sec_cultura/Arquivo_de_Editais/Editais_Fomento_Cultsp/Fomento_CultSP_2026/economia_criativa_fomento_a_mostras_festivais_e_eventos_2026' }
};
