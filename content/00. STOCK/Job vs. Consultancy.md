---
title: Job vs. Consultancy
draft: false
tags:
---
![[Pasted image 20260215091909.png]]

```sql
SELECT
    pt.name AS posting_type,
    COUNT(j.job_id) AS number_of_postings
FROM
    Jobs AS j
JOIN
    Job_Posting_Types AS jpt ON j.job_id = jpt.job_id
JOIN
    Posting_Types AS pt ON jpt.posting_type_id = pt.posting_type_id
WHERE
    j.status = 'published'
    AND j.date_closing > CURRENT_DATE
GROUP BY
    pt.name;
```
