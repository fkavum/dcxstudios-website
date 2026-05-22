---
title: "Scaling with Redis & Async Pipelines"
date: "2026.03.05"
category: "NETWORK"
tag: "[LOOT_DROP]"
description: "Implementing server-authoritative logic and in-memory caching for Crossle."
---

In my solo project 'Crossle', I needed to handle real-time multiplayer communication without lag. I implemented a Redis-based in-memory caching layer and moved heavy processing to asynchronous pipelines, significantly improving throughput for matchmaking and game state handling.
