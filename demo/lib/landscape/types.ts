export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  tags: string[];
  status: "active" | "recommended" | "deprecated" | "beta";
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tools: Tool[];
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  tools: Tool[];
}

export interface Area {
  id: string;
  name: string;
  description: string;
  categories: Category[];
}

export interface LandscapeMetadata {
  name: string;
  version: string;
  lastUpdated: string;
}

export interface LandscapeData {
  metadata: LandscapeMetadata;
  areas: Area[];
}
