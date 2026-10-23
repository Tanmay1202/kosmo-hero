# AGENTS.md — Hero MotoCorp Multi-Branch Dealership Website Guidelines

## Core Principles & Boundaries
1. **Primary Purpose**: This application is a production-grade, multi-branch dealership website representing Kosmo Hero MotoCorp across Punjab (Jalandhar, Ludhiana, Dasuya, and Hoshiarpur).
2. **Strict Brand Separation**:
   - Vehicle content, model names, specifications, engineering features (i3S, xSens, XTEC, Sprint-EBT), warranty (5 years / 70,000 km for motorcycles, 50,000 km for scooters), and genuine parts/accessories MUST come strictly from **Hero MotoCorp India**.
   - NEVER introduce Tata Motors vehicle names (Nexon, Safari, Harrier, Punch, Tiago, Altroz, Curvv, Aeris, Sierra), passenger car terminology, or Tata imagery into this project.
   - Dealership business details (Managing Director Mr. Raghav Ahuja, branch locations, operating hours, local careers, local contacts) come from the **Kosmo Dealership** reference.
3. **Design System & Palette**:
   - Hero Red: `#ee2326` (Primary action & brand accent)
   - Hover / Deep Red: `#d30000`
   - Off-Black: `#181818` (Utility bar, deep footers)
   - Charcoal / Slate: `#232323`, `#303030`
   - Light Neutral: `#f5f6f7`, `#ffffff`
   - Muted Gray: `#595959`, `#707070`
   - Typography: Bold athletic uppercase headlines (`font-display font-black tracking-wider`), clean readable sans body.
4. **Architecture**:
   - Stack: Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router v7 + Lucide Icons.
   - Client-side static architecture with typed data modules in `src/data/`.
   - No dead links, no placeholder 404 routes. All 23 routes must render complete, verified content.
   - Lead forms (Test Ride, Service, Contact, Careers, Finance) provide immediate on-screen reference codes and 1-click formatted WhatsApp dispatch to the respective branch sales/service desk.
