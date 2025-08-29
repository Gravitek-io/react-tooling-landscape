"use client";

interface ToolSearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  statusFilter: string;
  onStatusChange: (status: string) => void;
  areaFilter: string;
  onAreaChange: (area: string) => void;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  statuses: string[];
  areas: Array<{ id: string; name: string }>;
  categories: Array<{ id: string; name: string }>;
  resultsCount: number;
  totalCount: number;
  onClearFilters: () => void;
}

export function ToolSearchBar({
  query,
  onQueryChange,
  statusFilter,
  onStatusChange,
  areaFilter,
  onAreaChange,
  categoryFilter,
  onCategoryChange,
  statuses,
  areas,
  categories,
  resultsCount,
  totalCount,
  onClearFilters,
}: ToolSearchBarProps) {
  const hasActiveFilters =
    query ||
    statusFilter !== "all" ||
    areaFilter !== "all" ||
    categoryFilter !== "all";

  // Categories are already filtered by the parent component

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 max-w-4xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Status Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
          >
            <option value="all">All Statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Area Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Area
          </label>
          <select
            value={areaFilter}
            onChange={(e) => onAreaChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
          >
            <option value="all">All Areas</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
            disabled={areaFilter === "all"}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="w-full px-2 py-1 text-sm  font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      {/* Search Input */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search tools by name, description, tags..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 text-center">
        Showing{" "}
        <span className="font-medium text-gray-900">{resultsCount}</span> of{" "}
        <span className="font-medium text-gray-900">{totalCount}</span> tools
      </div>
    </div>
  );
}
