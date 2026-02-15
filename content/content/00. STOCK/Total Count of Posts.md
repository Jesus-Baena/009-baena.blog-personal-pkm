---
title: Total Count of Posts
draft: false
tags:
---
![[Pasted image 20260215092812.png]]

```sql
SELECT
  SUM("public"."jobs"."score") AS "sum"
FROM
  "public"."jobs"
```