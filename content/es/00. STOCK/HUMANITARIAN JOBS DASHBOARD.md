---
title: "Humanitarian Jobs Dashboard"
subtitle: "Inteligencia en tiempo real sobre el empleo en el sector"
description: "Un panel de inteligencia de negocio en tiempo real que procesa cientos de miles de puntos de datos al día para ofrecer información sobre el empleo humanitario, rastreando el impacto de las crisis de financiación en la dinámica de la fuerza laboral, las tendencias de localización y los requisitos de competencias técnicas."
image: 
aliases:
  - 2025-dashboard-reliefweb-jobs
project_ID: "PRJ-2025-001"
date: 2025-02-13
lastUpdated: 2026-01-14
tags:
  - AI
  - DataAnalysis
  - BusinessIntelligence
status: Producción
briefing: 
link: https://baena.ai/demos/reliefjobs-dashboard
article: https://baena.ai/articles/jobs-relief
github: https://github.com/Jesus-Baena/2025-dashboard-reliefweb-jobs
post: https://www.linkedin.com/posts/jbaenanet_humanitariantech-dataanalysis-reliefweb-activity-7401125392348221440-vGZt
stack:
  - n8n
  - Flowise
  - Metabase
  - Nuxt 3
  - PostgreSQL
  - Supabase
  - Docker Swarm
  - ReliefWeb API
draft: false
lang: es-ES
---

<div class="project-header-meta">

<div class="project-title-section">
<h1>Humanitarian Jobs Dashboard</h1>
<div class="subtitle">Inteligencia en tiempo real sobre el empleo en el sector</div>
<div class="description">Un panel de inteligencia de negocio en tiempo real que procesa cientos de miles de puntos de datos al día para ofrecer información sobre el empleo humanitario, rastreando el impacto de las crisis de financiación en la dinámica de la fuerza laboral, las tendencias de localización y los requisitos de competencias técnicas.</div>
</div>

<div class="meta-grid">
<div class="meta-item">
<span class="meta-label">Estado</span>
<span class="status-badge production">Producción</span>
</div>
<div class="meta-item">
<span class="meta-label">Inicio</span>
<span class="meta-value">Febrero de 2025</span>
</div>
<div class="meta-item">
<span class="meta-label">Última actualización</span>
<span class="meta-value">Enero de 2026</span>
</div>
</div>

<div class="meta-grid full-width">
<div class="meta-item wide">
<span class="meta-label">Etiquetas</span>
<div class="tag-list">
<a href="../tags/AI" class="tag internal tag-link">AI</a>
<a href="../tags/DataAnalysis" class="tag internal tag-link">DataAnalysis</a>
<a href="../tags/BusinessIntelligence" class="tag internal tag-link">BusinessIntelligence</a>
</div>
</div>
</div>

<div class="meta-links-section">
<a href="[[HUMANITARIAN JOBS DASHBOARD briefing]]" class="meta-link briefing">📋 Resumen del proyecto</a>
<a href="https://baena.ai/demos/reliefjobs-dashboard" class="meta-link demo" target="_blank" rel="noopener noreferrer">🔗 Demo en vivo</a>
<a href="https://baena.ai/articles/jobs-relief" class="meta-link article" target="_blank" rel="noopener noreferrer">📄 Leer artículo</a>
<a href="https://github.com/Jesus-Baena/2025-dashboard-reliefweb-jobs" class="meta-link github" target="_blank" rel="noopener noreferrer">⚙️ Ver en GitHub</a>
<a href="https://www.linkedin.com/posts/jbaenanet_humanitariantech-dataanalysis-reliefweb-activity-7401125392348221440-vGZt" class="meta-link social" target="_blank" rel="noopener noreferrer">📱 Publicación en LinkedIn</a>
</div>

</div>

---

![[00. STOCK/humanitarian_jobs_dashboard_project_brief.pdf]]


#### [[Database Structure]]



## Análisis

<div class="card-grid">

- [[Evolution of relief jobs by experience levels]] <span class="meta-date">2025-08-10</span> #DataAnalysis

- [[LLM extraction of new information in Job Descriptions about localization]] <span class="meta-date">2025-08-10</span> #AI

- [[The rolling week problem]] #DataAnalysis 

</div>

## Métricas

<div class="card-grid">

- [[Seven Days Trend]]

- [[Total Active Posts]]

- [[Jobs Closing Soon]]

- [[Top 10 Hiring Organizations]]

- [[Breakdown by Career Category]]

- [[Map of Jobs Density]]

- [[Opportunities by Experience Level]]

- [[Average Job Posting Duration (days)]]

- [[Average Time to Hire (days)]]

- [[Job vs. Consultancy]]

- [[Experience Level Trends]]

- [[Job vs. Consultancy Posting Trends]]

- [[Job Postings per Month]]

- [[Total Count of Posts]]

- [[Map of Density of Jobs]]

- [[Percentage of Positions Nationalized]]

- [[Most Demanded Languages]]

- [[Project-based or Long-term]]

- [[Last Post Recorded]]

</div>


---

### **Una nota técnica para el flujo de trabajo de n8n:**

La API de ReliefWeb es muy amigable, pero requiere un parámetro `appname` en cada solicitud desde septiembre de 2025. Como eres principiante, la URL que probablemente usarás en tu **nodo HTTP Request** de n8n tendrá este aspecto:

`https://api.reliefweb.int/v2/jobs?appname=my-humanitarian-dashboard&limit=1000&preset=latest`

> [!UPDATE]
> Con todos los bots de agentes rastreando Internet automáticamente, las API están reforzando su seguridad e imponiendo más restricciones. Esta llamada dejó de funcionar y tuve que ajustar todos los parámetros para que la conexión no se abortara. Ahora hago solicitudes de 50 perfiles cada vez. *2026-01-16*
