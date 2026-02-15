---
title: Last Post Recorded
draft: false
tags:
---
![[Pasted image 20260215093625.png]]
```sql
SELECT
  MAX(date_created) AS "last_published_at"
FROM
  public.jobs;
```

A smaller, but not minor visualization, helps me to check if the automation script is running properly. 