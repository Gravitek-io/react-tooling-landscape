import { ToolWithContext } from "./toolUtils";

export interface SearchFilters {
  query: string;
  status: string;
  area: string;
  category: string;
}

export function searchTools(tools: ToolWithContext[], filters: SearchFilters): ToolWithContext[] {
  return tools.filter((tool) => {
    // Search query filter - search in name, description, and tags
    if (filters.query) {
      const query = filters.query.toLowerCase();
      const searchableText = [
        tool.name,
        tool.description,
        ...(tool.tags || []),
        tool.status,
        tool.categoryName,
        tool.subcategoryName,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      if (!searchableText.includes(query)) {
        return false;
      }
    }

    // Status filter
    if (filters.status && filters.status !== 'all') {
      if (tool.status !== filters.status) {
        return false;
      }
    }

    // Area filter
    if (filters.area && filters.area !== 'all') {
      if (tool.areaId !== filters.area) {
        return false;
      }
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (tool.categoryId !== filters.category) {
        return false;
      }
    }

    return true;
  });
}

export function getStatusBadgeColor(status: string): string {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'recommended':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'beta':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'deprecated':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}