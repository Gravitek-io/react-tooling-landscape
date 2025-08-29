"use client";

import { ToolCard } from "./ToolCard";
import { ToolSearchBar } from "./ToolSearchBar";
import {
  getAllTools,
  getUniqueStatuses,
  getUniqueAreas,
  getUniqueCategories,
  getCategoriesByArea,
} from "@/lib/landscape/toolUtils";
import { useToolSearch } from "@/hooks/landscape/useToolSearch";
import { LandscapeData } from "@/lib/landscape/types";

interface ToolListViewProps {
  data: LandscapeData;
}

export function ToolListView({ data }: ToolListViewProps) {
  // Extract all tools from the data
  const allTools = getAllTools(data);

  // Get unique values for filters
  const statuses = getUniqueStatuses(allTools);
  const areas = getUniqueAreas(data);
  const categories = getUniqueCategories(allTools);

  // Use the search hook
  const {
    filters,
    filteredTools,
    updateQuery,
    updateStatus,
    updateArea,
    updateCategory,
    clearFilters,
    resultsCount,
    totalCount,
  } = useToolSearch({ tools: allTools });
  
  // Get categories for the selected area (after filters are defined)
  const categoriesForArea = filters.area !== 'all' 
    ? getCategoriesByArea(allTools, filters.area)
    : categories.map(cat => ({ id: cat.id, name: cat.name }));

  return (
    <div className="w-full mx-auto px-4 sm:px-6 xl:px-20 py-8">
      {/* Search Bar */}
      <ToolSearchBar
        query={filters.query}
        onQueryChange={updateQuery}
        statusFilter={filters.status}
        onStatusChange={updateStatus}
        areaFilter={filters.area}
        onAreaChange={updateArea}
        categoryFilter={filters.category}
        onCategoryChange={updateCategory}
        statuses={statuses}
        areas={areas}
        categories={categoriesForArea}
        resultsCount={resultsCount}
        totalCount={totalCount}
        onClearFilters={clearFilters}
      />

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredTools.map((tool) => (
            <ToolCard
              key={`${tool.areaId}-${tool.categoryId}-${
                tool.subcategoryId || "none"
              }-${tool.id}`}
              tool={tool}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 text-gray-400 mx-auto mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No tools found
          </h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search criteria or clearing the filters.
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
