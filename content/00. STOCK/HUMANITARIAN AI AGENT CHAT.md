---
title: HUMANITARIAN AI AGENT CHAT
description: An AI powered assistant expert in Humanitarian Affairs
aliases:
  - 2024-humanitarian-chat-agent
project_ID: PRJ-2024-001
date: 2024-10-07
lastUpdated: 2025-12-16
tags:
  - AI
status: Production
briefing: https://baena.ai/projects/ai-chatbot-project
link: https://chat.baena.ai
article: https://baena.ai/articles/chat-agent
github: https://github.com/Jesus-Baena/2024-humanitarian-chat-agent
post:
draft: false
stack: "[[n8n]]"
---

<div class="project-header-meta">

<div class="project-title-section">
<h1>Humanitarian AI Agent Chat</h1>
<div class="description">An AI powered assistant expert in Humanitarian Affairs, designed to provide open-access support for humanitarian practitioners with optional persistent conversation management.</div>
</div>

<div class="meta-grid">
<div class="meta-item">
<span class="meta-label">Status</span>
<span class="status-badge production">Production</span>
</div>
<div class="meta-item">
<span class="meta-label">Started</span>
<span class="meta-value">October 2024</span>
</div>
<div class="meta-item">
<span class="meta-label">Last Updated</span>
<span class="meta-value">December 2025</span>
</div>
</div>

<div class="meta-grid full-width">
<div class="meta-item wide">
<span class="meta-label">Tags</span>
<div class="tag-list">
<a href="../tags/AI" class="tag internal tag-link">AI</a>
</div>
</div>
</div>

<div class="meta-grid full-width">
<div class="meta-item wide">
<span class="meta-label">Also Known As</span>
<div class="alias-list">
<div class="alias">2024-humanitarian-chat-agent</div>
</div>
</div>
</div>

<div class="meta-links-section">
<a href="https://baena.ai/projects/ai-chatbot-project" class="meta-link briefing" target="_blank" rel="noopener noreferrer">📋 Project Briefing</a>
<a href="https://chat.baena.ai" class="meta-link demo" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
<a href="https://baena.ai/articles/chat-agent" class="meta-link article" target="_blank" rel="noopener noreferrer">📄 Read Article</a>
<a href="https://github.com/Jesus-Baena/2024-humanitarian-chat-agent" class="meta-link github" target="_blank" rel="noopener noreferrer">⚙️ View on GitHub</a>
</div>

</div>

---

## **1. Project Title:**
The Humanitarian AI Chatbot

## **2. Implementing Organization (Placeholder):**
baena.ai — Jesus Baena (Solo Developer)

## **3. Project Background & Problem Statement:**

Humanitarian practitioners often require real-time data analysis and decision-making support in challenging field environments. While AI offers a solution, many tools are gated or lack the specific context of humanitarian datasets. There is a need for an accessible, "humanitarian-first" assistant that provides immediate value to guest users while allowing professional staff to maintain a persistent, secure history of their technical queries and operational data.

## **4. Project Goal:**

To deploy an open-access, web-based AI application optimized for humanitarian field staff, offering immediate guest access and an optional authenticated path for persistent conversation management.

## **5. Project Objectives:**

- **Public Accessibility:** Develop a public, session-based chat experience for anonymous users with zero friction to entry.
    
- **Persistent Session Management:** Implement a delegated authentication system via `baena.ai` to allow registered users to save and retrieve their full conversation history.
    
- **Low-Overhead Architecture:** Build a custom backend integration that connects a Nuxt server to n8n webhooks, ensuring all AI interactions are logged and persisted in a Supabase database.
    
- **Educational Context:** Optimize model responses to append humanitarian educational context, specifically supporting remote field staff in their decision-making.
    

## **6. Target Beneficiaries:**

- **Humanitarian Practitioners:** Field staff requiring real-time data analysis and context-aware assistance.
    
- **Humanitarian Organizations:** Entities looking to enhance operational efficiency through standardized AI tools.
    
- **Anonymous Visitors:** Users seeking quick, reliable AI interaction based on humanitarian datasets.
    

## **7. Expected Outcomes & Deliverables:**

- **Live Chat Platform:** A fully functional, production-ready web application hosted at `chat.baena.ai`.
    
- **Nuxt-n8n Bridge:** A robust custom API layer that routes frontend requests to n8n workflows without traditional server bloat.
    
- **Data Persistence Layer:** A Supabase integration managing user profiles, assistant selection, and thread history.
    
- **Technical Documentation:** A summary of the architecture and features, moving from the initial Bubble prototype to the current custom stack.
    

## **8. Sustainability:**

The project ensures long-term viability by migrating from a no-code prototype (Bubble) to a sovereign, custom architecture using Nuxt UI Pro, n8n, and Supabase. This "low-overhead" stack minimizes maintenance costs while maximizing control over data and AI behavior. By decoupling the frontend from the core automation workflows, the system can easily scale or adapt to new AI models as the humanitarian sector’s needs evolve.
