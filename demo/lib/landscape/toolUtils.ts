import { LandscapeData, LandscapeTool } from "./types";

export interface ToolWithContext extends LandscapeTool {
  areaId: string;
  categoryId: string;
  categoryName: string;
  subcategoryId?: string;
  subcategoryName?: string;
}

export function getAllTools(data: LandscapeData): ToolWithContext[] {
  const tools: ToolWithContext[] = [];

  data.areasContents.forEach((areaContent) => {
    areaContent.categories.forEach((category) => {
      // Add tools directly in the category
      category.tools?.forEach((tool) => {
        tools.push({
          ...tool,
          areaId: areaContent.id,
          categoryId: category.id,
          categoryName: category.name,
        });
      });

      // Add tools from subcategories
      category.subcategories?.forEach((subcategory) => {
        subcategory.tools?.forEach((tool) => {
          tools.push({
            ...tool,
            areaId: areaContent.id,
            categoryId: category.id,
            categoryName: category.name,
            subcategoryId: subcategory.id,
            subcategoryName: subcategory.name,
          });
        });
      });
    });
  });

  return tools;
}

export function getUniqueStatuses(tools: ToolWithContext[]): string[] {
  const statuses = new Set(tools.map((tool) => tool.status).filter(Boolean));
  return Array.from(statuses);
}

export function getUniqueAreas(data: LandscapeData): Array<{ id: string; name: string }> {
  // We need to get area names from areas.ts, for now return basic structure
  return data.areasContents.map((areaContent) => ({
    id: areaContent.id,
    name: areaContent.id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  }));
}

export function getUniqueCategories(tools: ToolWithContext[]): Array<{ id: string; name: string; areaId: string }> {
  const categories = new Map();
  tools.forEach((tool) => {
    const key = `${tool.areaId}-${tool.categoryId}`;
    categories.set(key, { 
      id: tool.categoryId, 
      name: tool.categoryName,
      areaId: tool.areaId
    });
  });
  
  return Array.from(categories.values());
}

export function getCategoriesByArea(tools: ToolWithContext[], areaId: string): Array<{ id: string; name: string }> {
  const categories = new Map();
  tools
    .filter((tool) => tool.areaId === areaId)
    .forEach((tool) => {
      categories.set(tool.categoryId, tool.categoryName);
    });
  
  return Array.from(categories.entries()).map(([id, name]) => ({ id, name }));
}