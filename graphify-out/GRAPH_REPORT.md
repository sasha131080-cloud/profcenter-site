# Graph Report - profcenter-site  (2026-09-02)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 12 nodes · 10 edges · 2 communities (1 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 150 input · 15 output

## Graph Freshness
- Built from commit: `ca1824be`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- UI Settings
- Service Worker

## God Nodes (most connected - your core abstractions)
1. `background_color` - 1 edges
2. `display` - 1 edges
3. `icons` - 1 edges
4. `orientation` - 1 edges
5. `short_name` - 1 edges
6. `start_url` - 1 edges
7. `theme_color` - 1 edges
8. `urlsToCache` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (2 total, 1 thin omitted)

### Community 0 - "UI Settings"
Cohesion: 0.20
Nodes (9): background_color, description, display, icons, name, orientation, short_name, start_url (+1 more)

## Knowledge Gaps
- **10 isolated node(s):** `background_color`, `description`, `display`, `icons`, `name` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 11 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `background_color`, `description`, `display` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._