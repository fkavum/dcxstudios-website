export const blogs = [
  {
    slug: "sql",
    title: "SQL Optimization for Real-Time B2B",
    date: "2026.04.12",
    category: "DATABASE",
    tag: "[QUEST_LOG]",
    description: "How I reduced mission-critical query times from seconds to milliseconds.",
    content: "<p>Working as an EDI Provider, I encountered mission-critical SQL queries taking seconds to execute. By designing strategic indexing, tuning data models, and implementing caching strategies, I optimized these processes down to milliseconds[cite: 49]. This was vital for service-oriented backend reliability.</p>"
  },
  {
    slug: "redis",
    title: "Scaling with Redis & Async Pipelines",
    date: "2026.03.05",
    category: "NETWORK",
    tag: "[LOOT_DROP]",
    description: "Implementing server-authoritative logic and in-memory caching for Crossle.",
    content: "<p>In my solo project 'Crossle', I needed to handle real-time multiplayer communication without lag. I implemented a Redis-based in-memory caching layer and moved heavy processing to asynchronous pipelines, significantly improving throughput for matchmaking and game state handling[cite: 50, 51].</p>"
  },
  {
    slug: "engine",
    title: "Building a 1.5MB Custom Engine",
    date: "2026.01.20",
    category: "ENGINE",
    tag: "[SECRET_LEVEL]",
    description: "Replicating particle systems and shaders in a tiny proprietary runtime.",
    content: "<p>At Playable Factory, the challenge was clear: replicate complex Unity gameplay (physics, shaders, particles) in a browser-native runtime while keeping the total footprint under 1.5MB[cite: 77]. I focused on aggressive memory management and custom shader abstractions to bridge the gap between Unity and HTML5.</p>"
  }
];
// import { blogz } from "../data/blogs";