'use client';

import { useState, useMemo } from 'react';
import { ToolWithContext } from '@/lib/landscape/toolUtils';
import { searchTools, SearchFilters } from '@/lib/landscape/searchUtils';

interface UseToolSearchProps {
  tools: ToolWithContext[];
}

export function useToolSearch({ tools }: UseToolSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    status: 'all',
    area: 'all',
    category: 'all',
  });

  const filteredTools = useMemo(() => {
    return searchTools(tools, filters);
  }, [tools, filters]);

  const updateQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, query }));
  };

  const updateStatus = (status: string) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  const updateArea = (area: string) => {
    setFilters((prev) => ({ ...prev, area, category: 'all' })); // Reset category when area changes
  };

  const updateCategory = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      status: 'all',
      area: 'all',
      category: 'all',
    });
  };

  return {
    filters,
    filteredTools,
    updateQuery,
    updateStatus,
    updateArea,
    updateCategory,
    clearFilters,
    resultsCount: filteredTools.length,
    totalCount: tools.length,
  };
}