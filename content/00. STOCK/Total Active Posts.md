---
title: Total Active Posts
draft:
tags:
---
![[Pasted image 20250823192418.png]]


```
SELECT 
    COUNT(*) AS active_job_count
FROM 
    jobs
WHERE 
    status = 'published' 
    AND date_closing > NOW();

```