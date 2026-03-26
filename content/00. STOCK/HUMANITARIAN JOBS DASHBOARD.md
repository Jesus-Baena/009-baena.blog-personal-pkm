---
title: "Humanitarian Jobs Dashboard"
subtitle: "Real-Time Sector Employment Intelligence"
description: "A real-time business intelligence dashboard processing hundreds of thousands of data points daily to provide insights on humanitarian jobs, tracking the impact of funding crises on workforce dynamics, localization trends, and technical skill requirements."
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
status: Production
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
---

<div class="project-header-meta">

<div class="project-title-section">
<h1>Humanitarian Jobs Dashboard</h1>
<div class="subtitle">Real-Time Sector Employment Intelligence</div>
<div class="description">A real-time business intelligence dashboard processing hundreds of thousands of data points daily to provide insights on humanitarian jobs, tracking the impact of funding crises on workforce dynamics, localization trends, and technical skill requirements.</div>
</div>

<div class="meta-grid">
<div class="meta-item">
<span class="meta-label">Status</span>
<span class="status-badge production">Production</span>
</div>
<div class="meta-item">
<span class="meta-label">Started</span>
<span class="meta-value">February 2025</span>
</div>
<div class="meta-item">
<span class="meta-label">Last Updated</span>
<span class="meta-value">January 2026</span>
</div>
</div>

<div class="meta-grid full-width">
<div class="meta-item wide">
<span class="meta-label">Tags</span>
<div class="tag-list">
<a href="../tags/AI" class="tag internal tag-link">AI</a>
<a href="../tags/DataAnalysis" class="tag internal tag-link">DataAnalysis</a>
<a href="../tags/BusinessIntelligence" class="tag internal tag-link">BusinessIntelligence</a>
</div>
</div>
</div>

<div class="meta-links-section">
<a href="[[HUMANITARIAN JOBS DASHBOARD briefing]]" class="meta-link briefing">📋 Project Briefing</a>
<a href="https://baena.ai/demos/reliefjobs-dashboard" class="meta-link demo" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
<a href="https://baena.ai/articles/jobs-relief" class="meta-link article" target="_blank" rel="noopener noreferrer">📄 Read Article</a>
<a href="https://github.com/Jesus-Baena/2025-dashboard-reliefweb-jobs" class="meta-link github" target="_blank" rel="noopener noreferrer">⚙️ View on GitHub</a>
<a href="https://www.linkedin.com/posts/jbaenanet_humanitariantech-dataanalysis-reliefweb-activity-7401125392348221440-vGZt" class="meta-link social" target="_blank" rel="noopener noreferrer">📱 LinkedIn Post</a>
</div>

</div>

---

![[00. STOCK/humanitarian_jobs_dashboard_project_brief.pdf]]


#### [[Database Structure]]



## Analysis

<div class="card-grid">

- [[Evolution of relief jobs by experience levels]] <span class="meta-date">2025-08-10</span> #DataAnalysis

- [[LLM extraction of new information in Job Descriptions about localization]] <span class="meta-date">2025-08-10</span> #AI

- [[The rolling week problem]] #DataAnalysis 

</div>

## Metrics

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

### **A Technical Note for the n8n workflow:**

ReliefWeb’s API is very friendly but requires an `appname` parameter in every request since September 2025. Since you are a beginner, the URL you'll likely use in your n8n **HTTP Request node** will look like this:

`https://api.reliefweb.int/v2/jobs?appname=my-humanitarian-dashboard&limit=1000&preset=latest`

> [!UPDATE]
> With all the agents bots scraping the Internet automatically, APIs are gearing up their security and putting more restrictions. This call stopped working and I had to adjust every parameter for the connection not to abort. I am now doing requests of 50 profiles at a time. *2026-01-16*






