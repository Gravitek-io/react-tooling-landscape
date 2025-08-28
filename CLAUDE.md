# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based project for creating dynamic tooling landscapes. The goal is to provide an interactive version of static tooling landscape images commonly used in platform engineering, where users can add/remove tools and see results in real-time.

### Key Concepts
- **Areas**: Top-level containers (e.g., "Developer Control Plane") 
- **Categories**: Can contain tools and/or child categories
- **Tools**: Individual tools with SVG logos and metadata
- **JSON-driven**: Configuration stored in JSON format for flexibility

## Architecture & File Structure

The project should be initialized as a Next.js application first. Then, for all resource types (components, hooks, lib, etc.), resources are separated into:

```
├── app/                    # Next.js App Router structure
├── components/
│   ├── landscape/          # Reusable landscape components
│   └── demo/              # Demo-specific components
├── hooks/
│   ├── landscape/          # Reusable landscape hooks
│   └── demo/              # Demo-specific hooks
├── lib/
│   ├── landscape/          # Reusable landscape utilities
│   └── demo/              # Demo-specific utilities
└── [other-resource-types]/
    ├── landscape/          # Reusable landscape resources
    └── demo/              # Demo-specific resources
```

This separation ensures clear distinction between reusable landscape functionality and demo application code.

## Technology Stack

- **Next.js 15.5**: Latest version with App Router (no `src/` folder)
- **Tailwind CSS 4.1.12**: Latest version with updated configuration approach
- **Server-Side Rendering**: Preferred over client-side rendering when possible
- **TypeScript**: All code should be in TypeScript with proper typing

## Development Guidelines

- Server-side components are preferred; separate client components into dedicated files
- All logos should be in SVG format
- JSON data structure represents the tooling landscape configuration
- Code and comments must be in English
- Follow the landscape/demo separation pattern for all resource types

## Project Status

This appears to be a new project in planning/specification phase. The codebase currently contains only documentation and example images. Development should start with Next.js project initialization following the specifications outlined in SPECS.md.