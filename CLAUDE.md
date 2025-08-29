# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based open source project for creating dynamic tooling landscapes. The goal is to provide an interactive version of static tooling landscape images commonly used in platform engineering, where users can add/remove tools and see results in real-time.

**License**: Apache 2.0

### Key Concepts

- **Areas**: Top-level containers (e.g., "Developer Control Plane")
- **Categories**: Can contain tools and/or subcategories
- **Subcategories**: Nested categories within categories
- **Tools**: Individual tools with logos and metadata (supports PNG, SVG, JPEG)
- **JSON-driven**: Configuration stored in JSON format for flexibility

## Architecture & File Structure

The project follows a clear separation between reusable landscape functionality and demo application code:

```
├── demo/                   # Demo Next.js application
│   ├── app/               # Next.js App Router structure
│   ├── components/
│   │   ├── landscape/     # Reusable landscape components
│   │   │   ├── Landscape.tsx
│   │   │   ├── Areas.tsx
│   │   │   ├── AreaContent.tsx
│   │   │   ├── Category.tsx
│   │   │   ├── SubCategory.tsx
│   │   │   └── Tool.tsx
│   │   └── demo/          # Demo-specific components
│   │       ├── DemoHeader.tsx
│   │       ├── DemoLandscape.tsx
│   ├── lib/
│   │   └── landscape/     # Core landscape utilities and types
│   │       ├── types.ts   # TypeScript interfaces
│   │       ├── data.ts    # Data processing utilities
│   │       └── areas.ts   # Area management utilities
│   ├── data/
│   │   └── landscape.json # Sample landscape configuration
│   └── public/
│       └── logos/         # Tool logos (PNG, SVG, JPEG)
├── images/                # Documentation images
└── README.md             # Project documentation
```

## Technology Stack

- **Next.js 15.5**: App Router with Turbopack support
- **React 19.1**: Latest React version
- **Tailwind CSS 4**: Modern CSS framework with PostCSS integration
- **TypeScript 5**: Full TypeScript implementation
- **ESLint 9**: Code linting with Next.js configuration

## Data Structure

The landscape is configured through JSON with the following structure:

- **metadata**: Project information (name, version, lastUpdated)
- **areasContents**: Array of area contents with categories
- **categories**: Container for tools and subcategories
- **subcategories**: Nested categories within categories
- **tools**: Individual tools with id, name, description, logo, url, tags, and status

Tool status can be: "active", "recommended", "deprecated", or "beta"

## Development Guidelines

- Server-side components are preferred; separate client components into dedicated files
- All logos should be optimized and support multiple formats (SVG preferred, PNG/JPEG accepted)
- JSON data structure represents the tooling landscape configuration
- Code and comments must be in English
- Follow the landscape/demo separation pattern for all resource types
- Use TypeScript interfaces defined in `lib/landscape/types.ts`

## Development Commands

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build production version with Turbopack
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Status

The project is actively developed with a working Next.js demo application. The core landscape functionality is implemented with responsive design and interactive tool display. The demo includes sample data showcasing platform engineering tools across different categories.
