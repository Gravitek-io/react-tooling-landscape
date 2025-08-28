export interface LandscapeTool {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  tags: string[];
  status: "active" | "recommended" | "deprecated" | "beta";
}

export interface LandscapeCategory {
  id: string;
  name: string;
  description: string;
  tools: LandscapeTool[];
  subcategories: LandscapeSubcategory[];
}

export interface LandscapeSubcategory {
  id: string;
  name: string;
  description: string;
  tools: LandscapeTool[];
}

export interface LandscapeAreaContent {
  id: string;
  categories: LandscapeCategory[];
}

export interface LandscapeArea {
  id: string;
  name: string;
  description: string;
}

export interface LandscapeMetadata {
  name: string;
  version: string;
  lastUpdated: string;
}

export interface LandscapeData {
  metadata: LandscapeMetadata;
  areasContents: LandscapeAreaContent[];
}
