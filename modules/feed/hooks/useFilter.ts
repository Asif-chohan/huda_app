import { useState } from "react";

export interface FeedFilters {
  activity: string | null;
  content: string | null;
  platform: string | null;
}

export const useFeedFilters = (initialFilters?: Partial<FeedFilters>) => {
  const [filters, setFilters] = useState<FeedFilters>({
    activity: null,
    content: null,
    platform: null,
    ...initialFilters,
  });

  const setFilter = (key: keyof FeedFilters, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilter = (key: keyof FeedFilters) => {
    setFilter(key, null);
  };

  const clearAllFilters = () => {
    setFilters({ activity: null, content: null, platform: null });
  };

  return {
    filters,
    setFilter,
    clearFilter,
    clearAllFilters,
  };
};
