import { useMemo } from 'react';

function useFilter(items, searchTerm, filterKey = 'name') {
  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter((item) =>
      item[filterKey]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm, filterKey]);

  return filteredItems;
}

export default useFilter;